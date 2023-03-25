import { configureStore } from "@reduxjs/toolkit";
import users from "./usersSlice";

export const store = configureStore({
  reducer: users,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});
