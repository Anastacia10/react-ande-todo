import stl from "./taskForm.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToList } from "../../store/userSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const task = e.target.value;
    if (task.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setTask(task);
  };

  const onSubmitTaskHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (isValid) {
      dispatch(addToList({ task, listName: "activeTasks" }));
      setTask("");
      setIsValid(false);
    }
  };
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
        onClick={onSubmitTaskHandler}
        disabled={!isValid}
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;
