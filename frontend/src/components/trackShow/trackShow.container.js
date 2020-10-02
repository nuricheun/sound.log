import { connect } from "react-redux";
import { TrackShow } from "./trackShow";
import { fetchTrack } from "../../redux/actions/trackAction";

const mapStateToProps = (
  { tracks, currentUser: { userId } },
  {
    match: {
      params: { trackId },
    },
  }
) => {
  return {
    track: tracks[trackId],
    userId,
    trackId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
