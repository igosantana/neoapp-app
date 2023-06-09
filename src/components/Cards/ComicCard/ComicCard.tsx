import { ComicData } from "@/common/interfaces/cards.interfaces";
import {
  ButtonContainer,
  CardContainer,
  DetailContainer,
  ImageContainer,
} from "./style";
import Link from "next/link";
import { ButtonAddToCart } from "../../Buttons/ButtonAddToCart";
import Image from "next/image";

interface ComicCardProps {
  data: ComicData;
}

export const ComicCard: React.FC<ComicCardProps> = ({ data }): JSX.Element => {
  const creatorName = data.creators.items?.find(
    (i) => i.role === "writer" || "letterer"
  );
  const imgUrl = `${data.images[0]?.path}/portrait_incredible.${data.images[0]?.extension}`;
  return (
    <CardContainer>
      <ImageContainer>
        <Link href={`/comic/${data.id}`}>
          <img src={imgUrl} alt='Comic image' />
        </Link>
      </ImageContainer>
      <DetailContainer>
        <Link legacyBehavior href={`/comic/${data.id}`}>
          <a>
            <h3 id='comic-title'>{data.title}</h3>
          </a>
        </Link>
        <span>{creatorName?.name}</span>
        <span>
          $<span>{data.prices[0].price}</span>
        </span>
      </DetailContainer>
      <ButtonContainer>
        <ButtonAddToCart
          id={data.id}
          title={data.title}
          price={data.prices[0].price}
          image={imgUrl}
          quantity={0}
        />
      </ButtonContainer>
    </CardContainer>
  );
};
