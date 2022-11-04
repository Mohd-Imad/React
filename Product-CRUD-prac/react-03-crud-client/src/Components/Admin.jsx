import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const Admin = () => {
  let [products, setProducts] = useState([])
  useEffect(()=>{
    Axios.get('http://127.0.0.1:5000/api/products').then((res)=>{
      setProducts(res.data)
    }).catch(()=>{})
  },[])
  return (
    <>
      <h1>Admin</h1>
      <div className="container">
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
          <div className="col-md-8">
            <table className="table table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  {/* <th>ID</th> */}
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.length > 0 ? <>
                    {
                      products.map((product)=>{
                        return <tr>
                          {/* <td>{product._id}</td> */}
                          <td>{product.name}</td>
                          <td><img src={product.image} height='100px' alt="No Pic" /></td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>
                            <Link to='/update' className='btn btn-warning'>Edit</Link>
                            <Link to='/admin' className='btn btn-danger'>Del</Link>
                          </td>
                        </tr>
                      })
                    }
                  </> : <h1>No Products....</h1>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
