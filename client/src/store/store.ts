import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./mainReducer";
import { persistStore } from "redux-persist";
export const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const userSelector = (state: RootState) =>state.users.userReducer.users;
export type AppDispatch = typeof store.dispatch;
