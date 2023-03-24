export interface OneComicReqRes {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ResultsEntity[];
}

interface ResultsEntity {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description?: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects?: null[];
  resourceURI: string;
  urls?: UrlsEntity[];
  series: VariantsEntityOrSeries;
  variants?: VariantsEntityOrSeries[];
  collections?: null[];
  collectedIssues?: null[];
  dates: DatesEntity[];
  prices: PricesEntity[];
  thumbnail: ImagesEntityOrThumbnail;
  images: ImagesEntityOrThumbnail[];
  creators: Creators;
  characters: CharactersOrEvents;
  stories: Stories;
  events: CharactersOrEvents;
}

interface UrlsEntity {
  type: string;
  url: string;
}

interface VariantsEntityOrSeries {
  resourceURI: string;
  name: string;
}

interface DatesEntity {
  type: string;
  date: string;
}

interface PricesEntity {
  type: string;
  price: number;
}

interface ImagesEntityOrThumbnail {
  path: string;
  extension: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: ItemsEntity[];
  returned: number;
}

interface ItemsEntity {
  resourceURI: string;
  name: string;
  role: string;
}

interface CharactersOrEvents {
  available: number;
  collectionURI: string;
  items: null[];
  returned: number;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: ItemsEntity1[];
  returned: number;
}

interface ItemsEntity1 {
  resourceURI: string;
  name: string;
  type: string;
}
