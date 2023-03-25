import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addToActiveTasks: (state, action) => {
      state.users[action.payload.index] = { ...action.payload.updatedUser };
    },
    addToNotActiveTasks: (state, action) => {
      state.users[action.payload.index] = { ...action.payload.updatedUser };
    },
  },
});

const { actions, reducer } = usersSlice;

export default reducer;
export const {
  addUser,
  addToActiveTasks,
  addToNotActiveTasks,
  deleteFromActiveTasks,
} = actions;
