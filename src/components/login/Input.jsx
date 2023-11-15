import React, { useState } from "react";
import styled, { css } from "styled-components";

const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

// 에러메세지
const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 소문자, 숫자와 '_', '-'만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
};

// 에러메세지 initial
const initialErrorData = {
  ID: "",
  Password: "",
  PasswordCheck: "",
};

const initialFormData = {
  id: "",
  password: "",
  passwordCheck: "",
};

const Input = () => {
  const { formData, setFormData } = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialErrorData);
  const [isFocused, setIsFocused] = useState(false);

  const checkRegex = (type) => {
    let result;
    const value = type === "ID" ? formData[id] : for;
    if (value.length === 0) {
      result = "required";
    } else {
      switch (type) {
        case "ID":
          result = ID_REGEX.test(value) ? true : "invalidId";
          break;
        case "Password":
          result = PW_REGEX.test(value) ? true : "invalidPw";
          break;
        default:
          return;
      }
    }

    setErrorData((prev) => ({ ...prev, [type]: result }));
  };

  return (
    <InputWrapper>
      <FormInput
        type="text"
        value={formData[id]}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, [id]: e.target.value }));
        }}
        onFocus={() => setIsIdFocused(true)}
        onBlur={() => {
          setIsIdFocused(false);
          checkRegex("ID");
        }}
      />
      <PlaceHolder focus={isIdFocused} value={id}>
        아이디
      </PlaceHolder>
      <ErrorMsg>
        {errorData["ID"] !== true ? ERROR_MSG[errorData["ID"]] : ""}
      </ErrorMsg>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    top: 35px;
    right: 15px;

    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: #50546d;
    }
  }
`;

const FormInput = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 5px;
  padding: 15px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.point};
  }
`;

const PlaceHolder = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.color.subFontColor};
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 50px;
  padding: 5px;
  ${({ focus }) =>
    focus
      ? css`
          font-size: 12px;
          color: ${({ theme }) => theme.color.point};
          top: 10px;
          left: 15px;
        `
      : css`
          font-size: 16px;
          top: 30px;
          left: 15px;
        `}
  ${({ value }) =>
    value &&
    css`
      font-size: 12px;
      color: ${({ theme }) => theme.color.point};
      top: 8px;
      left: 15px;
    `}
`;

const ErrorMsg = styled.div`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 12.5px;
  font-weight: bold;
  color: red;
  height: 5px;
`;
