import React from 'react'

const Update = () => {
  return (
    <>
      <h1>Update</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-warning text-white">
                <h1>Update Product</h1>
              </div>
              <div className="card-body">
                <form>
                <div className="form-group">
                  <input type="text" name="name" placeholder='Product Name' className='form-control' />
                </div>
                <div className="form-group">
                  <input type="file" name="image" placeholder='Image' className='form-control' />
                </div>
                <div className="form-group">
                  <input type="number" name="price" placeholder='Price' className='form-control' />
                </div>
                <div className="form-group">
                  <input type="number" name="qty" placeholder='QTY' className='form-control' />
                </div>
                <div className="form-group">
                  <input type="text" name="info" placeholder='Description' className='form-control' />
                </div>
                <input type="submit" value="Update Product" className='btn btn-warning' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Update
