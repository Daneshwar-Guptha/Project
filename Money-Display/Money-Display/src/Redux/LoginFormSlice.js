import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:"",
    email:"",
    password:"",
}

const LoginFormSlice= createSlice({
    name:"loginForm",
    initialState,
    reducers:{
        setName :(state,action)=>{
            state.name=action.payload;
        },
        setEmail:(state,action)=>{
            state.email= action.payload;

        },
        setPassword :(state,action)=>{
            state.password = action.payload;
        }

    }
    

})
export const {setName,setEmail,setPassword} = LoginFormSlice.actions;
export default LoginFormSlice.reducer;