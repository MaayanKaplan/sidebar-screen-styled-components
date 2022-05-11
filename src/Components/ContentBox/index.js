import React from "react";
import * as S from "./styles";
import { BoxContent } from "../../Utils/BoxContent";
import Button from "../../Common/Button";

const ContentBox = ({ color }) => {
  return (
    <>
      {BoxContent.map((data, key) => {
        return (
          <S.Container key={key} color={data.color}>
            <S.Subtitle>{data.subtitle}</S.Subtitle>
            <S.Title>{data.title}</S.Title>
            <S.Description>{data.description}</S.Description>
            {data.buttonText && <Button text={data.buttonText}></Button>}
          </S.Container>
        );
      })}
    </>
  );
};

export default ContentBox;
