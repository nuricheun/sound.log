import React from "react";
import { TrackArtistProfileImage } from "../designSystem/trackStyledComponents";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 10px 10px;
`;

const NoDecoLink = styled(Link)`
  text-decoration: none;
  color: #999;
`;

export const MiniProfile = ({ artist }) => {
  return (
    <ProfileWrapper>
      <br />
      <NoDecoLink to={`/artist/${artist.artistId}`}>
        <TrackArtistProfileImage img={artist.avatar} />
      </NoDecoLink>
      <Tooltip title="Artist page">
        <NoDecoLink to={`/artist/${artist.artistId}`}>
          <span>{artist.username}</span>
        </NoDecoLink>
      </Tooltip>
    </ProfileWrapper>
  );
};
