
import { configureStore } from '@reduxjs/toolkit';
import LoginFormReducer from './LoginFormSlice'
import MoneyBalanceReducer from './MoneyBalancerSlice'
export const Store = configureStore({
    reducer:{
        Login:LoginFormReducer,
        MoneyBalancer:MoneyBalanceReducer

    }
   
})