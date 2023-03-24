import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/cartSlice";
import { useDispatch } from "react-redux";
import {
  CartCardContainer,
  DetailContainer,
  ImageContainer,
  QuantityButton,
  RemoveButton,
} from "./style";

interface CartCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export const CartCard = ({
  title,
  image,
  price,
  quantity = 0,
  id,
}: CartCardProps) => {
  const dispatch = useDispatch();
  return (
    <CartCardContainer>
      <ImageContainer>
        <img src={image} alt='comic image' />
      </ImageContainer>
      <DetailContainer>
        <h4>{title}</h4>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          <QuantityButton onClick={() => dispatch(decrementQuantity(id))}>
            -
          </QuantityButton>
          <p>{quantity}</p>
          <QuantityButton onClick={() => dispatch(incrementQuantity(id))}>
            +
          </QuantityButton>
        </div>
        <RemoveButton onClick={() => dispatch(removeItem(id))}>
          Remove
        </RemoveButton>
      </DetailContainer>
    </CartCardContainer>
  );
};
