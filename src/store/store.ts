import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userSlice from "./user/userSlice";
import eventSlice from "./event/eventSlice";
import ticketSlice from "./ticket/ticketSlice";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";


const reducers = combineReducers({
  user: userSlice,
  event: eventSlice,
  ticket: ticketSlice,
});

const persistConfig = {
  key: "events_persist",
  storage: AsyncStorage,
  version: 6,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
