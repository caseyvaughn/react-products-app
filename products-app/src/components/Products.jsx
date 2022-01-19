import { useEffect, useState } from "react";
import axios from "axios"

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect = async () => {
    const api = "https://products-api-01.herokuapp.com/api/products";
    const res = axios.get(api)
    console.log(res);
  }




  return <div>

  </div>;
}
