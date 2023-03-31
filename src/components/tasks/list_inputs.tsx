import stl from "./tasks.module.css";
type InputProps = {
  task: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
};

export const EditInput = (props: InputProps) => {
  const { task, onChangeHandler } = props;
  return (
    <input
      autoFocus={true}
      className={stl.list_edditedItem}
      type="text"
      value={task}
      disabled={false}
      onChange={(e) => onChangeHandler(e)}
    />
  );
};

export const DisabledInput = (props) => {
  const { task, onChangeHandler } = props;
  return (
    <input
      autoFocus={false}
      className={stl.list_item}
      type="text"
      value={task}
      disabled={true}
      onChange={(e) => onChangeHandler(e)}
    />
  );
};
