import React from 'react'

const RegForm = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row bg-danger">
                            <h1 style={{textAlign:'center',backgroundColor:'aqua'}}>Registration Details</h1>
                        </div>
                        <div className="row bg-success">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className='form-control ' placeholder='First Name' />
                                </div>
                                <div className="form-group">
                            <input type="text" className='form-control ' placeholder='First Name' />
                        </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className='form-control ' placeholder='First Name' />
                                </div>
                                <div className="form-group">
                            <input type="text" className='form-control ' placeholder='First Name' />
                        </div>
                            </div>
                        </div>
                        <div className="row bg-primary">
                            <input type="submit" value="Register" className='btn btn-warning' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegForm
