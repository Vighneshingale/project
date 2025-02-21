import React from 'react'
import { NewUser } from './NewUser'
import { HomeUser } from './HomeUser'
import axios from 'axios'
import { useState } from 'react'
export const MainUser = () => {
    const [user, setUser]=useState([])
    const[neuser , setNewUser]=useState({
            name:"",
            city:""
        })
    const[isnewUser, setIsNewUser]=useState(true)

    const getUser=()=>{
        axios.get("http://localhost:3000/result")
        .then((res)=>{
         setUser(res.data)
 
 
        })
        .catch((Error)=>{
         alert("something wronh with user")
         console.log(Error)
 
        })
     }
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        <NewUser getUser={getUser} neuser={neuser} setNewUser={setNewUser} isnewUser={isnewUser} setIsNewUser={setIsNewUser} />
        <HomeUser getUser={getUser} setUser={setUser} user={user} setNewUser={setNewUser} setIsNewUser={setIsNewUser} />
    </div>
       
  )
}
