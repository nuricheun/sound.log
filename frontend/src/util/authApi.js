import axios from "axios";

export const register = (user) =>
  axios.post(`http://localhost:8000/api/users/res`, { user });

export const signin = (user) =>
  axios.post(`http://localhost:8000/api/users/signin`, { user }).then((res) => {
    console.log(res);
    console.log(res.data);
  });
