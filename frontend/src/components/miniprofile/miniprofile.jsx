import React from "react";
import { ProfileImage } from "../wrapper/wrapper";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MiniProfile = ({ img, artist }) => {
  return (
    <ProfileWrapper>
      <ProfileImage img={img} />
      <span>{artist}</span>
    </ProfileWrapper>
  );
};
