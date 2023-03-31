import "./app.module.css";
import LoginPage from "../pages/loginPage";
import ToDoListPage from "../pages/toDoListPage";
import ErrorPage from "../pages/errorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="todolist" element={<ToDoListPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
//
