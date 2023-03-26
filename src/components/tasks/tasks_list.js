import stl from "./tasks.module.css";
import { updateUser } from "../../store/usersSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { DoneButton, EditButton } from "./list_btns";
import { DisabledInput, EditInput } from "./list_inputs";

export const List = (props) => {
  const { tasksName, user, index, tasks } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [edditingIndex, setEdditingIndex] = useState(null);
  const [isDone, setIsDone] = useState(true);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const onDisabledSwicthHandler = (taskIndex, index, user) => {
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

  const onCompletingTaskHandler = (task, index, user, indexTask) => {
    const updatedActiveTasks = [...user.activeTasks];
    const updatedNotActiveTasks = [...user.notActiveTasks];
    updatedNotActiveTasks.push(task);
    updatedActiveTasks.splice(indexTask, 1);
    const updatedUser = {
      ...user,
      activeTasks: updatedActiveTasks,
      notActiveTasks: updatedNotActiveTasks,
    };
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
            <EditButton
              tasksName={tasksName}
              onClickHandler={onDisabledSwicthHandler}
              taskIndex={taskIndex}
              index={index}
              user={user}
              isEditing={edditingIndex === taskIndex && !isDone}
            />
            <DoneButton
              tasksName={tasksName}
              onClickHandler={onCompletingTaskHandler}
              taskIndex={taskIndex}
              index={index}
              user={user}
            />
          </div>
        </li>
      ))}
    </ol>
  );
};
