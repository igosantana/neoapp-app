import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 470px;
  display: flex;
  flex-flow: column;
  align-items: center;

  &:hover {
    h3 {
      color: var(--primary-color);
    }
    img {
      transform: translateY(-4px);
      transition-duration: 0.5s;
      cursor: pointer;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    box-shadow: 5px 5px 5px gray;
  }
`;

export const DetailContainer = styled.div`
  a {
    text-decoration: none;
    color: black;
    h3 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 216px;
      font-size: 24px;
      text-align: left;
      font-weight: bold;
    }
  }
  width: 100%;
  max-width: 216px;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
