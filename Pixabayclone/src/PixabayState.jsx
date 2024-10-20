import React, { useState, useEffect } from "react";
import PixabayContext from "./PixabayContext";

export const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState('london')

  useEffect(() => {
    const fetchData = async () => {
      const api_key = "46610653-2090315b2a1f9fba9bc4795c6";
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );

      const data = await api.json();
      setImageData(data.hits);
    };
    fetchData();
  }, [query]);


  const fetchImagebycategory = async(cat)  => {
    const api_key = "46610653-2090315b2a1f9fba9bc4795c6";
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&q=${cat}&image_type=photo&pretty=true&per_page=100`
    );

    const data = await api.json();
    setImageData(data.hits);
  }


  return (
    <PixabayContext.Provider value={{ imageData, fetchImagebycategory , setQuery}}>
      {props.children}
    </PixabayContext.Provider>
  );
};
