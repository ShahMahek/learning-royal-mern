import React from 'react'
import { useForm } from 'react-hook-form'

export const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            //mode:"onChange"
            //mode:"onBlur"
            mode: 'all'
            
        }
        
    )
    const validationSchema = {
        name: {
            required: {
                value: true,
                message: "Name is required*"
            },
            minLength: {
                value: 3,
                message: "Name should be minimum 3 characters*"
            }
        },
        gender: {
            required: {
                value: true,
                message: "Gender is required*"
            }
        },
        department: {
            required: {
                value: true,
                message: "Department is required*"
            }
            
        },
        skills: {
            required: {
                value: true,
                message: "Skills are required*"
                
            },
            validate:(value)=>{
                return value.length >= 2 || "Enter atleast 2 skills*"
            }
        },
        contact: {
            required: {
                value: true,
                message: "Contact is required*"
            },
            pattern: {
                value: /[6-9]{1}[0-9]{9}/,
                message: "Invalid Contact Number*"
            }
        },
        email:{
            required: {
                value: true,
                message: "Email is required*"
            },
            pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid Email Id*"
            }
        },
        password:{
            required: {
                value: true,
                message: "Password is required*"
            },
            pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: "Password should be with 1special char, 1 number, 1 capital letter, 1 small letter, min 8 char*"
            }
        },
        url:{
            required: {
                value: true,
                message: "URL is required*"
            },
            pattern: {
                value: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
                message: "URL should be in proper format*"
            }
        }

    }
    const submitHandler = (data) => {
        console.log(data)
        reset()
      
    }
    console.log(errors)

    return (
        <div>
            <h1>Registration</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label>Name</label>
                        <input type='text' {...register("name", validationSchema.name)}></input>
                        {
                            errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>
                        }
                    </div> <br />

                    <div>
                        <label>GENDER</label>
                        <br />
                        MALE : <input type="radio" value="male" name="gender" {...register("gender", validationSchema.gender)}></input> <br></br>
                        FEMALE : <input type="radio" value="female" name="gender" {...register("gender", validationSchema.gender)}></input>
                        {
                            errors.gender && <span style={{ color: "red" }}>{errors.gender.message}</span>
                        }
                    </div> <br />

                    <div>
                        <label>department</label>
                        <select {...register("department", validationSchema.department)}>
                            <option value="">**Select**</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="SALES">SALES</option>
                        </select>
                        {
                            errors.department && <span style={{ color: "red" }}>{errors.department.message}</span>
                        }
                    </div> <br />

                    <div>
                        <label>SKILLS</label>
                        <br />
                        HTML : <input type="checkbox" value="html" name="skills"  {...register("skills", validationSchema.skills)}></input> <br></br>
                        css : <input type="checkbox" value="css" name="skills"  {...register("skills", validationSchema.skills)}></input> <br></br>
                        js : <input type="checkbox" value="js" name="skills"  {...register("skills", validationSchema.skills)}></input> <br></br>
                        {
                            errors.skills && <span style={{ color: "red" }}>{errors.skills.message}</span>
                        }
                    </div> <br />

                    <div>
                        <label>CONTACT NUMBER</label>
                        <input type="text" {...register("contact", validationSchema.contact)}></input>
                        {
                            errors.contact && <span style={{ color: "red" }}>{errors.contact.message}</span>
                        }
                    </div> <br />

                    <div>
                        <label>EMAIL</label>
                        <input type="email" {...register("email", validationSchema.email)}></input>
                        {
                            errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>
                        }
                    </div> <br/>

                    <div>
                        <label>PASSWORD</label>
                        <input type="password" {...register("password", validationSchema.password)}></input>
                        {
                            errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>
                        }
                    </div> <br/>

                    <div>
                        <label>URL</label>
                        <input type="url" {...register("url", validationSchema.url)}></input>
                        {
                            errors.url && <span style={{ color: "red" }}>{errors.url.message}</span>
                        }
                    </div> <br/>

                    <div>
                            <input disabled={Object.keys(errors).length>0} type="submit" value="REGISTER"></input>
                           <button type="button" onClick={() => reset()}>RESET</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
