import React, { useState } from 'react'


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const SubmitInfo = (event) => {
        setName(event.target.value)
    }
    const SubmitEmail = (e) => {
        setEmail(e.target.value)
    }
    const SubmitPass = (e) => {
        setPassword(e.target.value)
    }
    const SubmitAllInfo = (e) => {
        console.log(name, email, pass)
        e.preventDefault()
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Registation Form</h1>
            <form action='' className='form' onSubmit={SubmitAllInfo}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input className="form-control" type='text' name='name' id='name' placeholder='Enter your name ' required onChange={SubmitInfo} value={name} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input className="form-control" type='email' name='email' id='email' placeholder='Enter your emal ' required onChange={SubmitEmail} value={email} />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input className="form-control" type='password' name='password' id='password' placeholder='Enter your password ' required onChange={SubmitPass} value={pass} />
                </div>
                <button className='btn btn-primary mt-3 ' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;