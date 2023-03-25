import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ComicDetail } from "@/components/Pages/ComicDetail";
import { NextPage } from "next";

const Comic: NextPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <ComicDetail />
      <Footer />
    </>
  );
};

export default Comic;
