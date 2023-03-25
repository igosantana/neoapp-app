import axios from "axios";
import { ComicsResData } from "../interfaces/comicRes.interface";
import { OneComicReqRes } from "../interfaces/oneComicRes.interface";

const getComics = async (offSet = 0): Promise<ComicsResData> => {
  const response = await axios.get<ComicsResData>(
    `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH_KEY}&format=comic&formatType=comic&dateDescriptor=thisMonth&limit=10&offset=${offSet}`
  );
  return response.data;
};

const getOneComic = async (comicId: string): Promise<OneComicReqRes> => {
  const response = await axios.get<OneComicReqRes>(
    `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH_KEY}`
  );
  return response.data;
};

export const api = {
  getComics,
  getOneComic,
};
