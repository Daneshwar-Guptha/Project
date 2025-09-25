
import { configureStore } from '@reduxjs/toolkit';
import LoginFormReducer from './LoginFormSlice'
export const Store = configureStore({
    reducer:{
        Login:LoginFormReducer
    }
   
})