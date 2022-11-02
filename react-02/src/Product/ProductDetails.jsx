import React from 'react'

const ProductDetails = (props) => {
  let details = props.details.selProduct
  return (
    <>
      <h1>Products Details</h1>
      <pre>{JSON.stringify(props.details)}</pre>
      <div className="card">
        <div className="card-header">
          <img src={details.thumbnail} height="150px" alt="" />
        </div>
        <div className="card-body">
          <li className="list-group-item">ID : {details.id}</li>
          <li className="list-group-item">Product : {details.title}</li>
          <li className="list-group-item">Price :{details.price}</li>
          <li className="list-group-item">Stock Available : {details.stock}</li>
          <li className="list-group-item">Info : {details.description}</li>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
