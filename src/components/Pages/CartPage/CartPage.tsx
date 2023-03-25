import { useSelector } from "react-redux";
import { ItemCart } from "@/redux/cartSlice";
import { CartCard } from "@/components/Cards/CartCard";
import {
  CartContainer,
  CartSection,
  CheckoutContainer,
  Container,
} from "./style";

export const CartPage: React.FC = (): JSX.Element => {
  const cart = useSelector((state: { cart: ItemCart[] }) => state.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <CartSection>
        <CartContainer>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              title={item.title}
              id={item.id}
            />
          ))}
        </CartContainer>
        <CheckoutContainer>
          <div>
            <p>
              Total ({getTotal().totalQuantity} items) :{" "}
              <strong>${getTotal().totalPrice.toFixed(2)}</strong>
            </p>
          </div>
          <button>checkout</button>
        </CheckoutContainer>
      </CartSection>
    </Container>
  );
};
