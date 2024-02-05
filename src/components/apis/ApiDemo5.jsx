import axios from 'axios'
import React from 'react'

export const ApiDemo5 = () => {


    const addUser = async () => {

        const user = {
            name:"Mahek",
            email:"mahek101@gmail.com",
            status:"active",
            gender:"female"
        }

        try{
            const res = await axios.post("https://gorest.co.in/public/v2/users",user,{
                headers:{
                    "Authorization":"Bearer ec7763731380b3bb494f2891281c954e86143a68679350b9665a070f430e64c8"
                }
            })
            console.log(res.data)           

        }catch(err){

                console.log("catch",err)

        }



    }


  return (
    <div>
        <button onClick={()=>{addUser()}}>Add User</button>
    </div>
  )
}