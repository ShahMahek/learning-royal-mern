import React from 'react'

export const Home = ({t,ind,ff,users}) => {
    console.log("Home props....",t)
  return (
    <div className='content'>
        <h1>Home Component</h1>
        <h2>Title ={t}</h2>
        <h2>Ind ={ind}</h2>
        <h2>{ff.Mg}</h2>
       
        {
            users.map((user)=>{
                return(
                    <ul>
                      <li>{user.id}</li>
                      <li>{user.name}</li>
                    </ul>
                  )
            })
        }
        
       
    </div>
  )
}
