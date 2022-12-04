import React from 'react'
import { useState } from 'react'

const RegForm = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    })
    const [nameErr, setNameErr] = useState("")
    const [mobileErr, setMobileErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")


    const changeInputHandler = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const validateForm = () => {
        let name = formValues.name
        let mobile = formValues.mobile
        let email = formValues.email
        let password = formValues.password

        //Name validation
        if (name === "") {
            setNameErr("Please enter Name")
        }
        else if (name.length < 4 || name.length > 10) {
            setNameErr("Name must be of min 4 and max 10 characters")
        }
        else {
            setNameErr("")
        }

        //Mobile validation
        if (mobile === "") {
            setMobileErr("Please enter Mobile number")
        }
        else if (mobile.length < 10 || mobile.length > 10) {
            setMobileErr("Enter valid Mobile number")
        }
        else {
            setMobileErr("")
        }

        //Email validtion
        const isEmailValid = (email) => {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(email);
        };

        if (email === "") {
            setEmailErr("Please enter Email ID")
        }
        else if (!isEmailValid(email)) {
            setEmailErr("Enter valid Email ID")
        }
        else {
            setEmailErr("")
        }

        //Password validation
        if (password === "") {
            setPasswordErr("Please enter your Password")
        }
        else if (password.length < 6 || password.length > 15) {
            setPasswordErr("Password must be of min 6 and max 15 characters")
        }
        else {
            setPasswordErr("")
        }
    }

    const submitFormHandler = (event) => {
        event.preventDefault()
        validateForm()
        console.log(formValues)
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
                                        <input type="text" name='name' placeholder="Name" className='form-control' onChange={changeInputHandler} />
                                        <p className='text-danger'>{nameErr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name='mobile' placeholder="Mobile" className='form-control' onChange={changeInputHandler} />
                                        <p className='text-danger'>{mobileErr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='email' placeholder="Email" className='form-control' onChange={changeInputHandler} />
                                        <p className='text-danger'>{emailErr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name='password' placeholder="Password" className='form-control' onChange={changeInputHandler} />
                                        <p className='text-danger'>{passwordErr}</p>
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
