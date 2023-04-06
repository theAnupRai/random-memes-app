import {useEffect, useState} from "react";
import axios from 'axios';

const API_KEY = "D9a9bvVhKmlzZlFGHiVyrWIFpW7lI2vx";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get( tag ? `${url}&tag=${tag}` : url ); 
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect( () => {
    fetchData("car");
  }, [] );

  return(
    {gif, fetchData, loading}
  )
};

export default useGif;