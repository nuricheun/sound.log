import React from "react";
import { NavBar } from "../nav/navbar";
import ReactAudioPlayer from "react-audio-player";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { MiddleNavWrapper } from "../nav/navbar";
import { BasicPlayButton } from "../playButton/playButton";
import Button from "@material-ui/core/Button";

import { styled as materialStyled } from "@material-ui/core/styles";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  playbar: state.playbar,
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

export const PlayBar = ({ playbar }) => {
  return (
    <NavBar>
      <MiddleNavWrapper>
        <PlaybarButtonWrapper>
          <SkipPreviousIcon />
        </PlaybarButtonWrapper>
        <PlaybarButtonWrapper>
          <BasicPlayButton track={playbar.currentTrack} />
        </PlaybarButtonWrapper>
        <PlaybarButtonWrapper>
          <SkipNextIcon />
        </PlaybarButtonWrapper>
        <ReactAudioPlayer className={"audio-player"} />
        {playbar.currentTrack.title}
      </MiddleNavWrapper>
    </NavBar>
  );
};

export default connect(mapStateToProps)(PlayBar);
