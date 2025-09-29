
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    BalanceMoney: 2000,
    cart: {},
    currencyDetails :[
    { id: 1, image: "https://tse4.mm.bing.net/th/id/OIP.HazrcUbxDFtnxR6WyP7XpAHaDw?pid=Api&P=0&h=180", price: 10, country: "India" },
    { id: 2, image: "https://tse4.mm.bing.net/th/id/OIP.87zCK4GpTJCLTxaeSiZgkAHaDh?pid=Api&P=0&h=180", price: 20, country: "India" },
    { id: 3, image: "https://tse2.mm.bing.net/th/id/OIP.ThifMFFP44UyePA7dJL8rgHaDT?pid=Api&P=0&h=180", price: 50, country: "India" },
    { id: 4, image: "https://tse2.mm.bing.net/th/id/OIP.sALAq3uVvWYTPFT0NkWUWAHaDc?pid=Api&P=0&h=180", price: 100, country: "India" },
    { id: 5, image: "https://tse3.mm.bing.net/th/id/OIP.8Mi24fYOCZDSgV3CxejXzAHaFj?pid=Api&P=0&h=180", price: 500, country: "India" }
  ]
};

const MoneyBalancerSlice = createSlice({
    name: "MoneyBalancer",
    initialState,
    reducers: {
        addCartMoney: (state, action) => {
            const { id, price } = action.payload;
            if (state.BalanceMoney >= price) {
                state.BalanceMoney -= price;
                state.cart[id] = (state.cart[id] || 0) + 1;
            } else {
                alert("Insufficient Balance, please add money");
            }

        },
        removeCartMoney: (state, action) => {
            const { id, price } = action.payload;
            if (state.cart[id] > 0) {
                state.BalanceMoney += price;
                state.cart[id] -= 1;
            }  
            
        },
    },
});

export const { addCartMoney, removeCartMoney } = MoneyBalancerSlice.actions;
export default MoneyBalancerSlice.reducer;
