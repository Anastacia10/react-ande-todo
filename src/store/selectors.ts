import { User, Tasks, ListName } from "../components/types";

export const getName = (state: User): string => {
  return state.name ?? "";
};

export const getTasks =
  (listName: string) =>
  (state: User): Tasks => {
    return state[listName] ?? [];
  };

export const getTaskFromActiveTasks =
  (index: number) =>
  (state): string => {
    return state.activeTasks[index] ?? "";
  };

export const getTaskFromNotActiveTasks =
  (index: number) =>
  (state: User): string => {
    return state.notActiveTasks[index] ?? "";
  };

export const getQuantityActiveTasks = (state: User): number => {
  return state.activeTasks.length ?? 0;
};

export const getListName = (state: User): ListName => {
  return state.listName;
};
