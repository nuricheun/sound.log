import styled, { css } from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex direction: row;
  font-weight: 400;
  justify-content: space-between;
  width: 100%;  
  position: fixed;
  height: 50px;
  padding: 2px;
  box-sizing: border-box;
  left: 0;

${(props) =>
  props.top
    ? css`
        top: 0;
        background-color: #333;
        color: #fff;
      `
    : css`
        background-color: #f2f2f2;
        border-top: 1px solid #cecece;
        bottom: 0;
        color: #333;
      `}
`;

export const SideNavWrapper = styled.div``;

export const MiddleNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100%;
  max-width: 1240px;
  min-width: 450px;
`;
