import "./app.module.css";
import LoginPage from "../pages/loginPage";
import ToDoListPage from "../pages/toDoListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
//<Route path="todolist" element={<ToDoListPage />} />
