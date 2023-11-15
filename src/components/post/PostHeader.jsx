import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 18px;
  }
  width: 50px;
  height: 100%;
  border: 1px solid #f2f2f2;
`;

const PostHeader = () => {
  const navigate = useNavigate();

  return (
    <Base>
      <BackBtn onClick={() => navigate("/")}>
        <BiArrowBack />
      </BackBtn>
    </Base>
  );
};

export default PostHeader;
