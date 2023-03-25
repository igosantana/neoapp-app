import { api } from "@/common/services/api";
import { ButtonAddToCart } from "@/components/Buttons/ButtonAddToCart";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Loader } from "@/components/Loader";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import {
  ComicContainer,
  Container,
  DetailContainer,
  ImageTitleContainer,
} from "./style";

const Comic: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { comicId } = router.query;
  const { data, error, isLoading } = useSWR(comicId, api.getOneComic);
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Error: no data</div>;
  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  const comicData = data.data.results[0];
  const artist = comicData.creators.items.find(
    (item) => item.role === "writer"
  );
  const date = new Date(comicData.dates[0].date);
  const imgUrl = `${comicData.images[0].path}/detail.${comicData.images[0].extension}`;

  return (
    <>
      <Header />
      <Container>
        <ComicContainer>
          <ImageTitleContainer
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={imgUrl} alt='Comic image' />
          </ImageTitleContainer>
          <DetailContainer>
            <h2>{comicData.title}</h2>
            <h3>Published:</h3>
            <span>{date.toDateString()}</span>
            <h3>Cover Artist:</h3>
            <span>{artist?.name}</span>
            <h3>Description:</h3>
            <p>
              {comicData.description
                ? comicData.description
                : "No description already..."}
            </p>
            <div>
              <ButtonAddToCart
                id={comicData.id}
                image={imgUrl}
                price={comicData.prices[0].price}
                quantity={0}
                title={comicData.title}
              />
            </div>
          </DetailContainer>
        </ComicContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Comic;
