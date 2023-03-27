import { nanoid } from "@reduxjs/toolkit";

export const getIndex = (name: string, users) => {
  return users.findIndex(({ userName }) => userName === name);
};

export function User(name: string) {
  this.userId = nanoid(4);
  this.userName = name;
  this.activeTasks = [];
  this.notActiveTasks = [];
}
