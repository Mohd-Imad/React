import React from 'react'
import {Navigate} from 'react-router-dom'
import CreateAccount from './CreateAccount'

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <h1>Login Details</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Email</label>
                                        <input type="email" name="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Password</label>
                                        <input type="password" name="password" className="form-control" />
                                    </div>
                                    <input type="submit" value="Login" className='btn btn-primary' />
                                    <div>
                                        <p>Don't have account?<span><Navigate to='/createaccount' /><CreateAccount />Login</span></p>
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

export default Login
