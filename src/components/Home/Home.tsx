import { Container, SectionCards } from "./style";
import useSWR from "swr";
import { api } from "@/common/services/api";
import { useState } from "react";
import { Pagination } from "@/components/Pagination";
import { ComicCard } from "../Cards/ComicCard";
import { Loader } from "../Loader";

export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const offset = currentPage === 1 ? 0 : currentPage * 10;
  const { data, error, isLoading } = useSWR(`${offset}`, api.getComics);
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;
  if (isLoading) return <Loader />;
  const cardData = data.data.results;
  return (
    <>
      <Container>
        <h1>Marvel Comics Store</h1>
        <SectionCards
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {cardData &&
            cardData.map((item) => <ComicCard data={item} key={item.id} />)}
        </SectionCards>
        <Pagination
          limit={data.data.limit}
          page={currentPage}
          setPage={setCurrentPage}
          total={data.data.total}
        />
      </Container>
    </>
  );
};
