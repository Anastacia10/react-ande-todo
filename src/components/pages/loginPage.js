import LoginForm from "../loginForm/loginForm";
import stl from "./pages.module.css";

const LoginPage = () => {
  return (
    <div className={stl.pageContainer}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
