import React, { useState } from "react";
import { useForm } from 'react-hook-form'

export const AddEmployee = () => {

    // react-hook-form

const {register,handleSubmit} = useForm()
const [employee,setemployee] = useState({})
const [submit,setsubmit] = useState(false)



const submitHandler = (data)=>{
    console.log(data)
    setemployee(data)
    setsubmit(true)
    
}

const deco ={
    color:employee.favcolor
}
  return (
    <div>
        <h1>Add Employee</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div> 
                <label>NAME</label>
                <input type='text' {...register("empname")}></input>
            </div>

            <div> 
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>

            <div> 
                <label>GENDER</label><br></br>
                MALE : <input type="radio" name='gender' value="male" {...register("gender")}></input> <br/>
                FEMALE : <input type="radio" name='gender' value="female" {...register("gender")}></input> <br/>
            </div>

    
            <div>
                    <label>DEPARTMENT</label>
                    <select {...register("dept")}>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="SALES">SALES</option>
                    </select>
            </div>
         

            <div>
                    <label>SKILLS</label>
                    <br/>
                    JAVA : <input type="checkbox" name='skills' value="java" {...register("skills")}></input> <br/>
                    HTML : <input type="checkbox" name='skills' value="html" {...register("skills")}></input> <br/>
                    CPP : <input type="checkbox" name='skills' value="cpp" {...register("skills")}></input> <br/>
            </div>

            <div>
                    <label>FAV COLOR</label>
                    <input type="color" {...register("favcolor")}></input>
            </div>
            
            <div>
                    <br></br><input type="submit" value="ADD EMPLOYEE" className='btn btn-primary' ></input>
            </div>
        </form><br/>
        {submit &&
        <div style={deco}>
                <h1>EMPLOYEE DETAILS</h1>
                <h5>NAME : {employee.empname}</h5>
                <h5>AGE : {employee.age}</h5>
                <h5>GENDER: -{employee.gender}</h5>
                {
                    employee.skills && employee.skills?.map((skill)=>{
                        return <h5>SKILLS : {skill}</h5>
                    })
                }
        </div>
        }
    </div>
  )
}
