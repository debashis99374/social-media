import { useContext } from "react"
import { PostContext } from "../../context/postContext"
import './rightsideBar.css'
import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router-dom"

export default function RightsideBar(){
    const navigate=useNavigate()
    const {postData}=useContext(PostContext)
    const {userData,followUserHandler,unfollowUserHandler}=useContext(UserContext)
    return(
        <>
        <div className="rightsidebarDiv">
            <h4>WHO TO FOLLOW</h4>
            <div className="allUsersList">
                {userData.allUsers.map(el=>(
                    <li key={el._id}>
                        <div className="allusers-container">
                        <h4 onClick={()=>navigate(`/details/${el.username}`)}>{el.firstName} {el.lastName}</h4>
                        <p>@{el.username}</p>
                       {userData.user.following.find(ell=>ell.username===el.username)?<button onClick={()=>unfollowUserHandler(el._id)}>UNFOLLOW</button>:<button onClick={()=>followUserHandler(el._id)}>FOLLOW+</button>}
                        </div>
                    </li>
                ))}
            </div>

        </div>
        
        </>
    )
}