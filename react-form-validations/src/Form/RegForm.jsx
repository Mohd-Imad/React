import React from 'react'
import { useState } from 'react'

const RegForm = () => {

    let [formValues, setFormValues] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    })

    let [formErr, setFormErr] = useState({})

    let [submitted, setSubmitted] = useState(false)



    let changeInputHandler = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    let submitFormHandler = (event) => {
        event.preventDefault()
        setFormErr(formValidation(formValues))
        setSubmitted(true)
    }

    let formValidation = ()=>{

    }

    return (
        <>
            <div className="container mt-5">
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <h1>Registration Details</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitFormHandler}>
                                    <div className="form-group">
                                        <input type="text" name='name' placeholder="Name" className='form-control' value={formValues.name} onChange={changeInputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name='mobile' placeholder="Mobile" className='form-control' value={formValues.mobile} onChange={changeInputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name='email' placeholder="Email" className='form-control' value={formValues.email} onChange={changeInputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name='password' placeholder="Password" className='form-control' value={formValues.password} onChange={changeInputHandler} />
                                    </div>
                                    <input type="submit" value="Register" className='btn btn-warning' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegForm
