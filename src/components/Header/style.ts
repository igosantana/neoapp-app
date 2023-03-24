import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 8px 10px;
  max-height: 70px;
  background-color: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const LogoAndImageContainer = styled.nav`
  width: 100%;
  max-width: 1440px;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 60px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 120px;
  }
`;

export const LogoContainer = styled.div`
  width: 40%;
  img {
    width: 100%;
    max-width: 120px;
    max-height: 70px;
  }
`;

export const CartImageContainer = styled.div`
  svg {
    color: white;
    width: 32px;
    height: 32px;
  }
  span {
    border-radius: 50%;
    font-size: 12px;
    color: white;
    vertical-align: top;
    font-weight: bold;
    padding: 5px;
    background-color: red;
  }
`;
