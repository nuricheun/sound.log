import styled, { css } from "styled-components";

export const TrackImage = styled.div`
  object-fit: cover;
  width: 320px;
  height: 320px;
  background-size: cover;
  transition: transform 0.2s;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  cursor: pointer;
  ${(props) =>
    props.small &&
    css`
      width: 180px;
      height: 180px;
    `}
`;