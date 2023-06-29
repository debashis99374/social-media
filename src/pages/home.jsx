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



export default function Home() {
  const {postData,createPost,likePostHandler,dislikePostHandler}=useContext(PostContext)
  const {userData,addBookmarkHandler,removeBookmarkHandler}=useContext(UserContext)

    const [inputText,setinputText]=useState({content:''})
    const inputRef = useRef(null);

    const [trendy,setTrendy]=useState(false)
    const [sort,setSort]=useState(false)


    let filteredArr=postData.allPosts
    if(trendy){
      filteredArr=filteredArr.filter(el=>el.likes.likeCount>=30)
    }
  
  const handleInput=(e)=>{
    setinputText({...inputText,content:e.target.value})
  }
  const resetOnClick=()=>{
    setinputText({...inputText,content:""})
    inputRef.current.value=""
  }


 
  
  return (
    <div className="home">
      <NavBar/>
      <div className="homepage-container">
        <div className="comments-container">
          <input type="text" placeholder="Share your thoughts..." onChange={handleInput} ref={inputRef}/>
          <button onClick={()=>{createPost(inputText);resetOnClick();}} >POST</button>

        </div>
        <div className="homepage-container-filter-sort">
          <button onClick={()=>setTrendy(true)}>Trendy</button>
          <button >Recent</button>

        </div>
        <div className="allPosts-container">
          {filteredArr.map(el=>(
           
            <li>
              <h3> {userData.allUsers.find(ell=>ell.username===el.username).firstName}  {userData.allUsers.find(ell=>ell.username===el.username).lastName}</h3> <span style={{fontSize:"10px",position:"relative",top:"-1.1cm",right:"-3.4cm"}}>{el.createdAt}</span>
             <p>@{el.username}</p>
             <p>{el.content}</p> 
             {el.likes.likedBy.find(el=>el.username===userData.user.username)?<button onClick={()=>dislikePostHandler(el._id)}><AiFillHeart/></button>:<button onClick={()=>likePostHandler(el._id)}><AiOutlineHeart/></button>} <span style={{marginLeft:"-.5cm"}}>{el.likes.likeCount}</span>
             <button><AiOutlineComment/></button>
             <button><BsFillShareFill/></button>
            {userData.bookmarks.find(ell=>ell._id===el._id)?<button onClick={()=>{removeBookmarkHandler(el._id)}}><BsBookmarkFill/></button>:<button onClick={()=>addBookmarkHandler(el._id)} ><BsBookmark/></button>} 
             
              
            </li>
          ))}

        </div>

      </div>
      
    </div>
  );
}