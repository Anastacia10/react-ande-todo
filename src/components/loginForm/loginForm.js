import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/usersSlice";
import { getUsers } from "../../store/selectors.ts";
import { useState } from "react";
import { User, getIndex } from "../tools/tools.ts";
import { useNavigate } from "react-router-dom";
import stl from "./loginForm.module.css";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setName(value);
  };

  const onSubmitHandler = (name, users, isValid) => {
    if (isValid) {
      const index = getIndex(name, users);
      if (index >= 0) {
        navigate(`todolist/${index}`);
      } else {
        const newUser = new User(name);
        dispatch(addUser(newUser));
        navigate(`todolist/${users.length}`);
      }
    }
  };

  return (
    <div className={stl.container}>
      <input
        className={isValid ? stl.login_validInput : stl.login_invalidInput}
        type="text"
        value={name}
        onChange={onChangeHandler}
        placeholder="Please, enter your name"
      />
      <button
        className={stl.login_btn}
        disabled={!isValid}
        type="submit"
        onClick={() => onSubmitHandler(name, users, isValid)}
      >
        Save
      </button>
    </div>
  );
};
export default LoginForm;
