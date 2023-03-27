import { createSlice } from "@reduxjs/toolkit";
import {
  User,
  ChooseNamePayload,
  AddTaskPayload,
  UpdateTaskPayload,
  DeleteTaskPayload,
} from "../components/types";

const initialState: User = {
  name: "",
  activeTasks: [],
  notActiveTasks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    chooseName: (
      state: User,
      action: { type: string; payload: ChooseNamePayload }
    ) => {
      state.name = action.payload;
    },
    addToList: (
      state: User,
      action: { type: string; payload: AddTaskPayload }
    ) => {
      state[action.payload.listName] = [
        ...state[action.payload.listName],
        action.payload.task,
      ];
    },
    deleteFromList: (
      state: User,
      action: { type: string; payload: DeleteTaskPayload }
    ) => {
      state[action.payload.listName].splice(action.payload.index, 1);
    },
    updateTask: (
      state: User,
      action: { type: string; payload: UpdateTaskPayload }
    ) => {
      state[action.payload.listName][action.payload.index] =
        action.payload.task;
    },
  },
});

const { actions, reducer } = userSlice;

export default reducer;
export const { chooseName, addToList, deleteFromList, updateTask } = actions;
