import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding-top: 110px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 20px;
  }
`;

export const CartSection = styled.section`
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CartContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  div {
    p {
      font-size: 24px;
    }
  }
  button {
    width: 100%;
    max-width: 120px;
    padding: 0.8em 1.8em;
    position: relative;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    color: black;
    border: 2px solid var(--primary-color);
    transition: 0.3s;
    z-index: 1;
    cursor: pointer;

    ::before {
      content: "";
      width: 0;
      height: 300%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background-color: var(--primary-color);
      color: white;
      transition: 0.5s ease;
      display: block;
      z-index: -1;
    }
    &:hover::before {
      width: 105%;
    }

    &:hover {
      color: white;
    }
  }
`;
