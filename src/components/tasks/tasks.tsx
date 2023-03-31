import { Message } from "./tasks_message";
import { List } from "./tasks_list";
import { useSelector } from "react-redux";
import { getListName } from "../../store/selectors";
import { useState } from "react";

const Tasks = () => {
  const listName = useSelector(getListName);
  const [isEmpty] = useState<boolean>(listName.length === 0);

  return <>{isEmpty ? <Message /> : <List listName={listName} />}</>;
};

export default Tasks;
