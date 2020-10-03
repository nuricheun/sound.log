import React, { useState, useEffect } from "react";

import { CenterWrapper } from "../wrapper/wrapper";
import { TrackIndexRow } from "../trackIndexRow/trackIndexRow";
import { connect } from "react-redux";
import { fetchAllTracks } from "../../redux/actions/trackAction";
import { fetchLikesByUserId } from "../../redux/actions/likeAction";

const mapStateToProps = ({ tracks, liked, currentUser: { userId } }) => ({
  tracks,
  userId,
  liked,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  fetchLikesByUserId: (userId) => dispatch(fetchLikesByUserId(userId)),
});

export const TrackIndex = ({
  tracks,
  fetchAllTracks,
  userId,
  liked,
  fetchLikesByUserId,
}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTracks()
      .then(() => fetchLikesByUserId(userId))
      .then(() => setLoading((pre) => !pre));
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <CenterWrapper>
      <TrackIndexRow
        tracks={tracks}
        title={"New Release"}
        subTitle={"Check out newest tracks on Sound.log!"}
      />
      <TrackIndexRow
        tracks={tracks}
        title={"Sound.log: Trending"}
        subTitle={"Up-and-coming tracks on Sound.log"}
      />
    </CenterWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
