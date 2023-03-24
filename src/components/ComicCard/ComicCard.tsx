import { ComicData } from "@/common/interfaces/cards.interfaces";
import { CardContainer, DetailContainer, ImageContainer } from "./style";
import Link from "next/link";
import { ButtonAddToCart } from "../Buttons/ButtonAddToCart";

interface ComicCardProps {
  data: ComicData;
}

export const ComicCard = ({ data }: ComicCardProps) => {
  const creatorName = data.creators.items?.find((i) => i.role === "writer");
  const imgUrl = `${data.images[0]?.path}/portrait_incredible.${data.images[0]?.extension}`;
  return (
    <CardContainer>
      <ImageContainer>
        <img src={imgUrl} alt='Comic image' />
      </ImageContainer>
      <DetailContainer>
        <Link legacyBehavior href={`/comic/${data.id}`}>
          <a>
            <h3>{data.title}</h3>
          </a>
        </Link>
        {creatorName && <span>{creatorName.name}</span>}
        <span>
          $<span>{data.prices[0].price}</span>
        </span>
        <ButtonAddToCart
          children='Add to Cart'
          id={data.id}
          title={data.title}
          price={data.prices[0].price}
          image={imgUrl}
          quantity={0}
        />
      </DetailContainer>
    </CardContainer>
  );
};
