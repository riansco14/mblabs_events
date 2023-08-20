import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface EventState {
  eventsFavorites: number[] 
}

const initialState: EventState = {
  eventsFavorites: []
}

interface EventPayload{
  idEvent: number
}


export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addOrRemoveEventFavorite: (state, action: PayloadAction<EventPayload>) => {
        const eventFind = state.eventsFavorites.find(item=>item === action.payload.idEvent)
        if(eventFind){
          state.eventsFavorites = state.eventsFavorites.filter(item=>item != action.payload.idEvent)
        }else{
          state.eventsFavorites = [...state.eventsFavorites, action.payload.idEvent]
        }
    },
  },
})

export const { addOrRemoveEventFavorite } = eventSlice.actions

export const selectEvents = (state: RootState) => state.event

export default eventSlice.reducer