import { createSlice, nanoid } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    fetchtask: (state, action) => {
      if (!Array.isArray(action.payload)) return;

      let tempTask = [];
      action.payload.map((b) => {
        tempTask.push({
          id: b._id,
          name: b.title,
          desc: b.description,
          boardId: b.boardid,
          userid: b.user,
          status: b.status
        });
      });

      state.todos = tempTask;
    },
    addTodo: (state, action) => {
      const todo = {
        id: action.payload.id,
        name: action.payload.name,
        desc: action.payload.desc,
        boardId: action.payload.boardId,
        status: action.payload.status
      };
      state.todos.push(todo);
      console.log("task added");
    },
    deleteTodo: (state, action) => {
      state.todos = action.payload.todos.filter((t) => {
        return t.id != action.payload.id;
      });
      console.log(state.todos);
    },
    editTodo: (state, action) => {
      console.log("updated");
    },
  },
});

export const { addTodo, deleteTodo, editTodo, fetchtask } = TodoSlice.actions;
export default TodoSlice.reducer;
