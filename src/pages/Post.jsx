import React from "react";
import styled from "styled-components";
import PostHeader from "../components/post/PostHeader";
import PostBody from "../components/post/PostBody";

const Base = styled.div`
  background: ${({ theme }) => theme.color.background};
  height: 100vh;
`;

const Post = () => {

  

  return (
    <Base>
      <PostHeader />
      <PostBody />
    </Base>
  );
};

export default Post;
