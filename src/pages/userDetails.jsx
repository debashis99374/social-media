import { useContext } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../context/postContext"
import { UserContext } from "../context/userContext"
import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"
import NavBar from "./navbar";
import '../css/userDetails.css'


export default function Details(){
    const {detailsEl}=useParams()
    const {postData}=useContext(PostContext)
    const {userData}=useContext(UserContext)
    const details=postData.allPosts.filter(ell=>ell.username===detailsEl)
    const userDetails=userData.allUsers.find(el=>el.username===detailsEl)
    
    
    
    return(
        
       
        
        <div className="userDetails">
             <NavBar/>
             <div className="container-user-details">
                <div className="container-user-posts">
        {details.map(el=>(
            <li>
               
                    <h3 className="container-user-posts-h">{userDetails.firstName} {userDetails.lastName}</h3>
                <p className="container-user-posts-p1">@{el.username}</p>
                <button className="container-user-posts-bttn-1">Follow</button>
                <p className="container-user-posts-p2">Followers:</p>
                <p className="container-user-posts-p3">Posts:-</p>
                
                <p className="container-user-posts-p4">{el.content}</p> 
                <button className="container-user-posts-bttn-w"><AiOutlineHeart/></button>
             <button className="container-user-posts-bttn-w"><AiOutlineComment/></button>
             <button className="container-user-posts-bttn-w"><BsFillShareFill/></button>
             <button className="container-user-posts-bttn-w"><BsBookmark/></button>
                
                
            </li>
        ))}
        </div>
        </div>
        </div>
        
    )
}