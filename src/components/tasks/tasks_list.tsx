import stl from "./tasks.module.css";
import { DeleteButton, DoneButton, EditButton } from "./list_btns";
import { ListName } from "../types";
import { getTasks } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToList, deleteFromList, updateTask } from "../../store/userSlice";
import { EditInput, DisabledInput } from "./list_inputs";

export const List = (props: { listName: ListName }) => {
  const { listName } = props;
  const tasks = useSelector(getTasks(listName));
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [edditingIndex, setEdditingIndex] = useState<number | null>(null);
  const [isDone, setIsDone] = useState<boolean>(true);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const onUpdateTaskHandler = (
    listName: ListName,
    taskIndex: number,
    task: string
  ) => {
    if (isDone) {
      setEdditingIndex(taskIndex);
      setIsDone(false);
    } else {
      dispatch(updateTask({ listName, index: taskIndex, task }));
      setIsDone(true);
      setEdditingIndex(null);
      setValue("");
    }
  };

  const onCompletingTaskHandler = (taskIndex: number) => {
    dispatch(addToList({ task: tasks[taskIndex], listName: "notActiveTasks" }));
    dispatch(deleteFromList({ index: taskIndex, listName: "activeTasks" }));
  };

  const onDeleteTaskHandler = (listName: ListName, taskIndex: number) => {
    dispatch(deleteFromList({ listName, index: taskIndex }));
  };

  return (
    <ol className={stl.list}>
      {tasks.map((task: string, taskIndex: number) => (
        <li className={stl.list_container} key={taskIndex}>
          {edditingIndex === taskIndex && !isDone ? (
            <EditInput task={value} onChangeHandler={onChangeHandler} />
          ) : (
            <DisabledInput task={task} onChangeHandler={onChangeHandler} />
          )}
          <div className={stl.list_btns}>
            <DeleteButton
              listName={listName}
              onClickHandler={onDeleteTaskHandler}
              taskIndex={taskIndex}
            />
            <EditButton
              listName={listName}
              task={value}
              onClickHandler={onUpdateTaskHandler}
              isEditing={edditingIndex === taskIndex && !isDone}
              taskIndex={taskIndex}
            />
            <DoneButton
              onClickHandler={onCompletingTaskHandler}
              taskIndex={taskIndex}
              listName={listName}
            />
          </div>
        </li>
      ))}
    </ol>
  );
};
