import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { PostContext } from "../context/postContext";
import { AuthContext } from "../context/authContext";

import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"
import NavBar from "./navbar";

import "../css/bookmark.css"

export default function BookMark(){
    const {postData,createPost,likePostHandler,dislikePostHandler,deletePostHandler}=useContext(PostContext)
  const {userData,addBookmarkHandler,removeBookmarkHandler}=useContext(UserContext)
  
    
    return(
        <div className="bookmark">
            <NavBar/>
            {userData.bookmarks.length<=0?(<h3 className="empty-bookmark">This Page Is Empty..</h3>):(
                <div className="container-bookmark">
                
                <h3>BOOKMARKS:</h3>
                 <div className="bookmark-list">
     
         {userData.bookmarks.map(el=>(
             <li>
                 <h3> {userData.allUsers.find(ell=>ell.username===el.username).firstName}  {userData.allUsers.find(ell=>ell.username===el.username).lastName}</h3>
                 <p>@{el.username}</p>
                 <p>{el.content}</p>
                
              <button><AiOutlineComment/></button>
              <button><BsFillShareFill/></button>
             {userData.bookmarks.find(ell=>ell._id===el._id)?<button onClick={()=>{removeBookmarkHandler(el._id)}}><BsBookmarkFill/></button>:<button onClick={()=>addBookmarkHandler(el._id)} ><BsBookmark/></button>} 
             </li>
         ))}
         </div>
         </div>
         
            )}
            </div>
            
    )
}