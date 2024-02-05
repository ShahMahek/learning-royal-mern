import React, { useState } from 'react'
import { ListUser } from './ListUser';
import { UserReg } from './UserReg';

export const Users = (props) => {

    //var count = 0
    //var name ="";
    //var users = {}
    //setCount function ==> const setCount = ()=>{}
    
    const [count, setcount] = useState(0);

    // const [name, setname] = useState("")
    // const [user, setuser] = useState({})

    const increment =() =>{
        setcount(count+1);
    };

      // var users = [
  //   {
  //     id: 1,
  //     name: "amit",
  //     email: "amit@gmail.com",
  //     age: 23,
  //   },
  //   {
  //     id: 2,
  //     name: "raj",
  //     email: "raj@gmail.com",
  //     age: 24,
  //   },
  //   {
  //     id: 3,
  //     name: "akshit",
  //     email: "akshit@gmail.com",
  //     age: 24,
  //   },
  // ];

  var[users, setusers ] = useState([
    {
        id: 1,
        name: "Mahek",
        email: "mahek@gmail.com",
        age: 19,
      },
      {
        id: 2,
        name: "Hiten",
        email: "hiten@gmail.com",
        age: 20,
      },
       {
        id: 3,
        name: "Harsh",
        email: "harsh@gmail.com",
        age: 21,
      },
      {
        id: 4,
        name: "Jay",
        email: "jay@gmail.com",
        age: 22,
      },
  ]);

  const test =(name) =>{
    alert("test"+name);
  };

const deleteUser =(id) =>{
    console.log("delete user", id);
    console.log("before delete...users", users);

    users = users.filter((u)=>{
        //1!==3
        //2!==3
        //3!==3
        return u.id !== id;
    });

  console.log("after delete...users", users);
    //useState update...
  setusers(users)
};

const addUser = (user) => {
  console.log("add user", user);
  //push...
  // users = users.push(user);
  // setusers(users);
  //spread operator

  users = [...users,user]
  console.log("after add...users", users);
  setusers(users);
};

return (
    <div>
        <h1>Users Component</h1>
       {/*} <h3>Count -- {count}</h3>
        <button onClick={()=>increment()} className='btn btn-success'>Increment</button><br></br><br></br>*/}

        <UserReg addUser={addUser}></UserReg>

        {/*<h1>Users -- {props.title}</h1>*/}
        {/* <button onClick={()=>{test()}}>Test</button> */}
        <ListUser
            users={users}
            title={props.title}
            test ={test}
            deleteUser={deleteUser}
      ></ListUser>
    </div>
  )
}
