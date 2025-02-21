import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const HomeUser = ({user, setUser,getUser ,setIsNewUser ,setNewUser }) => {
    // const [user, setUser]=useState([])
    useEffect(()=>{
        getUser();
      
    },[])
    // const getUser=()=>{
    //    axios.get("http://localhost:3000/result")
    //    .then((res)=>{
    //     setUser(res.data)


    //    })
    //    .catch((Error)=>{
    //     alert("something wronh with user")
    //     console.log(Error)

    //    })
    // }
    const deleteUser=(id)=>{
        axios.delete(`http://localhost:3000/result/${id}`).then((res)=>{
            getUser()
            alert("user delted")

        }).catch((Error)=>{
            alert("user not dleted due to error")

        })
    }
    const updateUser=(ele)=>{
        setNewUser(ele)
        setIsNewUser(false)
    }
  return (
    <div>
        <h2 style={{marginTop:"10px  ", textAlign:"center"}}>User Table</h2>
        { 
            user.length > 0 && <div style={{margin:"30px", width:"500px"}}> 
                
                <table className='table' frame="box" rules='all' cellPadding="10px" width={"100%"} >
                    <thead>
                          <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th colSpan={2}>Action</th>
                            
                          </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((ele,ind)=>{
                                return <tr key={"dara"+ind}>
                                    <td>{ele.name}</td>
                                    <td>{ele.city}</td>
                                    <td>
                                        <button onClick={()=>{updateUser(ele)}}>Edit</button>
                                        </td>
                                    <td>
                                        <button onClick={()=>{deleteUser(ele.id)}}>Delete</button>
                                        </td>
                                </tr>
                            
                            })
                                  
                        }

                    </tbody>

                </table>
            </div>
        }
    </div>
  )
}
