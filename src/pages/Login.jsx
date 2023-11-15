import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import useInput from "../hooks/useInput";
import AlertMessage from "../components/login/AlertMessage";
import { useDispatch, useSelector } from "react-redux";
import { __loginUser } from "../redux/modules/userReducer";



const Login = () => {
  const [isPwShow, setIsPwShow] = useState("password");

  const [id, handleIdChange] = useInput();
  const [password, handlePasswordChange] = useInput();  

  const [alertErrorMsg, setAlertErrorMsg] = useState("");
  const [alertSuccessMsg, setAlertSuccessMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer);

  const onClickpwShowHandler = () => {
    isPwShow === "password" ? setIsPwShow("text") : setIsPwShow("password");
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(errorData).every((value) => value === true);
    isValid && dispatch(__loginUser({ id, password }));
    users.isLoading && setAlertSuccessMsg("로딩 중");
    if (users.isSuccess === true) {
      setAlertSuccessMsg("로그인에 성공하였습니다.");
      navigate("/");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setAlertErrorMsg("");
      setAlertSuccessMsg("");
    }, 3000);

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
              onBlur={(e) => {
                setIsPwFocused(false);
                checkRegex("Password");
              }}
            />
            <PlaceHolder focus={isPwFocused} value={password}>
              비밀번호
            </PlaceHolder>
            {isPwShow === "password" ? (
              <BsEyeSlashFill onClick={onClickpwShowHandler} />
            ) : (
              <IoEyeSharp onClick={onClickpwShowHandler} />
            )}
            <ErrorMsg>
              {errorData["Password"] !== true
                ? ERROR_MSG[errorData["Password"]]
                : ""}
            </ErrorMsg>
          </InputWrapper>

          <FormButton>로그인 하기</FormButton>
          <LinktoSignup>
            회원이 아니신가요?{" "}
            <Link to="/register">
              <span>회원가입 하기</span>
            </Link>
          </LinktoSignup>
        </FormContainer>
      </Wrapper>
    </Base>
  );
};

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

export default Login;
