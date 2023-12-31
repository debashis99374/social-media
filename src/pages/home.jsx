import { useContext, useState,useRef } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"
import "../css/home.css"

import "../css/home.css";

import NavBar from "./navbar";

import { PostContext } from "../context/postContext";
import { UserContext } from "../context/userContext";
import { AuthContext } from "../context/authContext";


import {  toast } from 'react-toastify';
import CreatePostModal from "../components/createpostModal/createpostmodal";



export default function Home() {
  const {postData,createPost,likePostHandler,dislikePostHandler,openCreateBttn,setOpenCreateBttn}=useContext(PostContext)
  const {userData,addBookmarkHandler,removeBookmarkHandler,darkMode}=useContext(UserContext)

    const [inputText,setinputText]=useState({content:''})
    const inputRef = useRef(null);

    const [trendy,setTrendy]=useState(false)
    const [recent,setRecent]=useState(false)
    


    let filteredArr=postData.allPosts
    if(trendy){
      filteredArr=filteredArr.filter(el=>el.likes.likeCount>=30)
    }
    if(recent){
      filteredArr=filteredArr.sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
    }
  
  const handleInput=(e)=>{
    setinputText({...inputText,content:e.target.value})
  }
  const resetOnClick=()=>{
    setinputText({...inputText,content:""})
    inputRef.current.value=""
  }


 
  
  return (
    <div className="home" >
      <NavBar />
      <div className="homepage-container" style={{color:darkMode?"white":"black" ,backgroundColor:darkMode?"black":"rgb(235, 253, 253)"}}>
        <div className="comments-container">
          <input type="text" placeholder="Share your thoughts..." onChange={handleInput} ref={inputRef}/>
          <button onClick={()=>{createPost(inputText);resetOnClick();}} >POST</button>

        </div>
        <div className="homepage-container-filter-sort">
          <button onClick={()=>setTrendy(true)}>Trendy</button>
          <button onClick={()=>setRecent(true)} >Recent</button>

        </div>
        <div className="allPosts-container">
          {filteredArr.map(el=>(
           
            <li>
              <h3> {userData.allUsers.find(ell=>ell.username===el.username).firstName}  {userData.allUsers.find(ell=>ell.username===el.username).lastName}</h3> <span className="allPosts-container-span1" >{el.createdAt}</span>
             <p className="allPosts-container-p1">@{el.username}</p>
             <p className="allPosts-container-p2">{el.content}</p> 
             {el.likes.likedBy.find(el=>el.username===userData.user.username)?<button onClick={()=>dislikePostHandler(el._id)} style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiFillHeart/></button>:<button onClick={()=>likePostHandler(el._id)}style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiOutlineHeart/></button>} <span className="allPosts-container-span2" >{el.likes.likeCount}</span>
             <button style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiOutlineComment/></button>
             <button style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsFillShareFill/></button>
            {userData.bookmarks.find(ell=>ell._id===el._id)?<button onClick={()=>{removeBookmarkHandler(el._id)}} style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsBookmarkFill/></button>:<button onClick={()=>addBookmarkHandler(el._id)}  style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsBookmark/></button>} 
             
              
            </li>
          ))}

        </div>

      </div>
      {openCreateBttn&&(<CreatePostModal/> )}
    </div>
  );
}