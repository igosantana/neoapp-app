import styled from "styled-components";

export const ButtonAddToCart = styled.button`
  width: 100%;
  max-width: 120px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  color: var(--white);
  background-color: var(--primary-color);
  box-shadow: 5px 5px 5px black;
  cursor: pointer;
  &:hover {
    background-color: var(--primary-hover);
  }
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
`;
