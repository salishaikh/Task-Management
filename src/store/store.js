import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/TodoSlice";
import BoardReducer from "./features/BoardSlice";
import currentboardidReducer from "./features/Currentboardid";
import messageReducer from "./features/messageSlice";
export default configureStore({
  reducer: {
    todos: todoReducer,
    board: BoardReducer,
    CurrentBoardId: currentboardidReducer,
    message: messageReducer
  },
});
