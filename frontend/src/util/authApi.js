import axios from "axios";

export const register = (user) =>
  axios.post(`http://localhost:8000/api/users`, user);

export const signin = (user) =>
  axios.post(`http://localhost:8000/api/users/signin`, user);

export const signout = () => axios.delete(`http://localhost:8000/api/users`);

export const fetchUser = (userId) =>
  axios.get(`http://localhost:8000/api/users/${userId}`);

export const updateUser = (user, id) =>
  axios.patch(`http://localhost:8000/api/users/${id}`, user);
