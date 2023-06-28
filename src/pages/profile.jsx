import { useContext,useState } from "react"
import { AuthContext } from "../context/authContext"
import { PostContext } from "../context/postContext"
import { UserContext } from "../context/userContext"

import { AiOutlineHeart,AiFillHeart,AiOutlineComment } from "react-icons/ai";
import { BsBookmark,BsBookmarkFill,BsFillShareFill } from "react-icons/bs"
import NavBar from "./navbar";

import "../css/profile.css"
import PostModal from "../components/postModal/postModal";

export default function Profile(){
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [element,setElement]=useState({})

    const {postData,createPost,likePostHandler,dislikePostHandler,deletePostHandler}=useContext(PostContext)
  const {userData,addBookmarkHandler,removeBookmarkHandler}=useContext(UserContext)
  const {currentUser}=useContext(AuthContext)
    const capitalizeFirstLetter=(str)=>str.charAt(0).toUpperCase()+str.slice(1)
    const handleEdit=(el)=>{
        setElement(el)
        setIsModalOpen(true)
        

    }

    
    return(
        <div className="profile">
            <NavBar/>

            <div className="container-profile">
                <img/>
                <h3> {capitalizeFirstLetter(currentUser.firstName)} {capitalizeFirstLetter(currentUser.lastName)} </h3>
                <p className="container-profile-p1">@{currentUser.username}</p>
                <button>EDIT</button>
                <p className="container-profile-p2">Posts:-</p>
                <div className="container-profile-posts">
                    {postData.allPosts.filter(el=>el.username===currentUser.username).map(el=>(
                        <li>
                            <p>{el.content}</p>
                            {el.likes.likedBy.find(el=>el.username===currentUser.username)?<button onClick={()=>dislikePostHandler(el._id)}><AiFillHeart/></button>:<button onClick={()=>likePostHandler(el._id)}><AiOutlineHeart/></button>} <span style={{marginLeft:"-.5cm"}}>{el.likes.likeCount}</span>
             <button><AiOutlineComment/></button>
             <button><BsFillShareFill/></button>
            {userData.bookmarks.find(ell=>ell._id===el._id)?<button onClick={()=>{removeBookmarkHandler(el._id)}}><BsBookmarkFill/></button>:<button onClick={()=>addBookmarkHandler(el._id)} ><BsBookmark/></button>} 
                     <button onClick={()=>deletePostHandler(el._id)}>Delete</button>
                     <button onClick={()=>{handleEdit(el)}}>Edit</button>  
                        </li>
                    ))}


                </div>

            </div>
           {isModalOpen&&(<PostModal setIsModalOpen={setIsModalOpen} element={element}/>)} 
        </div>
    )
}