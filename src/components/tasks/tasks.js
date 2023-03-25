import stl from "./tasks.module.css";
import { useSelector } from "react-redux";
import {
  getUserActiveTasks,
  getUserNotActiveTasks,
} from "../../store/selectors";

const Tasks = (props) => {
  const { index, tasksName, user, onCompletingTaskHandler } = props;
  const activeTasks = useSelector(getUserActiveTasks(index));
  const notActivetasks = useSelector(getUserNotActiveTasks(index));
  let tasks = tasksName === "active" ? activeTasks : notActivetasks;
  const isTasksEmpty = tasks.length === 0;
  const message = <p className={stl.message}>The list is empty</p>;
  const list = (
    <ol className={stl.list}>
      {tasks.map((task, taskIndex) => (
        <div>
          <li key={taskIndex} className={stl.list_item}>
            {task}
          </li>
          <button
            className={stl.list_btn}
            style={{ display: tasksName === "active" ? "block" : "none" }}
            onClick={() =>
              onCompletingTaskHandler(task, index, user, taskIndex)
            }
          >
            ✔
          </button>
        </div>
      ))}
    </ol>
  );
  return <>{isTasksEmpty ? message : list}</>;
};

export default Tasks;
