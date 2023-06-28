import { useContext, useState } from "react"
import { PostContext } from "../../context/postContext"

import "./postModal.css"

export default function PostModal({setIsModalOpen,element}){
    const [editedText,setEditedText]=useState("")
    const {postData,editPostHandler}=useContext(PostContext)
    //const post=postData.allPosts.find(el=>el._id===id)
    console.log(editedText)
 const handleEdit=()=>{
    editPostHandler(element._id,editedText)
    setIsModalOpen(false)



 }
 const resetOnClick=()=>{
    setEditedText("")
 }
    
   
    return(
       
       <div className="container-Modal-Editpost">
        <h4>Edit</h4>
        <textarea defaultValue={element.content} name="content" onChange={(e)=>setEditedText(e.target.value)} />
        <button onClick={()=>{handleEdit();resetOnClick()}}>Save</button>
        <button onClick={()=>setIsModalOpen(false)}>Close</button>
       </div>
       
    )
}