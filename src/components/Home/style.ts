import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: auto;
  padding-top: 110px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  h1 {
    font-size: bold;
    margin-bottom: 20px;
  }
`;

export const SectionCards = styled(motion.section)`
  width: 100%;
  max-width: 1440px;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-flow: column;
  padding: 8px;
  margin-left: -100;

  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-flow: row;
    flex-wrap: wrap;
  }
`;
