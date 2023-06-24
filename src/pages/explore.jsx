import { useCallback, useContext } from "react"
import { PostContext } from "../context/postContext"
import { UserContext } from "../context/userContext"
import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"

import "../css/explore.css"
import NavBar from "./navbar";


export default function Explore(){
    const {postData}=useContext(PostContext)
    const {userData}=useContext(UserContext)
    

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
             <button className="allPosts-explore-page-bttn"><AiOutlineHeart/></button>
             <button className="allPosts-explore-page-bttn"><AiOutlineComment/></button>
             <button className="allPosts-explore-page-bttn"><BsFillShareFill/></button>
             <button className="allPosts-explore-page-bttn" ><BsBookmark/></button>

                </li>
            ))}
           </div>
        </div>

       </div>
    )
}