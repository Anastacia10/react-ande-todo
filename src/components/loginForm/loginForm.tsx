import { useDispatch } from "react-redux";
import { FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import stl from "./loginForm.module.css";
import { chooseName } from "../../store/userSlice";
import { validateLoginForm } from "../validation";
import { Name } from "../types";

const LoginForm: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState<Name>("");
  const [invalidMessage, setInvalidMessage] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const result = validateLoginForm(value);
    if (result === "valid") {
      setValue(value);
      setIsValid(true);
    } else {
      setIsValid(false);
      setInvalidMessage(result);
    }
  };

  const onSubmitHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isValid) {
      dispatch(chooseName(value));
      navigate("todolist");
    }
  };

  return (
    <div className={stl.container}>
      <input
        className={isValid ? stl.login_validInput : stl.login_invalidInput}
        type="text"
        onChange={onChangeHandler}
        placeholder="Please, enter your name"
      />
      <p
        className={stl.message}
        style={{ display: isValid ? "none" : "block" }}
      >
        {invalidMessage}
      </p>
      <button
        className={stl.login_btn}
        disabled={!isValid}
        type="submit"
        onClick={onSubmitHandler}
      >
        Save
      </button>
    </div>
  );
};
export default LoginForm;
