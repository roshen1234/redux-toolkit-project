import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
      addUser(state,action){
        state.push(action.payload)
        // console.log(action.payload)
      },
      removeUser(state,action){
        // console.log("hi"+ action.payload)
        // state.pop(action.payload)
        state.splice(action.payload,1)
      },
      deleteUser(state,action){
        //  console.log("hi")
        return [];
      },
    },

// when we create another slice and if we want to use the same function like deleteUser there then there is no need to make one more there inside the reducers we can call this userSlice from that Slice and use this reducer for this we use exreaReducer code given below there 
//     extraReducers(builders){
//  builders.addCase(userSlice.actions.deleteUser,()=>{
//     return [];
//  })
//     }


})
console.log(userSlice.actions)
export default userSlice.reducer

export const {addUser,removeUser,deleteUser}=userSlice.actions