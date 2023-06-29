import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router-dom"


import "./searchModal.css"


export default function SearchModal({searchInput,setSearchModalOpen}){
    const navigate=useNavigate()
    const {userData}=useContext(UserContext)
    const searchedUserArr=userData.allUsers.filter(el=>el.username.toLowerCase().includes(searchInput.toLowerCase()))
    
    
    
    return(
        <div className="container-search-modal">

          {searchedUserArr.map(el=>(
            <li>
               <p className="container-search-modal-p" onClick={()=>{navigate(`/details/${el.username}`);setSearchModalOpen(false)}}>@{el.username}</p>
            </li>
          ))}
        </div>
    )
}