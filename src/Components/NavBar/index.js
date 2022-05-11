import React from "react";
import * as S from "./styles";
import Logo from "../../Images/logo.png";

const NavBar = () => {
  return (
    <S.Navbar>
      <img src={Logo} alt="logo" />
      <S.LinksWrapper>
        <S.NavLink>Web & Mobile Development</S.NavLink>
        <S.NavLink>E-commerce</S.NavLink>
        <S.NavLink>Strategy & Realization</S.NavLink>
        <S.NavLink>Azure Cloud</S.NavLink>
        <S.NavLink>ERP</S.NavLink>
        <S.NavLink>Training</S.NavLink>
      </S.LinksWrapper>
    </S.Navbar>
  );
};

export default NavBar;
