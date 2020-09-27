import React from "react";
import styled from "styled-components";
import { CommentInputDiv } from "../wrapper/wrapper";

const MiniProfilePicture = styled.input`
  width: 40px;
  height: 40px;
  padding: 0;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #e5e5e5;
  padding: 0 9px;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;

export const CommentForm = () => {
  return (
    <CommentInputDiv>
      <MiniProfilePicture />
      <CommentInput />
    </CommentInputDiv>
  );
};
