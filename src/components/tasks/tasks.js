import { Message } from "./tasks_message";
import { List } from "./tasks_list";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserByIndex } from "../../store/selectors";

const Tasks = (props) => {
  const { tasksName } = props;
  const { index } = useParams();
  const user = useSelector(getUserByIndex(index));
  const tasks = tasksName === "active" ? user.activeTasks : user.notActiveTasks;
  const isTasksEmpty = tasks.length === 0;

  return isTasksEmpty ? (
    <Message />
  ) : (
    <List tasksName={tasksName} user={user} index={index} tasks={tasks} />
  );
};

export default Tasks;
