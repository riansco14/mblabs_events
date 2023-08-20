import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import eventSlice from "./event/eventSlice";

const reducers = combineReducers({
  user: userSlice,
  event: eventSlice,
});

const persistConfig = {
  key: "events_persist",
  storage: AsyncStorage,
  version: 5,
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
