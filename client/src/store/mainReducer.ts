import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const persistConfig = {
  key: "root",
  storage,
};
const Rootreducer = combineReducers({
  userReducer,
});

export const persistedReducer = persistReducer(persistConfig, Rootreducer);
