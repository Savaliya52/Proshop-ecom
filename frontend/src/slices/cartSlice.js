import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):{cartItems:[]};

const cartSlice = createSlice ({
    name:"cart",
    initialState,
    reducers :{
        addToCart: () => {

        }
    }

})

export default cartSlice.reducer;