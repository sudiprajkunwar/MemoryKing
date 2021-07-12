import axios from "axios";

const Axios = axios.create({
  baseURL: "https://my-json-server.typicode.com/sudiprajkunwar/Server/",
});

export { Axios };
