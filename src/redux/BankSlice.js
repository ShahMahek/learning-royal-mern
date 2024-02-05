import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;

const bankSlice = createSlice({
    name:"bank",
    initialState,
    reducers:{
        withdraw:(state,action) =>{
            return state = state - parseInt(action.payload)
        },
        deposite:(state,action) =>{
            return state = state +  parseInt(action.payload)
            
        }
    }
})

export const {withdraw,deposite} = bankSlice.actions;
export default bankSlice.reducer;