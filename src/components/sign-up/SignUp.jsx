import React, { useState } from 'react'
import './SignUp.css'

function SignUp() {
    const [form, setForm] = useState({ name: "", email: "", gender: "male", phone: "", password: "" })
    const [isValied, setIsValied] = useState(false)
    const [error, setError] = useState({ name: { validation: true, message: "" }, email: { validation: true, message: "" }, gender: { validation: true, message: "" }, phone: { validation: true, message: "" }, password: { validation: true, message: "" } })
    const [showHead, setShowHead] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isAllInputsValied) {
            setIsValied(true)
            //setShowHead(false)

        }
        else{
            setIsValied(false)
            setShowHead(true)
            setForm({name: "", email: "", gender: "male", phone: "", password: "" })
        }
        
        

        // if(!form.name.length){
        //     setError({ ...error, name: { validation: false, message: "Name Error" } })
        // }
        // if(!form.email.length){
        //     setError({ ...error, email: { validation: false, message: "Email Error" } })
        // }
        //  if(!form.phone.length){
        //     setError({ ...error, phone: { validation: false, message: "Phone Number Error" } })
        // }
        //  if(!form.password.length){
        //     setError({ ...error, password: { validation: false, message: "Password Error" } })
        // }


        

        //console.log(form);
        //console.log(isAllInputsValied);
    }
    
    //to check whether all fields are entered or not
    const isAllInputsValied = form.name.length && form.email.length && form.gender.length && form.phone.length && form.password.length

    const checkError = (type) => {
        switch (type) {
            case "name":
                if (!/[a-z0-9]/i.test(form.name)) {
                    setError({ ...error, name: { validation: false, message: "Name is not alphanumeric" } })
                }
            
                else {
                    setError({ ...error, name: { validation: true, message: "" } })
                }
                break;

            case "email":
                if (!/@/.test(form.email)) {
                    setError({ ...error, email: { validation: false, message: "Email must contain @" } })
                }
                else {
                    setError({ ...error, email: { validation: true, message: "" } })
                }
                break;

            case "phone":
                if (!/[0-9]/.test(form.phone)) {
                    setError({ ...error, phone: { validation: false, message: "Phone Number must contain only numbers" } })
                }
                else {
                    setError({ ...error, phone: { validation: true, message: "" } })
                }
                break;


            case "password":
                if (form.password.length <6) {
                    setError({ ...error, password: { validation: false, message: "Password must contain atleast 6 letters" } })
                }
                else {
                    setError({ ...error, password: { validation: true, message: "" } })
                }
                break;
        }
    }




    return (
        <div>
            { showHead && <h1>Hello {form.name}</h1>}

            <form className='form-section' action="#" method=''>
                <article className='label-section'>
                    <label htmlFor="name">Name</label>
                    <input onBlur={() => { checkError("name") }} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid='name' type="text" id='name' value={form.name} />
                    {<div style={{color:"red"}}>{error.name.message}</div>}

                    <label htmlFor="email">Email Address</label>
                    <input onBlur={() => { checkError("email") }} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid='email' type="email" id='email' value={form.email} />
                    {<div style={{color:"red"}}>{error.email.message}</div>}

                    <label htmlFor="gender">Gender</label>
                    <select onChange={(e) => setForm({ ...form, gender: e.target.value })} data-testid='gender' name="" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    

                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={() => { checkError("phone") }} onChange={(e) => setForm({ ...form, phone: e.target.value })} data-testid='phoneNumber' type="text" id='phone' value={form.phone} />
                    {<div style={{color:"red"}}>{error.phone.message}</div>}

                    <label htmlFor="password">Password</label>
                    <input onBlur={() => { checkError("password") }} onChange={(e) => setForm({ ...form, password: e.target.value })} data-testid='password' type="password" id='password' value={form.password} />
                    {<div style={{color:"red"}}>{error.password.message}</div>}

                    {isValied &&
                    <div style={{ color: "red" }}>All fields are mandatory</div>
                }
                </article>
               
                <button onClick={handleSubmit} className='form-submit-btn' type='submit' disabled={isAllInputsValied===0 ? true:false} data-testid='submit' >Submit</button>
                {/* disabled={isAllInputsValied===0 ? true:false} */}
            </form>
        </div>
    )
}

export default SignUp