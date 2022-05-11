import styled from "styled-components";

export const Navbar = styled.nav`
  width: 343px;
  flex-grow: 0;
  padding: 32px 21px 638px 64px;
  background-color: #0e1649;

  display: flex;
  flex-direction: column;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 65px 0 42px 0;
  width: 236px;
`;

export const NavLink = styled.a`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: normal;
  color: #fff;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;
