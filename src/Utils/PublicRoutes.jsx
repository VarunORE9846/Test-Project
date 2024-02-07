import React from "react";
import { Navigate } from "react-router-dom";
 
 
export default function PublicRoutes ({children}){
    const auth = localStorage.getItem('LoggedInUser');
 console.log(auth,"--auth");
    if(auth){
        return <Navigate to="/" replace/>
    }
    return children
}
 
