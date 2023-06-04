import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user';


const Login = () => {

const dispatch = useDispatch();

  return (
    <div>
        <button style={{cursor:"pointer"}} onClick={() => {dispatch(login({name:"shoaib",age:"22"}))}}>Login</button>
        <button style={{cursor:"pointer"}} onClick={() => {dispatch(logout())}}>Logout</button>


    </div>
  )
}

export default Login