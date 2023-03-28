import stl from "./pages.module.css";
import ToDoList from "../toDoList/toDoList";

const LoginPage = () => {
  return (
    <div className={stl.pageContainer}>
      <ToDoList />
    </div>
  );
};

export default LoginPage;
