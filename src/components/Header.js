import React from "react";
import styled from "styled-components";
import HeaderLogoImg from "../assets/header-logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavWrapper>
        <Nav1>운영수칙</Nav1>
        <Nav>양식</Nav>
        <Nav>안내</Nav>
        <Nav>홍보</Nav>
        <Nav>이벤트</Nav>
        <Nav>기타</Nav>
      </NavWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: calc(100% - 70px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
`;

const Logo = styled.div`
  width: 135px;
  height: 80px;
  background-image: url(${HeaderLogoImg});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavWrapper = styled.div`
  display: flex;
`;

const Nav = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav1 = styled(Nav)`
  background-color: #ffaf26;
  color: #fff;
  font-weight: 700;
`;

export default Header;
