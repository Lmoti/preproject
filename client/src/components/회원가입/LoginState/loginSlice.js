import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    displayName: "",
    userEmail: "",
    userToken: null,
  },
  reducers: {
    loginAction: (state, action) => {
      state.displayName = action.payload.displayName;
      state.userEmail = action.payload.email;
      console.log(state.displayName, state.userEmail);
    },
  },
});

export const { loginAction } = loginSlice.actions;
export default loginSlice.reducer;
