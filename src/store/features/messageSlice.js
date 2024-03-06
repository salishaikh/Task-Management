import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'message',
  initialState: {
    error: '',
    message: '',
  },
  reducers: {
    changeErrorMessage: (state, action) => {
      state.error = action.payload;
    },
    changeMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeErrorMessage, changeMessage } = counterSlice.actions;

export default counterSlice.reducer;