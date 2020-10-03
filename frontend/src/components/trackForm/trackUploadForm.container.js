import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllGenres } from "../../redux/actions/genreAction";
import { createTrack } from "../../redux/actions/trackAction";
import { TrackUploadForm } from "./trackForm";

const mapStateToProps = ({ genres, currentUser: { userId } }, { history }) => {
  return {
    genres,
    history,
    artist: userId,
    formType: "New",
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllGenres: () => dispatch(fetchAllGenres()),
  handleTrackSubmit: (track) => dispatch(createTrack(track)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrackUploadForm)
);
