import {  useContext,useEffect,useState } from "react"
import { PostContext } from "../context/postContext"
import { UserContext } from "../context/userContext"
import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"

import "../css/explore.css"
import NavBar from "./navbar";




export default function Explore(){
    const {postData,likePostHandler,dislikePostHandler}=useContext(PostContext)
    const {userData,addBookmarkHandler,removeBookmarkHandler,darkMode,setdarkMode}=useContext(UserContext)

   
    

    return(
       <div className="explore">
        

   <NavBar/>
        <div className="explore-page-container" style={{color:darkMode?"white":"black" ,backgroundColor:darkMode?"black":"rgb(235, 253, 253)"}} >
           <div className="allPosts-explore-page">
            {postData.allPosts.map(el=>(
                <li>
                   <h3 style={{color:darkMode?"white":""}}> {userData.allUsers.find(ell=>ell.username===el.username).firstName}  {userData.allUsers.find(ell=>ell.username===el.username).lastName}</h3>

                    
                   <p>@{el.username}</p>
                   <p>{el.content}</p>
                   {el.likes.likedBy.find(el=>el.username===userData.user.username)?<button onClick={()=>dislikePostHandler(el._id)} className="allPosts-explore-page-bttn" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiFillHeart/></button>:<button onClick={()=>likePostHandler(el._id)} className="allPosts-explore-page-bttn" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiOutlineHeart/></button>} <span className="allPosts-explore-page-span1" >{el.likes.likeCount}</span>
             <button className="allPosts-explore-page-bttn" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiOutlineComment/></button>
             <button className="allPosts-explore-page-bttn" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsFillShareFill/></button>
             {userData.bookmarks.find(ell=>ell._id===el._id)?<button onClick={()=>{removeBookmarkHandler(el._id)}} className="allPosts-explore-page-bttn" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsBookmarkFill/></button>:<button onClick={()=>addBookmarkHandler(el._id)} className="allPosts-explore-page-bttn" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsBookmark/></button>} 

                </li>
            ))}
           </div>
        </div>

        

       </div>
    )
}