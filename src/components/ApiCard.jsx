import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios' 

function ApiCard() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((respons) => setData(respons.data))
    }, [])

  return (
    <div>
        <Product products={data} />
    </div>
  )
}

export default ApiCard