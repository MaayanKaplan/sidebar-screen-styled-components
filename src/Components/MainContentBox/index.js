import React from "react";
import Button from "../../Common/Button";

import * as S from "./styles";

import BackgroundImage from "../../Images/woman-img.png";

const MainContentBox = () => {
  return (
    <S.Wrapper style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <S.Container>
        <S.Subtitle>Web & Mobile Development</S.Subtitle>
        <S.Title>Custom made</S.Title>
        <S.Description>
          With a long-standing presence on the IT market and more than 1,500
          successful projects in portfolio, Iflexion is a full-stack provider of
          custom web app development for market leaders, growing and emerging
          businesses with technology at their core.
        </S.Description>
        <Button text="Read More"></Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default MainContentBox;
