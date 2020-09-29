import React from "react";

import { CenterWrapper } from "../wrapper/wrapper";
import { TrackIndexRow } from "../trackIndexRow/trackIndexRow";
import { connect } from "react-redux";
import { fetchAllTracks } from "../../redux/actions/trackAction";

const mapStateToProps = ({ tracks }) => ({
  tracks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
});

export const Library = ({ tracks, fetchAllTracks }) => {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetchAllTracks().then(() => setLoading((pre) => !pre));
  }, []);

  if (isLoading) {
    return null;
  }

  const trandyTracks = tracks;
  const newTracks = tracks;

  const mappedRows = [trandyTracks, newTracks].map((tracks) => (
    <TrackIndexRow tracks={tracks} />
  ));

  return <CenterWrapper>{mappedRows}</CenterWrapper>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
