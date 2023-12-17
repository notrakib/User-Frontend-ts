import { createSlice } from "@reduxjs/toolkit";
import { signApi } from "./Sign.api";

interface InitialState {
  signed_in: boolean;
  token: string | null;
}

const initialState: InitialState = {
  signed_in: false,
  token: null,
};

export interface RootState {
  auth: {
    signed_in: boolean;
    token?: string;
  };
}

const signSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      signApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        if (payload.token) {
          state.signed_in = true;
          state.token = payload.token;
        }
      }
    );
  },
});

export default signSlice.reducer;
