import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NextPage } from "next";
import { Home } from "../components/Home";

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
