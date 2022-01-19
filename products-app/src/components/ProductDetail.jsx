import { useState, useEffect } from "react"

export default function ProductDetail() {

  useEffect(() => {
    const fetchBook = async () => {
      const api = "https://products-api-01.herokuapp.com/api/products";
      const res = await api.get(`/${id}`);
      console.log(res.data);
    }
    fetchBook();
  }
  )

  return <div>

  </div>;
}
