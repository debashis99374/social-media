import {useState,createContext,useEffect,useContext} from 'react'
import { PostContext } from './postContext'
 import axios from 'axios'
import { UserContext } from './userContext'


export const AuthContext=createContext()
export function AuthProvider({children}){
   
    const localstorageToken=JSON.parse(localStorage.getItem('userDetails'))
    const [token,setToken]=useState(localstorageToken?.token)
    const [currentUser,setCurrentUser]=useState(localstorageToken?.user)
   
    
   
    
   const loginInformation=async(username,password)=>await axios.post('/api/auth/login',{username, password})
   const signupInformation=async(firstName, lastName, username, password)=>await axios.post('/api/auth/signup',{firstName, lastName, username, password})
   console.log(token)
   console.log(currentUser)
   const loginHandler=async(username,password)=>{
    try{
        const {status,data:{foundUser,encodedToken}}=await loginInformation(username,password)
        if(status===200||status===201){
            localStorage.setItem(
                'userDetails',
                JSON.stringify({user:foundUser,token:encodedToken})
            )
            
            console.log(foundUser,"data")
            setCurrentUser(foundUser)
           
            setToken(encodedToken)
            
        }
       } catch(e){
        console.log(e)
    }
}
const signupHandler=async(firstName, lastName, username, password)=>{
    try{
        const {status,data:{createdUser,encodedToken}}=await signupInformation(firstName, lastName, username, password)
        if(status===200||status===201){
            localStorage.setItem(
                'userDetails',
                JSON.stringify({user:createdUser,token:encodedToken})
            )
           
            setCurrentUser(createdUser)
            setToken(encodedToken)
            
        }

    }catch(e){
        console.log(e)
    }
}
const logoutHandler=()=>{
    localStorage.removeItem('userDetails');
    setCurrentUser(null)
    setToken(null)
}
console.log(token)
   
    
   
    return(
<AuthContext.Provider  value={{loginHandler,signupHandler,logoutHandler,token,currentUser,setCurrentUser}}>{children}</AuthContext.Provider>
    )
    
}