import React, { useEffect, useState } from "react";
import {
  CenterWrapper,
  TopWrapper,
  MiddleWrapper,
  ButtomWrapper,
  ButtonWrapper,
  PageWrapper,
} from "../wrapper/wrapper";
import { SectionTitle } from "../text/text";
import { TrackItem } from "../trackItem/trackItem";
import SignInButton from "../authModalButton/authModalButton";
import { connect } from "react-redux";
import { fetchAllTracks } from "../../redux/actions/trackAction";
import styled from "styled-components";
import { MainLogo } from "../designSystem/logo";
import main from "../../images/sp.gif";

const mapStateToProps = ({ tracks }) => ({
  tracks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
});

export const SplashButtonwrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: inherit;
  padding: 35px 25px;
  box-sizing: border-box;
`;

const SplashWrapper = styled(CenterWrapper)`
  padding-top: 0;
`;

const SplashImage = styled(TopWrapper)`
  background-color: #dabfde;
  justify-content: center;
  align-items: center;
`;

const TempDiv = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Wrapper = styled(PageWrapper)`
  position: fixed;
  top: 0;
  padding-top: 0;
`;

const SplashTitle = styled.p`
  color: #fff;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 28px;
  font-family: "Roboto", sans-serif;

  background: -webkit-linear-gradient(#fff, #ffbae6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Splash = ({ fetchAllTracks, tracks }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTracks().then(() => setLoading(false));
  }, []);

  if (isLoading) {
    return null;
  }

  const mapped = Object.keys(tracks).map((trackId) => (
    <TrackItem track={tracks[trackId]} />
  ));

  return (
    <Wrapper>
      <SplashWrapper>
        <SplashImage>
          <SplashButtonwrapper>
            <MainLogo big={true} />
          </SplashButtonwrapper>
          <SplashTitle>Sound.log("So much music, so little time");</SplashTitle>
          <TempDiv src={main} />
          <SplashButtonwrapper>
            <ButtonWrapper>
              <SignInButton text={"Sign in"} />
              <SignInButton text={"Create account"} />
            </ButtonWrapper>
          </SplashButtonwrapper>
        </SplashImage>
        <MiddleWrapper>
          <SectionTitle>
            Hear what’s trending in the Sound.Log community
          </SectionTitle>
        </MiddleWrapper>
        <ButtomWrapper>{mapped}</ButtomWrapper>
      </SplashWrapper>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
