import { createSlice } from "@reduxjs/toolkit";

export const Currentboardid = createSlice({
  name: "currentboardid",
  initialState: {
    currentboardid: "",
  },
  reducers: {
    CurrentBoardId: (state, action) => {
      state.currentboardid = action.payload;
    },
  },
});
export const { CurrentBoardId } = Currentboardid.actions;

export default Currentboardid.reducer;
