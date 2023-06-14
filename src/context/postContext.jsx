import {createContext,useReducer,useEffect} from 'react'
import reducer from '../reducer'

export const PostContext=createContext()
export  function PostProvider({children}){
    const [data,dispatch]=useReducer(reducer,{
        allPosts:[],
        allUsers:[]
    })

    async function getAllPosts(){
        try{
        const res=await fetch ("/api/posts")
        const dat= await res.json()
        dispatch({type:"all_posts",payLoad:dat.posts})
        }catch(e){
            console.log(e)
        }
    }
    async function getAllUsers(){
        try{
        const res=await fetch ("/api/users")
        const dat= await res.json()
        dispatch({type:"all_users",payLoad:dat.users})
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getAllPosts();
        getAllUsers();
    },[])



    return(
        <PostContext.Provider value={{data,dispatch}}>{children}</PostContext.Provider>
    )
}