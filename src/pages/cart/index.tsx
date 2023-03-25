import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NextPage } from "next";
import { CartPage } from "@/components/Pages/CartPage";

const Cart: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <CartPage />
      <Footer />
    </>
  );
};

export default Cart;
