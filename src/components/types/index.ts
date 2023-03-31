export type Tasks = string[] | [];
export type ListName = "activeTasks" | "notActiveTasks";

export type Name = string;
export type ValidationMessage =
  | "Please, enter at least 2 letters"
  | "Please, don't include numbers and specific signs"
  | "Name, cannot have more then 37 symbols, sorry"
  | "valid";

export type User = {
  name: Name;
  activeTasks: Tasks;
  notActiveTasks: Tasks;
  listName: ListName;
};

export type AddTaskPayload = { listName: ListName; task: string };
export type ChooseNamePayload = Name;
export type DeleteTaskPayload = { listName: ListName; index: number };
export type UpdateTaskPayload = {
  listName: ListName;
  index: number;
  task: string;
};
