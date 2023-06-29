import {NavLink, useNavigate} from 'react-router-dom'
import {AiOutlineHome,AiOutlineSearch} from "react-icons/ai"
import { BiMoon } from "react-icons/bi";
import "../css/navbar.css"
import LeftsideBar from '../components/leftsideBar';
import RightsideBar from '../components/RightsideBar/rightsideBar';

import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import SearchModal from '../components/searchModal/searchModal';

export default function NavBar(){
    const navigate=useNavigate()
    const [searchInput,setSearchInput]=useState("")
    const [searchModalOpen,setSearchModalOpen]=useState(false)
    
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
         <input type='text' placeholder='search...' value={searchInput} onChange={(e)=>{setSearchInput(e.target.value);setSearchModalOpen(true)}}/>
                </div>
                <div className='navbar-right'>
                    <div className='userdiv'>
                    <img src={userData.allUsers?.find(el=>el.username===userData.user.username)?.avatar} onClick={()=>navigate("/profile")}/>
                    <span onClick={()=>navigate("/profile")}>{capitalizeFirstLetter(userData.user.firstName)} {capitalizeFirstLetter(userData.user.lastName)}</span>
                    </div>
                </div>


            </div>
            
        </div>
       
        <LeftsideBar/>
        <RightsideBar/>
        {searchModalOpen&&(<SearchModal searchInput={searchInput} setSearchModalOpen={setSearchModalOpen}/>)} 
        </>
        
    )
}