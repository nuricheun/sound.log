import React from "react";
import { RowWrapper, RowTrackWrapper } from "../wrapper/wrapper";
import { TrackItem } from "../trackItem/trackItem";
import sample from "../../images/8.jpeg";
import { SectionTitle, ItemTitle } from "../text/text";
import { TextContainer } from "../text/textContainer";
import styled from "styled-components";

export const Line = styled.hr`
  border: 0;
  color: #f00;
  background-color: #f2f2f2;
  height: 2px;
  width: 98%;
  margin: 0;
`;

const tempData = new Array(4).fill(null);
const mock = { img: sample, title: "WAP feat.Megan Thee", artist: "Slowdive" };
const mapped = tempData.map((e) => (
  <TrackItem img={mock.img} artist={mock.artist} title={mock.title} />
));

export const TrackIndexRow = ({ title, subtitle }) => {
  return (
    <RowWrapper>
      <TextContainer>
        <SectionTitle>{title}</SectionTitle>
        <ItemTitle big>{subtitle}</ItemTitle>
      </TextContainer>
      <RowTrackWrapper>{mapped}</RowTrackWrapper>
      <Line />
    </RowWrapper>
  );
};
