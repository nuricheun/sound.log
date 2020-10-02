import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Line } from "../trackIndexRow/trackIndexRow";
import {
  BasicFormInput,
  TitleDiv,
  BasicInputLabel,
  BasicForm,
  BasicButton,
} from "../designSystem/basicForm";
import { withRouter } from "react-router-dom";

const PurpleAuthButton = styled(BasicButton)`
  background-color: #dabfde;
  width: 100%;
`;

const AuthFormContainer = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 320px;
  height: ${(props) => (props.big ? `520px` : `460px`)};
  position: relative;
`;

const TitleP = styled.p`
  color: #333;
  font-size: 30px;
  width: 100%;
  margin: 0;
  height: 100%;
  text-align: center;
`;

const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
`;

const ErrorP = styled.p`
  font-size: 14px;
  color: #ff0000;
`;

const FormDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const AuthForm = styled(BasicForm)`
  align-items: center;
`;

const AuthButton = styled(BasicButton)`
  width: 100%;
`;

const FormLine = styled(Line)`
  margin: 10px 0;
`;

export const AuthModalForm = ({
  whichAuth,
  err,
  handleSwitch,
  signin,
  registerUser,
  history,
  closeModal,
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword("");
    setEmail("");
    setUsername("");
  }, [whichAuth]);

  const submitRef = useRef();

  const handleMockLogin = () => {
    const mockEmail = "slowdive@gmail.com";
    const mockPassword = "password";
    let i = 0;
    (function () {
      let emailRef = setInterval(() => {
        setEmail((pre) => pre + mockEmail[i]);
        i++;
        if (i === mockEmail.length) clearInterval(emailRef);
      }, 100);
    })();
    (function () {
      let j = 0;
      let passwordRef = setInterval(() => {
        setPassword((pre) => pre + mockPassword[j]);
        j++;
        if (j === mockPassword.length) clearInterval(passwordRef);
      }, 100);
    })();
  };

  const submitAction = whichAuth === "signin" ? signin : registerUser;

  let title = whichAuth === "signin" ? "Sign in" : "Create account";
  let buttonText = "Continue";
  let optionText =
    whichAuth === "signin" ? "Join Sound.Log" : "Already have account";
  let switchModal = whichAuth === "signin" ? "register" : "signin";

  const handleSubmit = (e) => {
    e.preventDefault();

    submitAction({ email, username, password })
      .then(() => history.push("/tracks"))
      .then(() => closeModal());
  };

  return (
    <AuthFormContainer big={whichAuth !== "signin"}>
      <TitleDiv>
        <TitleP>{title}</TitleP>
      </TitleDiv>
      <ErrorDiv>
        <ErrorP>{err}</ErrorP>
      </ErrorDiv>
      <FormDiv>
        <AuthForm onSubmit={handleSubmit}>
          {whichAuth !== "signin" && (
            <React.Fragment>
              <BasicInputLabel>Username</BasicInputLabel>
              <BasicFormInput
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </React.Fragment>
          )}
          <BasicInputLabel>Email</BasicInputLabel>
          <BasicFormInput
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BasicInputLabel>Password</BasicInputLabel>
          <BasicFormInput
            type="button"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <AuthButton type="submit">{buttonText}</AuthButton>
          <PurpleAuthButton
            type="button"
            onClick={() => {
              handleSwitch({ type: "auth", data: switchModal }).then(() =>
                handleMockLogin()
              );
            }}
          >
            Sign in with mock account
          </PurpleAuthButton>
          <br />
          <FormLine />
          <AuthButton
            type="button"
            onClick={() => handleSwitch({ type: "auth", data: switchModal })}
          >
            {optionText}
          </AuthButton>
        </AuthForm>
      </FormDiv>
    </AuthFormContainer>
  );
};

export default withRouter(AuthModalForm);
