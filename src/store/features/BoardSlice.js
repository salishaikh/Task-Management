import { createSlice, nanoid } from "@reduxjs/toolkit";

export const BoardSlice = createSlice({
  name: "board",
  initialState: {
    board: [],
  },
  reducers: {
    fetchboard: (state, action) => {
      if (!Array.isArray(action.payload)) return;

      let tempBoard = [];
      action.payload.map((b) => {
        tempBoard.push({
          id: b._id,
          name: b.title,
        });
      });

      state.board = tempBoard;
    },
    addBoard: (state, action) => {
      const board = {
        id: action.payload.id,
        name: action.payload.name,
      };
      console.log(board);
      state.board.push(board);
    },
    deleteBoard: (state, action) => {
      state.board = action.payload.boards.filter((b) => {
        return b.id != action.payload.id;
      });
      console.log("Deleted");
    },
  },
});

export const { addBoard, deleteBoard, fetchboard } = BoardSlice.actions;
export default BoardSlice.reducer;
