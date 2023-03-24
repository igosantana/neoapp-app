import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  padding-top: 110px;
  padding-bottom: 100px;
`;

export const ComicContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImageTitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: #e1e1e1;
  gap: 5px;
  h2 {
    font-weight: bold;
  }
  img {
    width: 100%;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #e1e1e1;
  h3 {
    font-weight: bold;
  }

  p {
    text-align: justify;
  }

  div {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
`;
