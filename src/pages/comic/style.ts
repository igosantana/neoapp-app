import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
  padding-top: 110px;
  padding-bottom: 100px;
`;

export const ComicContainer = styled.div`
  width: 100%;
  max-width: 920px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ImageTitleContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  color: #e1e1e1;
  gap: 10px;
  h2 {
    font-weight: bold;
    margin: 0 auto;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 288px;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 32px;
    }
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
    font-size: 16px;
  }

  div {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 24px;
    }
    span {
      font-size: 16px;
    }
    p {
      font-size: 24px;
    }
  }
  /* @media screen and (min-width: 1024px) {
    justify-content: center;
  } */
`;
