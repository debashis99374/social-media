import { useContext } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../context/postContext"
import { UserContext } from "../context/userContext"
import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"
import NavBar from "./navbar";
import '../css/userDetails.css'
import { AuthContext } from "../context/authContext";


export default function Details(){
    const {detailsEl}=useParams()
    
    const {postData,likePostHandler,dislikePostHandler}=useContext(PostContext)
    const {userData,addBookmarkHandler,removeBookmarkHandler,followUserHandler,unfollowUserHandler,darkMode}=useContext(UserContext)
    const details=postData.allPosts.filter(ell=>ell.username===detailsEl)
    const userDetails=userData.allUsers.find(el=>el.username===detailsEl)

    const handleAddFollower=(id)=>{
        const findEl=userData.allUsers.find(el=>el._id===id).followers.push(userData.user)

        return findEl
        
    }
    const handleRemoveFollower=(id)=>{
        const index=userData.allUsers.findIndex(el=>el._id===id)
        const updatedFollowers=userData.allUsers[index].followers.filter(el=>el._id !==userData.user._id)
        return userData.allUsers[index].followers=updatedFollowers
        
    }
    
    
    
    return(
        
       
        
        <div className="userDetails" >
             <NavBar/>
             <div className="container-user-details" style={{color:darkMode?"white":"black" ,backgroundColor:darkMode?"black":"rgb(235, 253, 253)"}}>
             <h3 className="container-user-posts-h" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}>{userDetails.firstName} {userDetails.lastName}</h3>
                <p className="container-user-posts-p1" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}>@{userDetails.username}</p>
                 {userData.user.following.find(el=>el.username===userData.allUsers.username)?<button onClick={()=>{unfollowUserHandler(userDetails._id);handleRemoveFollower(userDetails._id)}} className="container-user-posts-bttn-1" >Unfollow</button>:<button onClick={()=>{followUserHandler(userDetails._id);handleAddFollower(userDetails._id)}} className="container-user-posts-bttn-1" >Follow</button>} 
                <p className="container-user-posts-p2">Followers:{userDetails.followers.length}</p>
                <p className="container-user-posts-p3">Posts:-</p>
                <div className="container-user-posts">
        {details.map(el=>(
            <li>
               
                   
                
                <p className="container-user-posts-p4">{el.content}</p> 
                {el.likes.likedBy.find(el=>el.username===userData.user.username)?<button className="container-user-posts-bttn-w" onClick={()=>dislikePostHandler(el._id)} style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiFillHeart/></button>:<button className="container-user-posts-bttn-w" onClick={()=>likePostHandler(el._id)} style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiOutlineHeart/></button>} <span className="container-user-posts-span" >{el.likes.likeCount}</span>
             <button className="container-user-posts-bttn-w" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><AiOutlineComment/></button>
             <button className="container-user-posts-bttn-w" style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsFillShareFill/></button>
             {userData.bookmarks.find(ell=>ell._id===el._id)?<button className="container-user-posts-bttn-w" onClick={()=>{removeBookmarkHandler(el._id)}} style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsBookmarkFill/></button>:<button className="container-user-posts-bttn-w" onClick={()=>addBookmarkHandler(el._id)}  style={{backgroundColor:darkMode?"black":"" ,color:darkMode?"white":""}}><BsBookmark/></button>} 
                
                
            </li>
        ))}
        </div>
        </div>
        </div>
        
    )
}