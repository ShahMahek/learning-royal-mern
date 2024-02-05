import React from 'react'
import { useForm } from 'react-hook-form';

export const Login = () => {

    const{register,handleSubmit,formState:{errors}}=useForm();
    const submitHandler =async(data)=>{
        console.log(data);

        const id ="12345djfsjfksfg"
        localStorage.setItem("id",id)
        sessionStorage.setItem("id",id)
        
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Email</label>
                <input type='email' placeholder='Enter Email'{...register("email")}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder='Enter password'{...register("password")}></input>
            </div>
            <div>
                <input type="submit" value="Login" />   
            </div>
        </form>

    </div>
  )
}
