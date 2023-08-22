import { createSlice, original } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { EventCardType } from "../../common/types";
import { navigate, pop } from "../../services/navigation/RootNavigation";
import { buyTicket } from "../../../database/db";
import { queryClient } from "../../../App";

interface TicketState {
  ticketInCart: {
    event: EventCardType;
    amount: number;
    totalPrice: number;
  };
}

const initialState: TicketState = {
  ticketInCart: {
    event: null,
    amount: 0,
    totalPrice: 0,
  },
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setEvent: (state, action: PayloadAction<EventCardType>) => {
      state.ticketInCart.event = action.payload;
      state.ticketInCart.amount = 1;
      state.ticketInCart.totalPrice = 1 * action.payload.ticket.value;
    },
    addTicketInCart: (state) => {
      state.ticketInCart.amount = state.ticketInCart.amount + 1;
      state.ticketInCart.totalPrice =
        state.ticketInCart.amount * state.ticketInCart.event.ticket.value;
    },
    removeTicketInCart: (state) => {
      if (state.ticketInCart.amount > 0) {
        state.ticketInCart.amount = state.ticketInCart.amount - 1;
        state.ticketInCart.totalPrice =
          state.ticketInCart.amount * state.ticketInCart.event.ticket.value;
      }
    },
    payTicket: (state) => {
      if(state.ticketInCart.amount > 0){
        const ticketInCartOriginal = original(state.ticketInCart)
        buyTicket(ticketInCartOriginal.event, ticketInCartOriginal.amount)
        state = initialState
      }
    }
  },
});

export const {setEvent, addTicketInCart, removeTicketInCart, payTicket} = ticketSlice.actions;

export const selectTicket = (state: RootState) => state.ticket;

export default ticketSlice.reducer;
