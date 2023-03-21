import { Container, Header, SectionCards } from "./style"
import useSWR from 'swr'
import { ComicsResData } from "@/common/interfaces/comicRes.interface"
import { ComicCard } from "@/components/ComicCard/ComicCard"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const Home: React.FC = () => {
  const url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bccc63563d81110837fe6e2469dd9e48&hash=a2c9c6a9f035c18324ec13e8caf6d30c&format=comic&formatType=comic&dateDescriptor=thisWeek&limit=10&offset=0'
  const {data, error} = useSWR<ComicsResData>(url, fetcher)
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
      </SectionCards>
    </Container>
    </>
  )
}

