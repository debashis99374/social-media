import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"

import './profileModal.css'
import { UserContext } from "../../context/userContext"
import { PostContext } from "../../context/postContext"

export default function ProfileModal({setIsModalOpenProfile}){
    const {currentUser}=useContext(AuthContext)
    const {userData,userDispatch}=useContext(UserContext)
    const {postData}=useContext(PostContext)

    const [isBio,setIsBio]=useState("")
    const [url,setUrl]=useState("")
    const [isAvatar,setIsAvatar]=useState("")

    const avatarPictureLinks = [
        "https://i.ibb.co/jRVZ3Xp/avataaars-6.png",
        "https://i.ibb.co/4KNJz5D/avataaars-5.png",
        "https://i.ibb.co/Z8Sy1Gp/avataaars-4.png",
        "https://i.ibb.co/2nFm3P3/avataaars-3.png",
        "https://i.ibb.co/VTCJfQb/avataaars.png",
        "https://i.ibb.co/Ntbw7Lb/avataaars-2.png",
      ];

    const capitalizeFirstLetter=(str)=>str.charAt(0).toUpperCase()+str.slice(1)
    const handleProfileEdit=()=>{
        const index=userData.allUsers.findIndex(el=>el.username===currentUser.username)
        const newObj={...userData.allUsers[index],bio:isBio,portfolio_link:url,avatar:isAvatar}
        console.log(newObj)
        
        userDispatch({type:"all-users"})
        
        


        setIsModalOpenProfile(false)

    }
    return(
        <div className="container-profile-editModal">

            <h2>{capitalizeFirstLetter(currentUser.firstName)} {capitalizeFirstLetter(currentUser.lastName)}</h2>
            <p>Choose Your Avatar:</p>
            <div className="container-profile-editModal-images-link">
                
            {avatarPictureLinks.map(el=>(
                <li >
                    <img className="container-profile-editModal-images" value={el} src={el} onClick={(e)=>setIsAvatar(e.target.value)} alt="profile pic"/>
                </li>
            ))}
            </div>
            <p>Bio:</p>
            <input placeholder="bio.." value={isBio} onChange={(e)=>setIsBio(e.target.value)}/>
            <p>Portfolio URL: </p>
            <input placeholder="URL..." value={url} onChange={(e)=>setUrl(e.target.value)}/> <br/>
            
            
            <button onClick={()=>{handleProfileEdit();}}>Save</button>
            <button onClick={()=>setIsModalOpenProfile(false)}>Close</button>


        </div>

    )
}