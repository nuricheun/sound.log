import React from "react";
import { ProfileImage, CommentShowDiv } from "../wrapper/wrapper";
import { TextContainer } from "../text/textContainer";
import { GreyH6, ItemTitle } from "../text/text";

export const Comment = ({ username, content }) => {
  return (
    <CommentShowDiv>
      <ProfileImage small={true} />
      <TextContainer>
        <GreyH6>{username}</GreyH6>
        <ItemTitle>{content}</ItemTitle>
      </TextContainer>
    </CommentShowDiv>
  );
};
