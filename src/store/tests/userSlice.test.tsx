import reducer from "../userSlice";
import {
  chooseName,
  addToList,
  deleteFromList,
  updateTask,
  updateListName,
} from "../userSlice";
import {
  AddTaskPayload,
  DeleteTaskPayload,
  UpdateTaskPayload,
  ListName,
} from "../../components/types";

import { User } from "../../components/types";

describe(">>>Testing reducer", () => {
  let state: User = {
    name: "",
    activeTasks: ["test1", "test2"],
    notActiveTasks: ["test1", "test2"],
    listName: "activeTasks",
  };
  it("chooseName", () => {
    const action = {
      type: chooseName.type,
      payload: "Anastacia",
    };

    const result: User = {
      name: "Anastacia",
      activeTasks: ["test1", "test2"],
      notActiveTasks: ["test1", "test2"],
      listName: "activeTasks",
    };

    state = reducer(state, action);
    expect(state).toEqual(result);
  });
  it("addToList - to ActiveTasks", () => {
    const action: {
      type: string;
      payload: AddTaskPayload;
    } = {
      type: addToList.type,
      payload: { listName: "activeTasks", task: "test3" },
    };

    const result: User = {
      name: "Anastacia",
      activeTasks: ["test1", "test2", "test3"],
      notActiveTasks: ["test1", "test2"],
      listName: "activeTasks",
    };
    state = reducer(state, action);
    expect(state).toEqual(result);
  });
  it("addToList - to notActiveTasks", () => {
    const action: {
      type: string;
      payload: AddTaskPayload;
    } = {
      type: addToList.type,
      payload: { listName: "notActiveTasks", task: "test3" },
    };

    const result: User = {
      name: "Anastacia",
      activeTasks: ["test1", "test2", "test3"],
      notActiveTasks: ["test1", "test2", "test3"],
      listName: "activeTasks",
    };
    state = reducer(state, action);
    expect(state).toEqual(result);
  });
  it("deleteFromTasks - ActiveTasks", () => {
    const action: {
      type: string;
      payload: DeleteTaskPayload;
    } = {
      type: deleteFromList.type,
      payload: { listName: "activeTasks", index: 2 },
    };

    const result: User = {
      name: "Anastacia",
      activeTasks: ["test1", "test2"],
      notActiveTasks: ["test1", "test2", "test3"],
      listName: "activeTasks",
    };
    state = reducer(state, action);
    expect(state).toEqual(result);
  });
  it("updateTask - activeTasks", () => {
    const action: {
      type: string;
      payload: UpdateTaskPayload;
    } = {
      type: updateTask.type,
      payload: { listName: "activeTasks", index: 0, task: "updatedTest1" },
    };

    const result: User = {
      name: "Anastacia",
      activeTasks: ["updatedTest1", "test2"],
      notActiveTasks: ["test1", "test2", "test3"],
      listName: "activeTasks",
    };
    state = reducer(state, action);
    expect(state).toEqual(result);
  });
  it("updatedListName", () => {
    const action: {
      type: string;
      payload: ListName;
    } = {
      type: updateListName.type,
      payload: "notActiveTasks",
    };

    const result: User = {
      name: "Anastacia",
      activeTasks: ["updatedTest1", "test2"],
      notActiveTasks: ["test1", "test2", "test3"],
      listName: "notActiveTasks",
    };
    state = reducer(state, action);
    expect(state).toEqual(result);
  });
});
