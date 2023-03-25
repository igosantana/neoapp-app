import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";
import { ButtonAddToCart as Button } from "./style";

interface ButtonProps {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export const ButtonAddToCart: React.FC<ButtonProps> = ({
  id,
  title,
  image,
  price,
  quantity = 0,
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() =>
        dispatch(
          addToCart({
            id,
            title,
            image,
            price,
            quantity,
          })
        )
      }
    >
      Add to Cart
    </Button>
  );
};
