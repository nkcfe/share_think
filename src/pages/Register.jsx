import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import useInput from "../hooks/useInput";
import AlertMessage from "../components/login/AlertMessage";
import { useDispatch } from "react-redux";
import { __registerUser } from "../redux/modules/userReducer";

// 정규식
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

const Register = () => {
  const [isPwShow, setIsPwShow] = useState("password");
  const [id, handleIdChange] = useInput();
  const [password, handlePasswordChange] = useInput();
  const [passwordCheck, handlePasswordCheckChange] = useInput();
  const [isIdFocused, setIsIdFocused] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const [isPwCheckFocused, setIsPwCheckFocused] = useState(false);
  
  const [alertErrorMsg, setAlertErrorMsg] = useState("");
  const [alertSuccessMsg, setAlertSuccessMsg] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClickpwShowHandler = () => {
    isPwShow === "password" ? setIsPwShow("text") : setIsPwShow("password");
  };

  // 유효성 검사 로직
  const checkRegex = (type) => {
    let result;
    const value =
      type === "ID" ? id : type === "Password" ? password : passwordCheck;
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
        case "PasswordCheck":
          result = value === password ? true : "invalidConfirmPw";
          break;
        default:
          return;
      }
    }
    setErrorData((prev) => ({ ...prev, [type]: result }));
  };

  // 회원가입 제출
  

  useEffect(() => {
    const timer = setInterval(() => {
      setAlertErrorMsg("");
      setAlertSuccessMsg("");
    }, 3000);

    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, [alertErrorMsg, alertSuccessMsg]);

  return (
    <Base>
      <Wrapper>
        {alertSuccessMsg && (
          <AlertMessage
            type="success"
            successMsg={alertSuccessMsg}
            errorMsg={alertErrorMsg}
          />
        )}
        {alertErrorMsg && (
          <AlertMessage
            type="error"
            successMsg={alertSuccessMsg}
            errorMsg={alertErrorMsg}
          />
        )}

        <Title>환영합니다</Title>
        <SubTitle>회원 정보를 입력해주세요.</SubTitle>
        <FormContainer onSubmit={handleSubmit}>
          <InputWrapper>
            <FormInput
              type="text"
              value={id}
              onChange={handleIdChange}
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
          <InputWrapper>
            <FormInput
              type={isPwShow}
              value={password}
              onChange={handlePasswordChange}
              onFocus={() => setIsPwFocused(true)}
              onBlur={() => {
                setIsPwFocused(false);
                checkRegex("Password");
              }}
            />
            <PlaceHolder focus={isPwFocused} value={password}>
              비밀번호
            </PlaceHolder>
            <ErrorMsg>
              {errorData["Password"] !== true
                ? ERROR_MSG[errorData["Password"]]
                : ""}
            </ErrorMsg>
          </InputWrapper>
          <InputWrapper>
            <FormInput
              type={isPwShow}
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
              onFocus={() => setIsPwCheckFocused(true)}
              onBlur={() => {
                setIsPwCheckFocused(false);
                checkRegex("PasswordCheck");
              }}
            />
            <PlaceHolder focus={isPwCheckFocused} value={passwordCheck}>
              비밀번호 확인
            </PlaceHolder>
            {isPwShow === "password" ? (
              <BsEyeSlashFill onClick={onClickpwShowHandler} />
            ) : (
              <IoEyeSharp onClick={onClickpwShowHandler} />
            )}
            <ErrorMsg>
              {errorData["PasswordCheck"] !== true
                ? ERROR_MSG[errorData["PasswordCheck"]]
                : ""}
            </ErrorMsg>
          </InputWrapper>

          <FormButton>회원가입 하기</FormButton>
          <LinktoSignup>
            이미 회원이신가요?{" "}
            <Link to={"/login"}>
              <span>로그인 하기</span>
            </Link>
          </LinktoSignup>
        </FormContainer>
      </Wrapper>
    </Base>
  );
};

export default Register;

const Base = styled.div`
  background: ${({ theme }) => theme.color.background};
  height: 100vh;

  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.fontColor};
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFontColor};
  margin-top: 15px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 45px;
`;

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

const FormButton = styled.button`
  margin-top: 25px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.point};
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    background: ${({ theme }) => theme.color.subPoint};
  }
`;

const LinktoSignup = styled.div`
  margin-top: 15px;
  font-size: 14px;
  span {
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.point};
  }
`;

const ErrorMsg = styled.div`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 12.5px;
  font-weight: bold;
  color: red;
  height: 5px;
`;
