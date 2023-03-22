import { Container, SectionCards } from "./style"
import useSWR from 'swr'
import { ComicCard } from "@/components/ComicCard/ComicCard"
import { api } from "@/common/services/api"
import { useState } from "react"
import { Pagination } from "@/components/Pagination"
import { useSelector } from "react-redux"
import { ItemCart } from "@/redux/cartSlice"
import { Header } from "@/components/Header"



export const Home: React.FC = () => {
  const cart = useSelector((state:{ cart: ItemCart[] } )=> state.cart)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const offset = currentPage === 1 ? 0 : currentPage * 10
  const {data, error} = useSWR(`${offset}`, api.getComics)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  const cardData = data.data.results
  const getTotalQuantity = (): number => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <>
    <Header quantity={getTotalQuantity()} />
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

