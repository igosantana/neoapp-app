import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  a {
    text-decoration: none;
    color: black;
    h3 {
      font-size: 24px;
      font-weight: bold;
    }
  }
  width: 100%;
  max-width: 216px;
  display: flex;
  flex-flow: column;
  gap: 5px;
`;
