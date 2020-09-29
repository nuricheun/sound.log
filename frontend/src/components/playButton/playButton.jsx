import { BasicPlayButtonIcon } from "./basicPlayButton";
import { OrangePlayButtonIcon } from "./orangePlayButton";
import { playTrack, pauseTrack } from "../../redux/actions/playbarAction";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    playbar: state.playbar,
    track: ownProps.track,
  };
};

const mapDispatchToProps = (dispatch) => ({
  playTrack: (track) => dispatch(playTrack(track)),
  pauseTrack: () => dispatch(pauseTrack()),
});

export const OrangePlayButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrangePlayButtonIcon);

export const BasicPlayButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicPlayButtonIcon);
