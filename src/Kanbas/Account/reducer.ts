import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log("Action dispatched: setCurrentUser", action.payload); 
      state.currentUser = action.payload;
      console.log("Updated state.currentUser:", state.currentUser); 
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;