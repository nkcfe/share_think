import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Base = styled.div`
  position: sticky;
  width: 100%;
  height: 60px;
  background-color: #fff;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Logo = styled.div``;

const Menu = styled.div`
  display: flex;
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.subPoint};
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.subPoint};
  }
`;

const UserMenuLi = styled.li`
  top: 60px;
  right: 10px;
  position: absolute;
  list-style-type: none;

  width: 120px;
  height: 150px;

  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;

const UserMenuUl = styled.ul`
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 16px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.borderColor};
  }
`;

const Navbar = ({ logout }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const navagate = useNavigate();
  const handleDropdownToggle = () => {
    setIsDropdown(!isDropdown);
  };

  const onClickLogout = () => {
    logout();
    navagate("/login");
  };
  return (
    <Base>
      <NavContainer>
        <Logo></Logo>
        <Menu>
          <PostContainer onClick={() => navagate("/post")}>
            <BsPencil />
          </PostContainer>
          <UserContainer onClick={handleDropdownToggle}>
            <AiOutlineUser />
          </UserContainer>
          {isDropdown && (
            <UserMenuLi>
              <UserMenuUl>프로필 설정</UserMenuUl>
              <UserMenuUl onClick={onClickLogout}>로그아웃</UserMenuUl>
            </UserMenuLi>
          )}
        </Menu>
      </NavContainer>
    </Base>
  );
};

export default Navbar;
