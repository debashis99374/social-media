import {NavLink} from 'react-router-dom'
import { BsRocket,BsBookmark } from "react-icons/bs";
import '../css/leftsideBar.css'

export default function LeftsideBar(){
    return(
        <>
        <div className="leftsidebarDiv">
            <nav>
        <NavLink exact to="/" className="nav-link">
        <BsRocket className="nav-icon" />
        <span className="nav-text">EXPLORE</span>
      </NavLink>
      <NavLink to="/bookmark" className="nav-link">
        <BsBookmark className="nav-icon" />
        <span className="nav-text">BOOKMARK</span>
      </NavLink>
      <button>CREATE+</button>
    </nav>
            

        </div>

        </>
    )
}