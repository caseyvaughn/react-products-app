import { useEffect, useState } from "react";
import axios from "axios"

export default function Products() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const api = "https://products-api-01.herokuapp.com/api/products";
      axios.get(api)
        .then(data => {
          // console.log(data.data);
          setProducts(data.data);
        })
        .catch(console.log("error"))
    }
    fetchProducts();
  }, []);

  return(
    <div>
      Products Comp
      {products.map((item) => {
        return (
          <h1>Name: {item.name}</h1>
        )
      })}
    </div>
  )
}
