import React from "react";
import styled from "styled-components";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Base = styled.div`
  background: #fff;
  width: 300px;
  height: 350px;
  border-radius: 25px;

  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2);
  }
`;

const BackImg = styled.div`
  background-image: url("https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d73852f7a6dfa5b3e1e829f_clumsy.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 170px;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  padding: 20px 20px 0 20px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #6e6e73;
  padding: 20px 20px 0 20px;
`;

const Footer = styled.div`
  margin-top: auto;

  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

const Writer = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #6e6e73;
`;

const CtrDiv = styled.div`
  display: flex;
  gap: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  span {
    font-size: 14px;
  }
`;

const ArticleItem = ({ article }) => {
  const { id, title, subtitle, text } = article;
  return (
    <Base>
      <BackImg></BackImg>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Footer>
        <Writer>by chul</Writer>
        <CtrDiv>
          <IconWrapper>
            <AiFillHeart />
            <span>1</span>
          </IconWrapper>
          <IconWrapper>
            <BiCommentDetail />
            <span>1</span>
          </IconWrapper>
        </CtrDiv>
      </Footer>
    </Base>
  );
};

export default ArticleItem;
