import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./User.api";
import { signApi } from "./Sign.api";
import authReducer from "./Sign.slice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [signApi.reducerPath]: signApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, signApi.middleware),
});
