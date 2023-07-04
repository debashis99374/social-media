import {  useContext,useEffect,useState } from "react"
import { PostContext } from "../context/postContext"
import { UserContext } from "../context/userContext"
import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"

import "../css/explore.css"
import NavBar from "./navbar";




export default function Explore(){
    const {postData,likePostHandler,dislikePostHandler}=useContext(PostContext)
    const {userData,addBookmarkHandler,removeBookmarkHandler}=useContext(UserContext)

   
    

    return(
       <div className="explore">
        

   <NavBar/>
        <div className="explore-page-container">
           <div className="allPosts-explore-page">
            {postData.allPosts.map(el=>(
                <li>
                   <h3> {userData.allUsers.find(ell=>ell.username===el.username).firstName}  {userData.allUsers.find(ell=>ell.username===el.username).lastName}</h3>

                    
                   <p>@{el.username}</p>
                   <p>{el.content}</p>
                   {el.likes.likedBy.find(el=>el.username===userData.user.username)?<button onClick={()=>dislikePostHandler(el._id)} className="allPosts-explore-page-bttn"><AiFillHeart/></button>:<button onClick={()=>likePostHandler(el._id)} className="allPosts-explore-page-bttn"><AiOutlineHeart/></button>} <span className="allPosts-explore-page-span1" >{el.likes.likeCount}</span>
             <button className="allPosts-explore-page-bttn"><AiOutlineComment/></button>
             <button className="allPosts-explore-page-bttn"><BsFillShareFill/></button>
             {userData.bookmarks.find(ell=>ell._id===el._id)?<button onClick={()=>{removeBookmarkHandler(el._id)}} className="allPosts-explore-page-bttn"><BsBookmarkFill/></button>:<button onClick={()=>addBookmarkHandler(el._id)} className="allPosts-explore-page-bttn"><BsBookmark/></button>} 

                </li>
            ))}
           </div>
        </div>

        

       </div>
    )
}