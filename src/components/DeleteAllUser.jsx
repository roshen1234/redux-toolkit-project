import React from "react";
import { deleteUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";


 const DeleteAllUser = () => {
    const dispatch=useDispatch()
    const deleteAll=()=>{
        
        dispatch(deleteUser())
    }
  return <button onClick={()=>{deleteAll()}}>Delete all</button>;
};

export default DeleteAllUser