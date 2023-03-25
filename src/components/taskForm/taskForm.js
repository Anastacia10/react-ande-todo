import stl from "./taskForm.module.css";

const TaskForm = (props) => {
  const { onSubmitTaskHandler, onChangeHandler, index, task, user, isValid } =
    props;
  return (
    <div className={stl.container}>
      <input
        className={
          isValid ? stl.taskForm_validInput : stl.taskForm_invalidInput
        }
        type="text"
        onChange={onChangeHandler}
        value={task}
        placeholder="Please, record your tasks here"
      />
      <button
        className={stl.taskForm_btn}
        onClick={() => onSubmitTaskHandler(task, index, user, isValid)}
        disabled={!isValid}
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;
