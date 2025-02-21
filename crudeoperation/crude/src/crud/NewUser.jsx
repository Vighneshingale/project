import React, { useState } from 'react'
 import "./newusr.css"
import axios from 'axios'
export const NewUser = ({getUser,neuser,setNewUser , setIsNewUser, isnewUser}) => {
    // const[neuser , setNewUser]=useState({
    //     name:"",
    //     city:""
    // })
    const [errors, setErrors] = useState({ name: '', city: '' });

    const validate = () => {
      const newErrors = { name: '', city: '' };
      if (!neuser.name) newErrors.name = 'Name is required';
      if (!neuser.city || neuser.city === 'select city') newErrors.city = 'City is required';
      setErrors(newErrors);
      return !newErrors.name && !newErrors.city;
    };
    const addUser=()=>{
       if (validate()) { axios.post("http://localhost:3000/result",neuser)
        .then((res)=>{
            console.log(res.data)
            getUser()
            setNewUser({
                name:"",
                city:""

            })

        })
        .catch((Error)=>{
            alert("something wrong with newuser")
            console.log(Error)
        })
    }

    }
    const updateUser=()=>{
        if (validate()) { axios.put(`http://localhost:3000/result/${neuser.id}`,neuser)
        .then(()=>{
            alert("userupdated")
            getUser()
            setNewUser({
                name:"",
                city:""
            })
            setIsNewUser(true)

        }).catch((error)=>{
            alert("somthing is wrong")

        })
    }
    }
  return (
    <div className='new'>
        
            <h2>{isnewUser ? "newUser " :"UpdateUser"}</h2>
            
            <input value={neuser.name} className='form-control' type="text"  onChange={(e)=>{setNewUser({...neuser,name:e.target.value})}}/>  
            {errors.name && <span className="error">{errors.name}</span>}
            
            
            <select value={neuser.city}  onChange={(e)=>{setNewUser({...neuser,city:e.target.value})}}>
                <option>select city</option>
                <option >Pune</option>
                <option >Mumbai</option>
                <option >Delhi</option>
                <option >Chenai</option>
            </select>
            {errors.city && <span className="error">{errors.city}</span>}
            
            <button onClick={isnewUser ? addUser : updateUser}>{isnewUser ? "newUser " :"UpdateUser"}</button>

        
    </div>
  )
}
