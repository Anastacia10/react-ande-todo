import { ValidationMessage } from "../types";
export const validateLoginForm = (value: string): ValidationMessage => {
  if (value.length === 0) {
    return "Please, enter at least 2 letters";
  } else if (!value.match(/^\D+$/gm)) {
    return "Please, don't include numbers and specific signs";
  } else if (value.length >= 37) {
    return "Name, cannot have more then 37 symbols, sorry";
  } else {
    return "valid";
  }
};
