import React from "react";
import styled, { css } from "styled-components";
import playbutton from "../../images/playbutton.png";
import pausebutton from "../../images/pausebutton.png";

const PlayButtonWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  background-size: cover;
  background-image: ${(props) =>
    props.play ? `url(${pausebutton})` : `url(${playbutton})`};
  ${(props) =>
    props.small &&
    css`
      margin: 0;
      display: none;
      position: absolute;
      top: 28%;
      left: 33%;
    `}
`;

export const PlayButton = ({ small }) => {
  const [play, togglePlay] = React.useState(false);
  const toggle = () => {
    togglePlay((prev) => !prev);
  };
  return <PlayButtonWrapper onClick={toggle} play={play} small={small} />;
};
