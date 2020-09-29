import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";

const LikeButtonDiv = styled.div`
  width: 25px;
  height: 25px;
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const LikeButton = ({ liked }) => {
  return (
    <LikeButtonDiv>
      <FavoriteIcon style={{ color: liked ? "red" : "black" }} />
    </LikeButtonDiv>
  );
};
