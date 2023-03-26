import stl from "./tasks.module.css";

export const EditButton = (props) => {
  const { tasksName, onClickHandler, taskIndex, index, user, isEditing } =
    props;
  return (
    <button
      className={isEditing ? stl.list_btnSend : stl.list_btn}
      style={{ display: tasksName === "active" ? "block" : "none" }}
      onClick={() => onClickHandler(taskIndex, index, user)}
    >
      {isEditing ? "✉" : "✎"}
    </button>
  );
};

export const DoneButton = (props) => {
  const { tasksName, onClickHandler, taskIndex, index, user } = props;
  return (
    <button
      className={stl.list_btn}
      style={{ display: tasksName === "active" ? "block" : "none" }}
      onClick={() => onClickHandler(taskIndex, index, user, taskIndex)}
    >
      ✔
    </button>
  );
};
