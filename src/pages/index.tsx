import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Home } from "@/components/Pages/Home";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default IndexPage;
