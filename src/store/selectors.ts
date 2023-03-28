export const getUserByIndex = (index: number) => (state) => {
  return state.users[index] ?? {};
};

export const getUserActiveTasks = (index: number) => (state) => {
  return [...state.users[index].activeTasks] ?? [];
};

export const getUserNotActiveTasks = (index: number) => (state) => {
  return [...state.users[index].notActiveTasks] ?? [];
};

export const getUser = (name: string) => (users) => {
  const user = users.find((user) => user.name === name);
  return user ?? false;
};

export const getUsers = (state) => {
  return [...state.users];
};
