import {NavLink,useNavigate} from 'react-router-dom'
import { BsRocket,BsBookmark } from "react-icons/bs";
import '../css/leftsideBar.css'
import { useContext } from 'react';
import { PostContext } from '../context/postContext';
import { UserContext } from '../context/userContext';

export default function LeftsideBar(){
  const {setOpenCreateBttn}=useContext(PostContext)
  const {darkMode,setdarkMode}=useContext(UserContext)
  const navigate=useNavigate()
    return(
        <>
        <div className="leftsidebarDiv" style={{color:darkMode?"white":"black" ,backgroundColor:darkMode?"black":"rgb(235, 253, 253)"}}>
            <nav>
        <NavLink exact to="/explore" className="nav-link" style={{color:darkMode?"white":"black" }}>
        <BsRocket className="nav-icon" />
        <span className="nav-text">EXPLORE</span>
      </NavLink>
      <NavLink to="/bookmark" className="nav-link" style={{color:darkMode?"white":"black" }}>
        <BsBookmark className="nav-icon" />
        <span className="nav-text">BOOKMARK</span>
      </NavLink>
      <button  onClick={()=>{setOpenCreateBttn(true);navigate('/')}}>CREATE+</button>
    </nav>
            
        
        </div>

        </>
    )
}