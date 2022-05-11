import styled from "styled-components";

const HandleColor = (color) => {
  switch (color) {
    case "light-orange":
      return `
      background-color: #ff9f00
      `;
    case "orange":
      return `
      background-color: #ff7748
      `;
    case "pink":
      return `
      background-color: #ff5288
      `;
    default:
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 32px 64px 32px 32px;
  height: 259px;

  ${(props) => HandleColor(props.color)}
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  line-height: 1.69;
  letter-spacing: normal;
  font-weight: normal;
  color: #1c1c1c;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.48px;
  color: #1c1c1c;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: normal;
  color: #1c1c1c;
`;
