import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Products = () => {
  let [products, setProducts] = useState([])
  useEffect(()=>{
        Axios.get('http://127.0.0.1:5000/api/products').then((res)=>{
          setProducts(res.data)
        }).catch(()=>{})
  },[])
  return (
    <>
      <h1>Products</h1>
      <div className="container">
      <pre>{JSON.stringify(products)}</pre>
      <div className="row">
      {
        products.length > 0 ? <>
          {
            products.map((product)=>{
              return <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} height='150px' alt="No pic" />
                    </div>
                    <div className="card-body">
                      <li className="list-group-item">{product.name}</li>
                    </div>
                  </div>
                </div>

            })
          }
        </> : <h1>No Products...</h1>
      }
        </div>
      </div>
    </>
  )
}

export default Products
