import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/cartSlice";
import Image from "next/image";
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

export const CartCard: React.FC<CartCardProps> = ({
  title,
  image,
  price,
  quantity = 0,
  id,
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <CartCardContainer>
      <ImageContainer>
        <Image src={image} alt='comic image' />
      </ImageContainer>
      <DetailContainer>
        <h4>{title}</h4>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          <QuantityButton
            id='remove-one-item'
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </QuantityButton>
          <p>{quantity}</p>
          <QuantityButton
            id='add-one-item'
            onClick={() => dispatch(incrementQuantity(id))}
          >
            +
          </QuantityButton>
        </div>
        <RemoveButton
          id='remove-item-from-cart'
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </RemoveButton>
      </DetailContainer>
    </CartCardContainer>
  );
};
