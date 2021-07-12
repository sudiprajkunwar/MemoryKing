import { Axios } from "../../../axios";
import { Users } from "../../../models/interface";

export const RequestPostUser = (data: Users) => {
  return Axios.post("users", data);
};

export const RequestGetUser = () => {
  return Axios.get("users");
};
