import stl from "./tasks.module.css";

export const EditButton = (props) => {
  const { tasksName, onClickHandler, taskIndex, index, user, isEditing } =
    props;
  return (
    <button
      className={isEditing ? stl.list_btnSend : stl.list_btn}
      style={{ display: tasksName === "activeTasks" ? "block" : "none" }}
      onClick={() => onClickHandler(user, index, taskIndex)}
    >
      {isEditing ? "✉" : "✎"}
    </button>
  );
};

export const DoneButton = (props) => {
  const { tasksName, onClickHandler, taskIndex, index, user, task } = props;
  return (
    <button
      className={stl.list_btn}
      style={{ display: tasksName === "activeTasks" ? "block" : "none" }}
      onClick={() => onClickHandler(user, index, taskIndex, task)}
    >
      ✔
    </button>
  );
};

export const DeleteButton = (props) => {
  const { user, index, taskIndex, tasks, tasksName, onClickHandler } = props;
  return (
    <button
      className={stl.list_btn}
      onClick={() => onClickHandler(user, index, taskIndex, tasks, tasksName)}
    >
      ✘
    </button>
  );
};
