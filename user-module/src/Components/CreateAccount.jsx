import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from './Login'

const CreateAccount = () => {
  return (
    <>
      <h1>Sign-Up</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h1>Create Account</h1>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email" className='form-control' required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Mobile</label>
                    <input type="number" name="mobile" className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Re-Password</label>
                    <input type="password" name="re-password" className='form-control' />
                  </div>
                  <input type="submit" value="Create Account" className='btn btn-warning' />
                  <div>
                    <p>Already have an account? <span><Navigate to='/login' /><Login />Login</span></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAccount
