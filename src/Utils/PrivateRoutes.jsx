import React from "react";
import { Navigate } from "react-router-dom";
 
 const PrivateRoutes = ({children}) =>{
    const auth = localStorage.getItem('LoggedInUser'); //if it is filled 
    if(!auth){
        return <Navigate to="/login" replace/>
    }
    return children
};
export default PrivateRoutes;
