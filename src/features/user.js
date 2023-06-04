import {createSlice} from '@reduxjs/toolkit'



export const userSlice = createSlice({
     name:"user",
     initialState:{value:{name:"",age:""}},
     reducers:{
        login:(state,action) => {
            state.value = action.payload
        },

        logout:(state,action) => {
            state.value = {name:"",age:""}
        }
     }
})

export  const {login,logout} = userSlice.actions

export default userSlice.reducer