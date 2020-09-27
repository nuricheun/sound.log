import React from "react";
import {
  PageWrapper,
  CenterWrapper,
  TopWrapper,
  ButtomWrapper,
  ColSection,
  VerticalLine,
} from "../wrapper/wrapper";
import show_bg from "../../images/show_background.jpg";
import { TrackImage } from "../trackImage/trackImage";
import styled, { css } from "styled-components";
import { TitleSpan } from "../text/text";
import { TextContainer } from "../text/textContainer";
import { PlayButton } from "../button/playButton";
import { Comment } from "../comment/comment";
import { CommentForm } from "../comment/commentForm";
import { MiniProfile } from "../miniprofile/miniprofile";
import { ColumnSection } from "../columnSection/columnSection";
import sample from "../../images/8.jpeg";

const mocks = [
  { username: "nuri joen", content: "it was really awesome!" },
  { username: "lamlam lam", content: "i don't like bingrae" },
  { username: "justin rae g", content: "bing is my life cute rae" },
];

const mapped = mocks.map(({ username, content }) => (
  <Comment username={username} content={content} />
));

const TopLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 330px;
  justify-content: space-between;
`;

const BottomLeftSection = styled(ColSection)`
  width: 65%;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const BottomRightSection = styled(ColSection)`
  ${"" /* width: 35%; */}
`;

const BottomRowSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const CommentSection = styled(ColSection)`
  width: 100%;
`;

const RelatedTrackSection = styled(ColSection)``;

export const TrackShow = () => {
  return (
    <PageWrapper>
      <CenterWrapper>
        <TopWrapper show img={show_bg}>
          <TopLeftDiv>
            <PlayButton />
            <TextContainer>
              <TitleSpan>Hello</TitleSpan>
              <TitleSpan big>Hello There</TitleSpan>
            </TextContainer>
          </TopLeftDiv>
          <TrackImage img={sample} />
        </TopWrapper>
        <ButtomWrapper>
          <BottomLeftSection>
            <CommentForm />
            <BottomRowSection left={true}>
              <MiniProfile />
              <CommentSection>{mapped}</CommentSection>
            </BottomRowSection>
          </BottomLeftSection>
          <VerticalLine />
          <ColumnSection title={"Related tracks"}>{mapped}</ColumnSection>
        </ButtomWrapper>
      </CenterWrapper>
    </PageWrapper>
  );
};
