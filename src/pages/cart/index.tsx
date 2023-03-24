import { CartContainer, Container } from "./style";
import { useSelector } from "react-redux";
import { ItemCart } from "@/redux/cartSlice";
import { CartCard } from "@/components/CartCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Cart: React.FC = () => {
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
    <>
      <Header />
      <Container>
        <h1>Shopping Cart</h1>
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
          <div>
            <p>
              total ({getTotal().totalQuantity} items) :{" "}
              <strong>${getTotal().totalPrice}</strong>
            </p>
          </div>
        </CartContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
