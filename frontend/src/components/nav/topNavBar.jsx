import React from "react";
import styled from "styled-components";
import SignInButton from "../authModalButton/authModalButton";
import { NavBar, MiddleNavWrapper, SideNavWrapper } from "../nav/navbar";
import ToggleMenu from "../toggleButton/toggleButton";
import Autocomplete from "../autocomplete/autocomplete";

export const Section = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin-right: 20px;
  justify-content: center;
  border-right: ${({ left }) => left && `0.1px solid black;`};
  height: 100%;
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const TopNavBar = () => {
  return (
    <NavBar top>
      <SideNavWrapper />
      <MiddleNavWrapper>
        <Section left>LOGO</Section>
        <Section left>Home</Section>
        <Section>
          <Autocomplete />
        </Section>
        <Section>
          <SignInButton text={"Sign in"} />
        </Section>
        <Section>
          <SignInButton text={"Create account"} />
        </Section>
        <Section>Upload</Section>
        <Section>
          <ToggleMenu />
        </Section>
      </MiddleNavWrapper>
      <SideNavWrapper />
    </NavBar>
  );
};
