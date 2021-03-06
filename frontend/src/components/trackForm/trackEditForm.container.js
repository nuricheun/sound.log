import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllGenres } from "../../redux/actions/genreAction";
import { updateTrack, fetchTrack } from "../../redux/actions/trackAction";
import { openModal } from "../../redux/actions/modalAction";
import { TrackUploadForm } from "./trackForm";

const mapStateToProps = (
  { genres, currentUser: { userId }, tracks },
  {
    history,
    match: {
      params: { trackId },
    },
  }
) => {
  return {
    genres,
    history,
    artist: userId,
    formType: "Edit",
    trackId,
    track: tracks[trackId],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllGenres: () => dispatch(fetchAllGenres()),
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  handleTrackSubmit: (track, trackId) => dispatch(updateTrack(track, trackId)),
  submitLoading: () => dispatch(openModal({ type: "loading", data: true })),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrackUploadForm)
);
