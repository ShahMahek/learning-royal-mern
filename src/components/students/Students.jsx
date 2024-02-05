import React, { useState } from 'react'
import { AppContext } from '../../context'
import { StudentList } from './StudentList'

export const Students = () => {

    const [students, setstudents] = useState([
        {
            id:1,
            name:"Mahek",
            age:20,
            marks:80
        },
        {   
            id:2,
            name:"Hiten",
            age:20,
            marks:90
        },
        {
            id:3,
            name:"Harsh",
            age:20,
            marks:70
        }
    ])
    //payload = object
    const studentDispacther =(action,payload)=>{
        switch(action)
        {
            case "ADD_STUDENT":
                setstudents([...students,payload])
            break;
            case "DELETE_STUDENT":
                // students = students.filter((student)=>student.id!=payload.id)
                // setstudents(students)
                setstudents(students.filter((student)=>student.id!=payload.id))
                break;
        
        }
    }
  return (
    <div>
        <AppContext.Provider value={{name:"Mahek",students,studentDispacther}}>
            <StudentList></StudentList>
        </AppContext.Provider>
    </div>
  )
}
