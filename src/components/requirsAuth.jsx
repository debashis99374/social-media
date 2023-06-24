import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export default function RequirsAuth({children}){
    const {token}=useContext(AuthContext)
     return token ? children : <Navigate to="/login" />;
}