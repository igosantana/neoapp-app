import { Container, Header, SectionCards } from "./style"
import useSWR from 'swr'
import { ComicCard } from "@/components/ComicCard/ComicCard"
import { api } from "@/common/services/api"
import { useState } from "react"
import { Pagination } from "@/components/Pagination"


export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const offset = currentPage === 1 ? 0 : currentPage * 10
  const {data, error} = useSWR(`${offset}`, api.getComics)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  const cardData = data.data.results
  return (
    <>
    <Header />
    <Container>
      <SectionCards>
      {cardData && cardData.map((item) => (
        <ComicCard data={item} key={item.id} />
      ))}
      <Pagination limit={data.data.limit} page={currentPage} setPage={setCurrentPage} total={data.data.total}/>
      </SectionCards>
    </Container>
    </>
  )
}

