import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding-top: 110px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: bold;
    margin-bottom: 20px;
  }
`;

export const SectionCards = styled.section`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-flow: column;
  padding: 8px;
`;
