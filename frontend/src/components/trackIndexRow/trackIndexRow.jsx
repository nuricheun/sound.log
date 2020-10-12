import React from "react";
import styled from "styled-components";
import { RowWrapper, RowkWrapper } from "../designSystem/wrapper";
import { TrackItem } from "../trackItem/trackItem";
import { SectionTitle, ItemTitle } from "../designSystem/text";
import { TextContainer } from "../designSystem/textContainer";

export const Line = styled.hr`
  border: 0;
  color: #f00;
  background-color: #f2f2f2;
  height: 2px;
  width: 100%;
  margin: 20px 0 15px;
`;

export const TrackIndexRow = ({ tracks, title, subTitle }) => {
  const mapped = Object.keys(tracks).map((trackId) => (
    <TrackItem key={trackId} track={tracks[trackId]} />
  ));
  return (
    <RowWrapper>
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        <ItemTitle big>{subTitle}</ItemTitle>
      </TextContainer>
      <RowkWrapper>{mapped}</RowkWrapper>
      <Line />
    </RowWrapper>
  );
};
