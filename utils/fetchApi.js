import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':  'd48d2cd421mshea2ebe3ddaac43cp100477jsnd072303a1d2f',
    },
  });
    
  return data;
}