import stl from "./tasks.module.css";
import { updateUser } from "../../store/usersSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { DeleteButton, DoneButton, EditButton } from "./list_btns";
import { DisabledInput, EditInput } from "./list_inputs";

export const List = (props) => {
  const { tasks } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [edditingIndex, setEdditingIndex] = useState(null);
  const [isDone, setIsDone] = useState(true);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const onDisabledSwicthHandler = (user, index, taskIndex) => {
    if (isDone) {
      setEdditingIndex(taskIndex);
      setIsDone(false);
    } else {
      const updatedActiveTasks = [...tasks];
      updatedActiveTasks[taskIndex] = value;
      const updatedUser = { ...user, activeTasks: updatedActiveTasks };
      dispatch(updateUser({ updatedUser, index }));
      setIsDone(true);
      setEdditingIndex(null);
      setValue("");
    }
  };

  const onCompletingTaskHandler = (user, index, taskIndex, task) => {
    const updatedActiveTasks = [...user.activeTasks];
    const updatedNotActiveTasks = [...user.notActiveTasks];
    updatedNotActiveTasks.push(task);
    updatedActiveTasks.splice(taskIndex, 1);
    const updatedUser = {
      ...user,
      activeTasks: updatedActiveTasks,
      notActiveTasks: updatedNotActiveTasks,
    };
    dispatch(updateUser({ updatedUser, index }));
  };

  const onDeleteTaskHandler = (user, index, taskIndex, tasks, tasksName) => {
    const updateTask = [...tasks];
    updateTask.splice(taskIndex, 1);
    const updatedUser = { ...user, [tasksName]: [...updateTask] };
    dispatch(updateUser({ updatedUser, index }));
  };

  return (
    <ol className={stl.list}>
      {tasks.map((task, taskIndex) => (
        <li className={stl.list_container} key={taskIndex}>
          {edditingIndex === taskIndex && !isDone ? (
            <EditInput
              value={value}
              onChangeHandler={onChangeHandler}
              taskIndex={taskIndex}
            />
          ) : (
            <DisabledInput
              value={task}
              onChangeHandler={onChangeHandler}
              taskIndex={taskIndex}
            />
          )}
          <div className={stl.list_btns}>
            <DeleteButton
              {...props}
              onClickHandler={onDeleteTaskHandler}
              taskIndex={taskIndex}
            />
            <EditButton
              {...props}
              onClickHandler={onDisabledSwicthHandler}
              isEditing={edditingIndex === taskIndex && !isDone}
              taskIndex={taskIndex}
            />
            <DoneButton
              {...props}
              onClickHandler={onCompletingTaskHandler}
              taskIndex={taskIndex}
              task={task}
            />
          </div>
        </li>
      ))}
    </ol>
  );
};
