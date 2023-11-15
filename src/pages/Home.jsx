import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Template from "../components/Template";
import ArticleList from "../components/ArticleList";

const Base = styled.div`
  background: ${({ theme }) => theme.color.background};
  height: 100vh;
`;

const Home = ({ logout }) => {
  return (
    <Base>
      <Navbar logout={logout} />
      <Template>
        <ArticleList />
      </Template>
    </Base>
  );
};

export default Home;
