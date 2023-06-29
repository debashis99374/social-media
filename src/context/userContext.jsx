import {useContext,createContext,useState,useEffect,useReducer} from 'react'
import reducer from '../reducer'
import { AuthContext } from './authContext'
import { PostContext } from './postContext'

import axios from "axios";

import {  toast } from 'react-toastify';


export const UserContext=createContext()

export function UserProvider({children}){
    const {token,currentUser}=useContext(AuthContext)
    const {postData}=useContext(PostContext)
    const [userData,userDispatch]=useReducer(reducer,{
        allUsers:[],
        user:{...currentUser},
        bookmarks:[],

    })
    
    async function getAllUsers(){
        try{
        const res=await fetch ("/api/users")
        const dat= await res.json()
        userDispatch({type:"all-users",payLoad:dat.users})
        }catch(e){
            console.log(e)
        }
    }
    async function addBookmarkHandler(postId) {
      try {
        const response = await axios.post(`/api/users/bookmark/${postId}`,{}, {
          
          headers: {
            authorization: token,
          },
        });
        
       
        userDispatch({ type: "add-to-bookmark", payLoad: response.data.bookmarks });
        
      } catch (error) {
        console.log(error);
      }
    }
    const removeBookmarkHandler=async(postId)=>{
      try{
        const response=await axios.post(`/api/users/remove-bookmark/${postId}`,{},{
          headers:{
            authorization: token,
          }
        });
        userDispatch({type:"remove-bookmark",payLoad:response.data.bookmarks})

      }catch(e){
        console.log(e)
      }
    }

    const followUserHandler=async(followUserId)=>{
      try{
        const response=await axios.post(`/api/users/follow/${followUserId}`,{},{
          headers:{
            authorization: token,
          }
        })
        userDispatch({type:"user",payLoad:response.data.user})
        
    
   

      }catch(e){
        console.log(e)
      }
    }
    const  unfollowUserHandler=async(followUserId)=>{
      try{
        const response=await axios.post(`/api/users/unfollow/${followUserId}`,{},{
          headers:{
            authorization: token,
          }
        })
        userDispatch({type:"user",payLoad:response.data.user})

      }catch(e){
        console.log(e)
      }
    }
    const editUserHandler=async(userData)=>{
      try{
        const response=await  axios.post(`/api/users/edit`,{userData},{
          headers:{
            authorization: token,
          }
        })
        userDispatch({type:"all-users",payLoad:response.data.users})

      }catch(e){
        console.log(e)
      }
    } 
  
    useEffect(()=>{
        getAllUsers()
    },[])

    return(
        <UserContext.Provider value={{userData,userDispatch,addBookmarkHandler,removeBookmarkHandler,followUserHandler,unfollowUserHandler}}>{children}</UserContext.Provider>
    )
}
