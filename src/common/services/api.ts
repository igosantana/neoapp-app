import axios from 'axios'
import { ComicsResData } from "../interfaces/comicRes.interface";

const getComics = async (offSet = 0): Promise<ComicsResData> => {
    const response = await axios.get<ComicsResData>(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bccc63563d81110837fe6e2469dd9e48&hash=a2c9c6a9f035c18324ec13e8caf6d30c&format=comic&formatType=comic&dateDescriptor=thisMonth&limit=10&offset=${offSet}`)
    return response.data
}

export const api = {
    getComics
}