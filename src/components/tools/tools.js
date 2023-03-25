import { nanoid } from "@reduxjs/toolkit";

export const getIndex = (name, users) => {
  return users.findIndex(({ userName }) => userName === name);
};

export function User(name) {
  this.userId = nanoid(4);
  this.userName = name;
  this.activeTasks = [];
  this.notActiveTasks = [];
}
//operator: "add" or "del", indexTask required with "del" operator"
export const updateActiveTasks = (user, task, operator, indexTask) => {
  const updatedActiveTasks = [...user.activeTasks];
  if (operator === "add") {
    updatedActiveTasks.push(task);
  } else {
    updatedActiveTasks.splice(indexTask, 1);
  }
  return updateActiveTasks;
};

export const updateNotActiveTasks = (user, task) => {
  const updatedNotActiveTasks = [...user.notActiveTasks];
  updatedNotActiveTasks.push(task);
  return updateNotActiveTasks;
};
