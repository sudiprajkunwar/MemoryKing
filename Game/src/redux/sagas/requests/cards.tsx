import { Axios } from "../../../axios";

export const requestGetCards = () => {
  return Axios.get("cards");
};
