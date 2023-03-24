import styled from "styled-components";

export const CartCardContainer = styled.div`
  width: 100%;
  display: flex;
  height: 140px;
  gap: 5px;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 30%;
  img {
    width: 100%;
    max-width: 88.5px;
    height: 100%;
    max-height: 140px;
  }
`;

export const DetailContainer = styled.div`
  width: 70%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  div {
    width: 100%;
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

export const QuantityButton = styled.button`
  width: 18px;
  height: 18px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  width: 100%;
  max-width: 120px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
  text-align: center;
  border: none;
  cursor: pointer;
`;
