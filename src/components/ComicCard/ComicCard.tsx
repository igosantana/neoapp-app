import { ComicData } from "@/common/interfaces/cards.interfaces"
import { CardButton, CardContainer, DetailContainer, ImageContainer } from "./style"

interface ComicCardProps {
    data: ComicData;
}

export const ComicCard = ({data}: ComicCardProps) => {
    const creatorName = data.creators.items?.find(i => i.role === "writer")
    const imgUrl = `${data.images[0]?.path}/detail.${data.images[0]?.extension}`
    return (
        <CardContainer>
            <ImageContainer>
                <img src={imgUrl} alt="Comic image" />
            </ImageContainer>
            <DetailContainer>
                <h3>{data.title}</h3>
                {creatorName && <span>{creatorName.name}</span>}
                <span>R$<span>{data.prices[0].price}</span></span>
                <CardButton>
                    Comprar
                </CardButton>
            </DetailContainer>
        </CardContainer>
    )
}
