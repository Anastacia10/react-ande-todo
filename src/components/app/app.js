import "./app.module.css";
import LoginPage from "../pages/loginPage";
import ToDoListPage from "../pages/toDoListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="todolist/:index" element={<ToDoListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
//
