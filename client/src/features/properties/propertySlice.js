import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    properties: [],
    property:{},
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:''
}

export const propertySlice = createSlice({
    name: "property",
    initialState: initialState,
    reducers:{
        reset: (state)=> initialState
    },
    extraReducers:(builders)=>{},
});

export const {reset} = propertySlice.actions;
export default propertySlice.reducer;