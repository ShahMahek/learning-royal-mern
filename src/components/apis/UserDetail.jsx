
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {
    const [user,setuser] = useState({})
    const id =useParams().id
    const fetchUserData = async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/"+id)
        console.log(res);
        console.log(res.status);
        console.log(res.data);
        setuser(res.data.data);
    }
    useEffect(()=>{
        fetchUserData();
    },[])
  return (
    <div>
        <h1>UserDetail</h1>

    <h2>Name = {user.name}</h2>
    <h2>Email = {user.email}</h2>
    <h2>Age = {user.age}</h2>
    </div>
    
  )
}
