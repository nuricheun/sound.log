import React, { useEffect, useRef } from "react";
import { NavBar } from "../designSystem/navbar";
import ReactAudioPlayer from "react-audio-player";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { MiddleNavWrapper } from "../designSystem/navbar";
import { BasicPlayButton } from "../playButton/playButton";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { styled as materialStyled } from "@material-ui/core/styles";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import { connect } from "react-redux";

const mapStateToProps = ({ playbar }) => ({
  playbar,
});

const PlaybarButtonWrapper = materialStyled(Button)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  minWidth: "40px",
  fontSize: "14px",
  margin: 0,
  cursor: "pointer",
  lineHeight: 0,
});

const ProgressBar = styled.div`
  background-color: #fff;
  width: 480px;
  height: 8px;
  ${"" /* z-index: 3; */}
  margin: 0 20px;
`;

const Progress = styled.span`
  background-color: #fff;
  height: 8px;
  display: inline-block;
`;

export const PlayBar = ({ playbar }) => {
  const { isPlaying, currentTrack, currentTime } = playbar;
  const ref = useRef();

  useEffect(() => {
    if (isPlaying && ref.current) {
      ref.current.audioEl.current.play();
    }
    if (!isPlaying && ref.current) {
      ref.current.audioEl.current.pause();
    }
  });

  return (
    <NavBar>
      <MiddleNavWrapper>
        <PlaybarButtonWrapper>
          <SkipPreviousIcon />
        </PlaybarButtonWrapper>
        <PlaybarButtonWrapper>
          <BasicPlayButton track={currentTrack} />
        </PlaybarButtonWrapper>
        <PlaybarButtonWrapper>
          <SkipNextIcon />
        </PlaybarButtonWrapper>
        <ReactAudioPlayer ref={ref} src={currentTrack.audioUrl} />
        <ProgressBar>{/* <Progress /> */}</ProgressBar>
        {playbar.currentTrack.title}
        <PlaybarButtonWrapper>
          <VolumeDownIcon />
        </PlaybarButtonWrapper>
      </MiddleNavWrapper>
    </NavBar>
  );
};

export default connect(mapStateToProps)(PlayBar);
