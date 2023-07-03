import { useContext, useRef, useState } from "react"

import { PostContext } from "../../context/postContext"
import './createpostmodal.css'
export default function CreatePostModal({}){
    
    const {createPost,setOpenCreateBttn}=useContext(PostContext)
    const [inputText,setinputText]=useState({content:""})
    const inputRef=useRef(null)
    

    const handleInput=(e)=>{
    setinputText({...inputText,content:e.target.value})
    }
    const resetOnClick=()=>{
     setinputText({...inputText,content:""})
     inputRef.current.value=""

    }
    return(
        <div className="container-createpost-modal">

            <textarea placeholder="Sheare your thoughts..." onChange={handleInput} ref={inputRef}/>
            <button onClick={()=>{ createPost(inputText);resetOnClick();setOpenCreateBttn(false)}}>CREATE</button>
            <button onClick={()=>setOpenCreateBttn(false)}>Close</button>

        </div>
    )
}