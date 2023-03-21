export interface ComicData {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description?: null;
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
    series: Series;
    variants?: null[];
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

interface Series {
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
    items?: (ItemsEntity)[] | null;
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
    items?: (null)[] | null;
    returned: number;
  }

  interface Stories {
    available: number;
    collectionURI: string;
    items?: (ItemsEntity1)[] | null;
    returned: number;
  }

  interface ItemsEntity1 {
    resourceURI: string;
    name: string;
    type: string;
  }
  