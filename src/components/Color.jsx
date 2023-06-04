import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'

const Color = () => {
const dispatch = useDispatch()

const [colorval,setColorVal] = useState("")

  return (
    <div>
         <input onChange={(e) => setColorVal(e.target.value)}  type="text" placeholder='Type color to Change' />

         <button onClick={() => {dispatch(changeColor({color:colorval}))}}>Change</button>

    </div>
  )
}

export default Color