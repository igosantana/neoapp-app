import { decrementQuantity, incrementQuantity, ItemCart, removeItem } from "@/redux/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CartCardContainer, DetailContainer, ImageContainer } from "./style";

interface CartCardProps {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

export const CartCard = ({title, image, price, quantity=0, id}: CartCardProps) => {
    const dispatch = useDispatch()
    return (
        <CartCardContainer>
            <ImageContainer>
                <img src={image} alt="comic image" />
            </ImageContainer>
            <DetailContainer>
                <h3>{title}</h3>
                <p><small>$</small><strong>{price}</strong></p>
                <div>
                    <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
                </div>
                <button onClick={() => dispatch(removeItem(id))}>
                    Remove
                </button>
            </DetailContainer>
        </CartCardContainer>
    )
}