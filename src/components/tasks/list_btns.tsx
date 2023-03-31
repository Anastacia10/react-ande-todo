import stl from "./tasks.module.css";
import { ListName } from "../types";

type ButtonProps = {
  onClickHandler: Function;
  taskIndex: number;
  task?: string;
  listName?: ListName;
  isEditing?: boolean;
};

export const EditButton = (props: ButtonProps) => {
  const { onClickHandler, taskIndex, listName, task, isEditing } = props;

  return (
    <button
      className={isEditing ? stl.list_btnSend : stl.list_btn}
      style={{ display: listName === "activeTasks" ? "block" : "none" }}
      onClick={() => onClickHandler(listName, taskIndex, task)}
    >
      {isEditing ? "✉" : "✎"}
    </button>
  );
};

export const DoneButton = (props: ButtonProps) => {
  const { onClickHandler, taskIndex, listName } = props;
  return (
    <button
      className={stl.list_btn}
      style={{ display: listName === "activeTasks" ? "block" : "none" }}
      onClick={() => onClickHandler(taskIndex)}
    >
      ✔
    </button>
  );
};

export const DeleteButton = (props: ButtonProps) => {
  const { onClickHandler, taskIndex, listName } = props;
  return (
    <button
      className={stl.list_btn}
      onClick={() => onClickHandler(listName, taskIndex)}
    >
      ✘
    </button>
  );
};
