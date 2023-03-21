import { ComicData } from "./cards.interfaces";

export interface ComicsResData {
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
    results?: ComicData[];
  }

  interface UrlsEntity {
    type: string;
    url: string;
  }

  interface SeriesOrVariantsEntityOrItemsEntity {
    resourceURI: string;
    name: string;
  }

  interface SeriesOrVariantsEntityOrItemsEntity1 {
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

  interface Characters {
    available: number;
    collectionURI: string;
    items?: (SeriesOrVariantsEntityOrItemsEntity2 | null)[] | null;
    returned: number;
  }

  interface SeriesOrVariantsEntityOrItemsEntity2 {
    resourceURI: string;
    name: string;
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

  interface CharactersOrEvents {
    available: number;
    collectionURI: string;
    items?: (null)[] | null;
    returned: number;
  }
  