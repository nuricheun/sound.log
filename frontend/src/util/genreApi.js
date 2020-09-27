import axios from "axios";

export const fetchAllGenres = () =>
  axios.get("http://localhost:8000/api/genres");

export const fetchGenre = (id) =>
  axios.get(`http://localhost:8000/api/genres/${id}`);
