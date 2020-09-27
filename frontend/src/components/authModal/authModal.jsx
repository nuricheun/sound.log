import React from "react";
import styled from "styled-components";
import AuthModalForm from "../authForm/authForm";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../redux/actions/modalAction";
import { register, signin } from "../../redux/actions/authAction";

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    signin: (user) => dispatch(signin(user)),
    registerUser: (user) => dispatch(register(user)),
  };
};

const mapStateToProps = ({ modal }) => {
  return {
    modal,
  };
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: hsla(0, 0%, 94.9%, 0.9);
  z-index: 20;
`;

const CloseModalButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  color: #333;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: animateTop 0.4s;
`;

export const Modal = ({
  modal,
  closeModal,
  openModal,
  registerUser,
  signin,
}) => {
  if (!modal) return null;

  return (
    <ModalBackground>
      <CloseModalButton onClick={closeModal} />
      <ModalWrapper>
        <AuthModalForm
          modal={modal}
          handleSwitch={openModal}
          signin={signin}
          registerUser={registerUser}
          closeModal={closeModal}
        />
      </ModalWrapper>
    </ModalBackground>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
