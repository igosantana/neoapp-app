import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  position: fixed;
  bottom: 0;
`;

export const TextFooterContainer = styled.div`
  display: flex;
  h3 {
    text-transform: uppercase;
    color: white;
  }
  span {
    font-size: 12px;
    color: white;
  }
`;
