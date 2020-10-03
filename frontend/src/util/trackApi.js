import axios from "axios";

export const fetchAllTracks = () =>
  axios.get(`http://localhost:8000/api/tracks`);

export const fetchTrack = (trackId) =>
  axios.get(`http://localhost:8000/api/tracks/${trackId}`);

export const createTrack = (track) =>
  axios.post("http://localhost:8000/api/tracks", track, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateTrack = (track, id) =>
  axios.patch(`http://localhost:8000/api/tracks/${id}`, track);

export const deleteTrack = (id) =>
  axios.delete(`http://localhost:8000/api/tracks/${id}`);
