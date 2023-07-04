import { useContext, useState } from "react"
import { PostContext } from "../../context/postContext"
import './rightsideBar.css'
import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router-dom"

export default function RightsideBar(){
    const navigate=useNavigate()
    const {postData}=useContext(PostContext)
    const {userData,followUserHandler,unfollowUserHandler,darkMode,setdarkMode}=useContext(UserContext)
    const [showMenu,setShowMenu]=useState(false)
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
        <>
        <div className={`rightsidebarDiv ${showMenu?"show":""}`} style={{color:darkMode?"white":"black" ,backgroundColor:darkMode?"black":"rgb(235, 253, 253)"}}>
            <h4 style={{color:darkMode?"white":"black" }}>WHO TO FOLLOW</h4>
            <div className="allUsersList">
                {userData.allUsers.map(el=>(
                    <li key={el._id}>
                        <div className="allusers-container">
                        <h4 onClick={()=>navigate(`/details/${el.username}`)}>{el.firstName} {el.lastName}</h4>
                        <p>@{el.username}</p>
                       {userData.user.following.find(ell=>ell.username===el.username)?<button onClick={()=>{unfollowUserHandler(el._id);handleRemoveFollower(el._id)}} style={{backgroundColor:darkMode?"black":"" }}>UNFOLLOW</button>:<button onClick={()=>{followUserHandler(el._id);handleAddFollower(el._id)}} style={{backgroundColor:darkMode?"black":"" }}>FOLLOW+</button>}
                        </div>
                    </li>
                ))}
            </div>

        </div>
        <button className={`hamburger ${showMenu ? "show" : ""}`} onClick={()=>setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        </>
    )
}