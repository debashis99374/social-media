import {useState,useEffect,useContext} from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate,Link } from 'react-router-dom'
import { BiShow,BiHide } from "react-icons/bi";
import "../css/signUp.css"


export default function Signup(){
    const [showPassword,setShowPassword]=useState(false)
    const {signupHandler,token}=useContext(AuthContext)
    const navigate=useNavigate()
    const [signupForm,setSignupForm]=useState({
        firstName:"",
        lastName:"",
        username:"",
        password:""
    })
    const handleSignup=(e)=>{
        e.preventDefault();
        signupHandler(signupForm.firstName,signupForm.lastName,signupForm.username,signupForm.password)
    }
    useEffect(()=>{
        if(token){
           navigate("/")
        }
    },[token])
    return(
        <>
       <div className='container-signup'>
        <h3>Sign Up</h3>
        <form onSubmit={handleSignup}>
            <lable>First Name:</lable> 
            <input type='text' value={signupForm.firstName} onChange={(e)=>setSignupForm({...signupForm,firstName:e.target.value})} />
            <lable>last Name:</lable> 
            <input type='text' value={signupForm.lastName} onChange={(e)=>setSignupForm({...signupForm,lastName:e.target.value})} />
            <lable>Username:</lable> 
            <input type='text' value={signupForm.username} onChange={(e)=>setSignupForm({...signupForm,username:e.target.value})} />
            <lable>Password:</lable> 
            <div className="password-input">
            <input type={showPassword?"text":"password"} style={{width:"95%",height:"18px"}} value={signupForm.password} onChange={(e)=>setSignupForm({...signupForm,password:e.target.value})} />
             <p onClick={()=>setShowPassword(!showPassword)}>
               {showPassword?<BiHide/>:<BiShow/>}
             </p>
            </div>
           
            <button type='submit'>Submit</button>
        </form>
        <p>Already a user? <Link to='/login'>Log In</Link> </p>
       </div>
        </>
    )
}