import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{  // state to change state after initial value     // actions se milta hai payload
        login:(state ,action)=>{
            state.status = true;
            state.userData = action.payload;
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
        }
    }
})


export const { login, logout} = authSlice.actions

export default authSlice.reducer;