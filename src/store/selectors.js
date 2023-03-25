export const getUserByIndex = (index) => (state) => {
  return state.users[index] ?? {};
};

export const getUserActiveTasks = (index) => (state) => {
  return [...state.users[index].activeTasks] ?? [];
};

export const getUserNotActiveTasks = (index) => (state) => {
  return [...state.users[index].notActiveTasks] ?? [];
};

export const getUser = (name) => (users) => {
  const user = users.find((user) => user.name === name);
  return user ?? false;
};

export const getUsers = (state) => {
  return [...state.users];
};
