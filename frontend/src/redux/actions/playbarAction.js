export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const PLAY_PREV = "PLAY_PREV";
export const PLAY_NEXT = "PLAY_NEXT";

export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";

export const playTrack = (track) => ({
  type: PLAY,
  track,
});

export const pauseTrack = () => ({
  type: PAUSE,
});

export const playPrevTrack = () => ({
  type: PLAY_PREV,
});

export const playNextTrack = () => ({
  type: PLAY_NEXT,
});

export const setCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  track,
});
