import React, { useState } from "react";
import styled, { css } from "styled-components";
import PostEditable from "./PostEditable";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 80px 250px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  margin-bottom: 20px;
  ${({ type }) =>
    type === "title"
      ? css`
          font-size: 24px;
          font-weight: bold;
        `
      : css`
          font-size: 18px;
        `}
`;

const PostBody = () => {
  return (
    <Base>
      <Form>
        <Input type="title" placeholder="제목을 입력하세요." />
        <Input type="subtitle" placeholder="부제목을 입력하세요." />
        <PostEditable />
      </Form>
    </Base>
  );
};

export default PostBody;
