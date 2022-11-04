import React,{useState} from 'react'
import Axios from 'axios'
import {Navigate} from 'react-router-dom'

const CreateProduct = () => {

  let [product, setProduct] = useState({
    name : "",
    image : "",
    price : "",
    qty : "",
    info : ""
  })

  let [submitted, setSubmitted] = useState(false)

  let productData = (event)=>{
    setProduct({
      ...product,[event.target.name] : event.target.value
    })
  }

  let createHandler = (event)=>{
    event.preventDefault()
    let url = "http://127.0.0.1:5000/api/products/"
    Axios.post(url,product).then((resp)=>{
      setSubmitted(true)
      console.log(resp)
    }).catch(()=>{})
  }

  return (
    <>
      <h1>CreateProduct</h1>
      <div className="container">
        <pre>{JSON.stringify(product)}</pre>
        {
          submitted ? <><Navigate to='/products' /></> : <>
                    <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-info text-white">
                <h1>Create Product</h1>
              </div>
              <div className="card-body">
                <form onSubmit={createHandler}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder='Product Name' className='form-control' onChange={productData} />
                  </div>
                  <div className="form-group">
                    <input type="text" name="image" placeholder='Image' className='form-control' onChange={productData} />
                  </div>
                  <div className="form-group">
                    <input type="number" name="price" placeholder='Price' className='form-control' onChange={productData} />
                  </div>
                  <div className="form-group">
                    <input type="number" name="qty" placeholder='QTY' className='form-control' onChange={productData} />
                  </div>
                  <div className="form-group">
                    <textarea name="info" cols="52" rows="3" placeholder='Description' className='form-control' onChange={productData}></textarea>
                  </div>
                  <button className="btn btn-warning">Create Product</button>
                </form>
              </div>
            </div>
          </div>
        </div>
          </>
        }

      </div>
    </>
  )
}

export default CreateProduct
