import React from "react";
import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";

const Base = styled.div`
  display: flex;
  padding: 60px;
  gap: 20px;
  background: #f5f5f7;
`;

const ArticleList = () => {
  const articles = useSelector((state) => state.articleReducer);

  return (
    <Base>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </Base>
  );
};

export default ArticleList;
