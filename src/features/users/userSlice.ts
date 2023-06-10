import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface User {
    id: string,
    name: string
}

const initialState:User[] = [
    {id: '0', name: 'LauPerez'},
    {id: '1', name: 'JuliPerez'},
    {id: '2', name: 'EderPerez'}
]

export const counterSlice = createSlice({
    name:'users',
    initialState,
    reducers: {   }
})

//export const {} = counterSlice.actions;

export const selectAllUsers  = (state: RootState) => state.users
export default counterSlice.reducer;