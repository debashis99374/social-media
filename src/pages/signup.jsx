import {useState,useEffect,useContext} from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'


export default function Signup(){
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
        <form onSubmit={handleSignup}>
            <lable>First Name:</lable> 
            <input type='text' value={signupForm.firstName} onChange={(e)=>setSignupForm({...signupForm,firstName:e.target.value})} />
            <lable>last Name:</lable> 
            <input type='text' value={signupForm.lastName} onChange={(e)=>setSignupForm({...signupForm,lastName:e.target.value})} />
            <lable>Username:</lable> 
            <input type='text' value={signupForm.username} onChange={(e)=>setSignupForm({...signupForm,username:e.target.value})} />
            <lable>Password:</lable> 
            <input type='password' value={signupForm.password} onChange={(e)=>setSignupForm({...signupForm,password:e.target.value})} />
            <button type='submit'>Submit</button>
        </form>
       </div>
        </>
    )
}