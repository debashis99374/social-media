import { useContext } from "react"
import { PostContext } from "../../context/postContext"
import './rightsideBar.css'

export default function RightsideBar(){
    const {data}=useContext(PostContext)
    return(
        <>
        <div className="rightsidebarDiv">
            <h4>WHO TO FOLLOW</h4>
            <div className="allUsersList">
                {data.allUsers.map(el=>(
                    <li key={el._id}>
                        <div className="allusers-container">
                        <h4>{el.firstName} {el.lastName}</h4>
                        <p>@{el.username}</p>
                        <button>FOLLOW+</button>
                        </div>
                    </li>
                ))}
            </div>

        </div>
        
        </>
    )
}