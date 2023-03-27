import TaskForm from "../taskForm/taskForm";
import stl from "./toDoList.module.css";

const ToDoList = () => {
  /*const { index } = useParams();
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
  };*/

  return (
    <>
      <div className={stl.container}>
        <div className={stl.toDo_title}>
          <h2>Hello, </h2>
          <h2>Active tasks:</h2>
        </div>
        <TaskForm />
      </div>
      <div className={stl.container}>
        <div className={stl.toDo_switchers}>
          <button>Active tasks</button>
          <button>Not Active tasks</button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
