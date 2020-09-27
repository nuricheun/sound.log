import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  background-color: #f2f2f2;
`;

export const CenterTopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 30px 25px;
  box-sizing: border-box;
  z-index: 10;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1240px;
  min-width: 450px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background-image: url(${(props) => props.img});
  ${(props) =>
    props.show &&
    css`
      flex-direction: row;
      height: 350px;
      justify-content: space-between;
    `}
`;

export const MiddleWrapper = styled.div`
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtomWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  padding-bottom: 40px;
  box-sizing: border-box;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 480px;
  padding: 0px 25px 0;
  background-color: #fff;
  box-sizing: border-box;
`;

export const RowTrackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const CommentInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 5px 5px 0;
  height: 40px;
  width: 100%;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
`;

export const CommentShowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
`;

export const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  ${(props) =>
    props.small &&
    css`
      width: 40px;
      height: 40px;
    `}
`;

export const ColSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RowSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid #f2f2f2;
`;
