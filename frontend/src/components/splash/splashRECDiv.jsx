import styled from "styled-components";

const SplashRECWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SplashRECDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SplashREC = ({ children }) => {
  return (
    <SplashRECWrapper>
      <SplashRECDiv></SplashRECDiv>
    </SplashRECWrapper>
  );
};
