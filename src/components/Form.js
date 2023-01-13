import React from 'react'
import { useState } from 'react'

const Form = () => {

    const user = {
        name:"",
        phone : "",
        username : ""
    }
    const [inputs, setInputs] = useState(user)

    const changeValue = (e) =>{
        setInputs({...inputs, [e.target.name] : e.target.value})
    }
    const submitHandler = (e) =>{   
        e.preventDefault();
        console.log(inputs);
       
    }
  return (
    <form onSubmit = {submitHandler}>
        <input type = "text" name = "name" placeholder = "Name" onChange = {changeValue} />
        <input type = "number" name = "phone" placeholder = "Phone" onChange = {changeValue} />
        <input type = "text" name = "username" placeholder = "Username" onChange = {changeValue} />
        <input type = "submit">Submit</input>
    </form>
  )
}

export default Form