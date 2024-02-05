
import React, { useState } from "react";

export const UserReg = (props) => {

   // var user = {
  //     id:4,  or  Math.floor(Math.random()*100)  
  //     name:"ram",
  //     age:23,
  //     email:"ram@gmail.com"
  // }


  const [id, setid] = useState(10)
  const [name, setname] = useState("")
  const [email,setemail] = useState("")
  const [age,setage] = useState(0)


 {/*} const idHandler = (event)=>{
    console.log(event);
    console.log(event.target.value)
    setid(event.target.value)
}*/}

  const submitHandler  = (event)=>{

    event.preventDefault(); // to prevent the default behaviour of the form
    console.log("submit handler called");
    const generate = () =>{
      return Math.floor(Math.random()*100)
    }
    setid(generate)
    console.log(id);
    console.log(name);
    console.log(email);
    console.log(age);

    props.addUser({id:id,name:name,email:email,age:age})

}
  return (
    <div>
        <h1>Add User Component</h1>
        <form onSubmit={(event)=>{submitHandler(event)}}>
    
    <div>
      <label>Name</label>
        <input type="text" onChange={(e)=>setname(e.target.value)}></input>
    </div>

    <div>
      <label>Email</label>
        <input type="text" onChange={(e)=>setemail(e.target.value)}></input>
    </div>

    <div>
      <label>Age</label>
        <input type="number" onChange={(e)=>setage(e.target.value)}></input>
    </div>

      <input type="submit" value="submit"></input>
    </form>

        {/*<button onClick={()=>{props.addUser(user)}} className='btn btn-primary'>ADD</button>*/}
    </div>

   
  )
}
