import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice"

const store = new configureStore({
    reducer:{
        user:userReducer
    }
})


export default store