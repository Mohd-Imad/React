import React from 'react'
import { useState } from 'react'

const RegForm = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    })

    const [errMsg, setErrMsg] = useState({
        nameErr : "",
        mobileErr : "",
        emailErr : "",
        passwordErr : "",
    })


    const changeInputHandler = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const formValidation = ()=>{
        //Name validation
        if(formValues.name === ""){
            setErrMsg({...errMsg,nameErr:"Please enter Name"})
        }
        else if(formValues.name.length <= 4 || formValues.name.length >10){
            setErrMsg({...errMsg,nameErr:"Name should be min 5 and max 10 characters"})
        }
        else{
            setErrMsg({...errMsg,nameErr:""})
        }
        if(formValues.email === ""){
            setErrMsg({...errMsg,emailErr:"Please enter Email"})
        }
        else{
            setErrMsg({...errMsg,emailErr:""})
        }
        
    }

    const submitFormHandler = (event)=>{
        event.preventDefault()
        console.log(formValues)
        formValidation()
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
                                        <input type="text" name='name' placeholder="Name" className='form-control'  onChange={changeInputHandler} />
                                        <p className='text-danger'>{errMsg.nameErr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name='mobile' placeholder="Mobile" className='form-control' onChange={changeInputHandler} />
                                        <p className='text-danger'>{errMsg.emailErr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name='email' placeholder="Email" className='form-control' onChange={changeInputHandler} />
                                        <p className='text-danger'></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name='password' placeholder="Password" className='form-control' onChange={changeInputHandler} />
                                        <p className='text-danger'></p>
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
