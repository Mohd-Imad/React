import React from 'react'

const RegForm = () => {

    let formValidation = (vent)=>{

    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <h1>Registration Details</h1>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" placeholder="First Name" className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Last Name" className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder="Mobile" className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Re-Enter Password" className='form-control' />
                                </div>
                                <input type="submit" value="Register" className='btn btn-warning' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegForm
