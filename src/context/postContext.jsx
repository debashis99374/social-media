import {createContext,useReducer,useEffect, useContext} from 'react'
import reducer from '../reducer'
import axios from 'axios'
import { AuthContext } from './authContext'

export const PostContext=createContext()
export  function PostProvider({children}){
    const {token}=useContext(AuthContext)
    const [postData,postDispatch]=useReducer(reducer,{
        allPosts:[],
       
    })


    
    
    
   

   

    async function getAllPosts(){
        try{
        const res=await fetch ("/api/posts")
        const dat= await res.json()
        postDispatch({type:"all-posts",payLoad:dat.posts})
        }catch(e){
            console.log(e)
        }
    }

    async function createPost(postData) {
      
        try {
          const response = await axios.post("/api/posts/",{postData}, {
            
            headers: {
              authorization: token,
              
            },
            
          });
          
          if(response.status===201){
            postDispatch({ type: "all-posts", payLoad: response.data.posts });
          }
          
         
        } catch (error) {
          console.log(error);
        }
      }
      const editPostHandler=async(postId,content)=>{
        try{
          const response=await axios.post(`/api/posts/edit/${postId}`,{ postData:{content} },{
            headers:{
              authorization: token,
            }
            
          })
          console.log(response)
          postDispatch({type:"all-posts",payLoad:response.data.posts})

        }catch(e){
          console.log(e)
        }
      }
      const deletePostHandler=async(postId)=>{
        try{
          const response=await axios.delete(`/api/posts/${postId}`,{
            headers:{
              authorization: token,
            }
          })
          console.log(response.data.posts)

          postDispatch({type:"all-posts",payLoad:response.data.posts})
          

        }catch(e){
          console.log(e)
        }
      }
      const likePostHandler=async(postId)=>{
        try{
          const response=await axios.post(`/api/posts/like/${postId}`,{},{
            headers:{
              authorization: token,
            }
          })
          postDispatch({type:"like-post",payLoad:response.data.posts})

        }catch(e){
          console.log(e)
        }

      }


      const dislikePostHandler=async(postId)=>{
        try{
          const response=await axios.post(`/api/posts/dislike/${postId}`,{},{
            headers:{
              authorization: token,
            }
          })

          postDispatch({type:"dislike-post",payLoad:response.data.posts})

        }catch(e){
          console.log(e)
        }
      }

   
    
   
    

   
    
    useEffect(()=>{
        getAllPosts();
        
    },[])



    return(
        <PostContext.Provider value={{postData,postDispatch,createPost,likePostHandler,dislikePostHandler,deletePostHandler,editPostHandler}}>{children}</PostContext.Provider>
    )
}