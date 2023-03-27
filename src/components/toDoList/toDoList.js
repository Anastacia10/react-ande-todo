import TaskForm from "../taskForm/taskForm";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/usersSlice";
import Tasks from "../tasks/tasks";
import { getUserByIndex } from "../../store/selectors.ts";
import stl from "./toDoList.module.css";

const ToDoList = () => {
  const { index } = useParams();
  const user = useSelector(getUserByIndex(index));
  const dispatch = useDispatch();
  //State
  const [task, setTask] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [choosenActive, setChoosenActive] = useState(true);
  const [choosenNotActive, setchoosenNotActive] = useState(false);

  const onChangeHandler = (e) => {
    const task = e.target.value;
    if (task.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setTask(task);
  };

  const listSwitcherHandler = () => {
    setChoosenActive((choosenActive) => !choosenActive);
    setchoosenNotActive((choosenNotActive) => !choosenNotActive);
  };

  const onSubmitTaskHandler = (task, index, user, isValid) => {
    if (isValid) {
      const updatedActiveTasks = [...user.activeTasks];
      updatedActiveTasks.push(task);
      const updatedUser = { ...user, activeTasks: updatedActiveTasks };
      dispatch(updateUser({ updatedUser, index }));
      setTask("");
      setIsValid(false);
    }
  };

  return (
    <>
      <div className={stl.container}>
        <div className={stl.toDo_title}>
          <h2>Hello, {user.userName}</h2>
          <h2>Active tasks: {user.activeTasks.length}</h2>
        </div>
        <TaskForm
          onChangeHandler={onChangeHandler}
          task={task}
          index={index}
          onSubmitTaskHandler={onSubmitTaskHandler}
          user={user}
          isValid={isValid}
        />
      </div>
      <div className={stl.container}>
        <div className={stl.toDo_switchers}>
          <button
            className={choosenActive ? stl.btn_active : stl.btn_notActive}
            onClick={() => listSwitcherHandler()}
          >
            Active tasks
          </button>
          <button
            className={choosenNotActive ? stl.btn_active : stl.btn_notActive}
            onClick={() => listSwitcherHandler()}
          >
            Not Active tasks
          </button>
        </div>
        <Tasks tasksName={choosenActive ? "activeTasks" : "notActiveTasks"} />
      </div>
    </>
  );
};

export default ToDoList;
