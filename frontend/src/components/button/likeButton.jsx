import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import heart from "../../images/outlineheart.png";

const LikeButtonDiv = styled.div`
  background-image: url(${heart});
  background-color: #fff;
  width: 20px;
  height: 20px;
  right: 0%;
  bottom: 0%;
  position: absolute;
`;

export const LikeButton = () => {
  return <LikeButtonDiv />;
};
