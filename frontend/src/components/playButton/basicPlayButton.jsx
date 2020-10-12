import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export const BasicPlayButtonIcon = ({ playbar, playTrack, pauseTrack }) => {
  const currentTrack = playTrack.currentTrack;
  const currentButton = playbar.isPlaying ? (
    <PauseIcon onClick={pauseTrack} />
  ) : (
    <PlayArrowIcon
      onClick={() => playTrack(currentTrack.trackId)}
      disabled={!currentTrack}
    />
  );

  return <React.Fragment>{currentButton}</React.Fragment>;
};
