import React from "react";
import styled from "styled-components";
import { CiCircleAlert } from "react-icons/ci";
import { BsCheckLg } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

const AlertContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
  top: -100px;
  background: ${({ type }) => (type === "error" ? "#fff6de" : "#EBF9EC")};
  width: 300px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const AlertIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: ${({ type }) => (type === "error" ? "#fed222" : "")};
  border-radius: 100%;
  font-size: 20px;
  color: #fff;
`;

const AlertErrorMsg = styled.div`
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
  color: #4b5054;
`;

const AlertMessage = ({ type, successMsg, errorMsg }) => {
  return (
    <AlertContainer type={type}>
      <AlertIcon type={type}>
        {type === "error" ? (
          <CiCircleAlert />
        ) : (
          <ClipLoader color="#36d7b7" size={25} />
        )}
      </AlertIcon>

      <AlertErrorMsg>{type === "error" ? errorMsg : successMsg}</AlertErrorMsg>
    </AlertContainer>
  );
};

export default AlertMessage;
