import {NavLink, useNavigate} from 'react-router-dom'
import {AiOutlineHome,AiOutlineSearch} from "react-icons/ai"
import { BiMoon } from "react-icons/bi";
import "../css/navbar.css"
import LeftsideBar from '../components/leftsideBar';
import RightsideBar from '../components/RightsideBar/rightsideBar';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export default function NavBar(){
    const navigate=useNavigate()
    const {currentUser}=useContext(AuthContext)
    const {userData}=useContext(UserContext)
    const capitalizeFirstLetter=(str)=>str.charAt(0).toUpperCase()+str.slice(1)
    return (
        <>
        <div className='navbar'>
            
            <div className='navbar-left'>
            <span>Connect </span> Me
            <div className='icons'>
                <nav>
               <NavLink className="NavLink" to='/'><AiOutlineHome/></NavLink> 
               <NavLink className="NavLink"><BiMoon/></NavLink> 
               </nav>
                </div>
                <div className="search">
         <AiOutlineSearch className='search-icon'/>
         <input type='text' placeholder='search...'/>
                </div>
                <div className='navbar-right'>
                    <div className='userdiv'>
                    <img src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000" onClick={()=>navigate("/profile")}/>
                    <span onClick={()=>navigate("/profile")}>{capitalizeFirstLetter(currentUser.firstName)} {capitalizeFirstLetter(currentUser.lastName)}</span>
                    </div>
                </div>


            </div>
            
        </div>
        <LeftsideBar/>
        <RightsideBar/>
        </>
        
    )
}