import axios from "axios";

export const fetchLikesByUserId = (userId) =>
  axios.get(`http://localhost:8000/api/likes/${userId}`);

export const fetchLikeByUserId = (userId, trackId) =>
  axios.get(`http://localhost:8000/api/likes/${userId}/${trackId}`);

export const deleteLikeByUserId = (userId, trackId) =>
  axios.delete(`http://localhost:8000/api/likes/${userId}/${trackId}`);
