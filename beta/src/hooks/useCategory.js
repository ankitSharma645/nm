import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get cat
  const getCategories = async () => {
    try {
      const res = await axios({
        method: "get",
        baseURL: "http://localhost:8000",
        url: "/api/v1/category/get-category",
      });
      setCategories(res.data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}