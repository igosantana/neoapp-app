import { FooterContainer, TextFooterContainer } from "./style";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer>
      <TextFooterContainer>
        <span>&copy;</span>
        <h3>Marvel</h3>
      </TextFooterContainer>
    </FooterContainer>
  );
};
