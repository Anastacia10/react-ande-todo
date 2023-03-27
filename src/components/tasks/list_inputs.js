import stl from "./tasks.module.css";

export const EditInput = (props) => {
  const { value, taskIndex, onChangeHandler, task } = props;
  return (
    <input
      autoFocus="true"
      className={stl.list_edditedItem}
      type="text"
      value={value}
      disabled={false}
      onChange={(e) => onChangeHandler(e, taskIndex, task)}
    />
  );
};

export const DisabledInput = (props) => {
  const { value, taskIndex, onChangeHandler } = props;
  return (
    <input
      autoFocus="false"
      className={stl.list_item}
      type="text"
      value={value}
      disabled={true}
      onChange={(e) => onChangeHandler(e, taskIndex)}
    />
  );
};
