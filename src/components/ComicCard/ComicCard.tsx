import { ComicData } from "@/common/interfaces/cards.interfaces"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { CardButton, CardContainer, DetailContainer, ImageContainer } from "./style"

interface ComicCardProps {
    data: ComicData;
}

export const ComicCard = ({data}: ComicCardProps) => {
    const dispatch = useDispatch()
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
                <CardButton onClick={() => dispatch(addToCart({
                    id:data.id,
                    title: data.title,
                    image: imgUrl,
                    price: data.prices[0].price,
                    quantity: 0
                }))}>
                    Add to cart
                </CardButton>
            </DetailContainer>
        </CardContainer>
    )
}
