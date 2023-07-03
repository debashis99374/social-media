import {NavLink,useNavigate} from 'react-router-dom'
import { BsRocket,BsBookmark } from "react-icons/bs";
import '../css/leftsideBar.css'
import { useContext } from 'react';
import { PostContext } from '../context/postContext';

export default function LeftsideBar(){
  const {setOpenCreateBttn}=useContext(PostContext)
  const navigate=useNavigate()
    return(
        <>
        <div className="leftsidebarDiv">
            <nav>
        <NavLink exact to="/explore" className="nav-link">
        <BsRocket className="nav-icon" />
        <span className="nav-text">EXPLORE</span>
      </NavLink>
      <NavLink to="/bookmark" className="nav-link">
        <BsBookmark className="nav-icon" />
        <span className="nav-text">BOOKMARK</span>
      </NavLink>
      <button  onClick={()=>{setOpenCreateBttn(true);navigate('/')}}>CREATE+</button>
    </nav>
            
        
        </div>

        </>
    )
}