import React from 'react'
import { useSelector } from 'react-redux'


const Profile = () => {

   const user = useSelector(state => state.user.value)
 const textcolor = useSelector(state => state.theme.value)

  return (
    <div style={{color:textcolor.color}}>
        <h3>name : {user.name}</h3>
        <p>age : {user.age}</p>
    </div>
  )
}

export default Profile