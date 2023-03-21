import { ComicData } from "@/common/interfaces/cards.interfaces"
import { CardContainer, DetailContainer, ImageContainer } from "./style"
interface ComicCardProps {
    data: ComicData;
}
export const ComicCard = ({data}: ComicCardProps) => {
    return (
        <CardContainer>
            <ImageContainer background={data.images[0].path} />
            <DetailContainer>
                <h2>{data.title}</h2>
            </DetailContainer>
        </CardContainer>
    )
}
