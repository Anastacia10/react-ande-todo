import TaskForm from "../taskForm/taskForm";
import stl from "./toDoList.module.css";
import { useDispatch } from "react-redux";
import { updateListName } from "../../store/userSlice";
import {
  getListName,
  getQuantityActiveTasks,
  getName,
} from "../../store/selectors";
import { useSelector } from "react-redux";
import Tasks from "../tasks/tasks";

const ToDoList = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const listName = useSelector(getListName);
  const quantityActiveTasks = useSelector(getQuantityActiveTasks);

  const onListNameHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (listName === "activeTasks") {
      dispatch(updateListName("notActiveTasks"));
    } else {
      dispatch(updateListName("activeTasks"));
    }
  };

  return (
    <>
      <div className={stl.container}>
        <div className={stl.toDo_title}>
          <h2>Hello, {name}</h2>
          <h2>Active tasks: {quantityActiveTasks}</h2>
        </div>
        <TaskForm />
      </div>
      <div className={stl.container}>
        <div className={stl.toDo_switchers}>
          <button onClick={onListNameHandler} className={stl.btn_active}>
            Active tasks
          </button>
          <button onClick={onListNameHandler} className={stl.btn_notActive}>
            Not Active tasks
          </button>
        </div>
        <Tasks />
      </div>
    </>
  );
};

export default ToDoList;
