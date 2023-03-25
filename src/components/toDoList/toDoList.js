import TaskForm from "../taskForm/taskForm";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToActiveTasks } from "../../store/usersSlice";
import Tasks from "../tasks/tasks";
import { getUserByIndex } from "../../store/selectors";
import stl from "./toDoList.module.css";

const ToDoList = () => {
  const { index } = useParams();
  const [task, setTask] = useState("");
  const user = useSelector(getUserByIndex(index));
  const [choosenActive, setChoosenActive] = useState(true);
  const [choosenNotActive, setchoosenNotActive] = useState(false);
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState("false");

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
      dispatch(addToActiveTasks({ updatedUser, index }));
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
    dispatch(addToActiveTasks({ updatedUser, index }));
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
        <Tasks
          index={index}
          tasksName={choosenActive ? "active" : "not_active"}
          user={user}
          onCompletingTaskHandler={onCompletingTaskHandler}
        />
      </div>
    </>
  );
};

export default ToDoList;
