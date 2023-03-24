import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";
import { ButtonAddToCart as Button } from "./style";

interface ButtonProps {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  children: string;
}

export const ButtonAddToCart = ({
  id,
  title,
  image,
  price,
  quantity = 0,
  children,
}: ButtonProps) => {
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
      {children}
    </Button>
  );
};
