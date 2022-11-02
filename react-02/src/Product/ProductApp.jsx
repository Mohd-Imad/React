import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import ProductsList from './ProductsList'
import ProductDetails from './ProductDetails'


const ProductApp = () => {
  let [products, setProducts] = useState({})
  let [selproduct, setSelProduct] = useState({})

  useEffect(() => {
    Axios.get('https://dummyjson.com/products').then((res) => { setProducts(res.data) }).catch(() => { })
  }, [])

  let selectedProduct = (product)=>{
    setSelProduct({selProduct :product})
  }
  return (
    <>
      <h1>Product App</h1>
      <div className="container">
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
          <div className="col-md-8">
            {
              Object.keys(products).length > 0 ? <>
                <ProductsList products={products.products} method = {selectedProduct} />
              </> : <h1>No Products</h1>
            }
          </div>
          <div className="col-md-4">
            {
              Object.keys(products).length > 0 ? <>
                <ProductDetails details = {selproduct}/>
              </> : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductApp
