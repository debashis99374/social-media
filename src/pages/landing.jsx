import {Link, useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import "../css/landing.css"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { BiShow,BiHide } from "react-icons/bi";
import { UserContext } from '../context/userContext'
export default function Landing(){
    const navigate=useNavigate()
    const {token,loginHandler,currentUser}=useContext(AuthContext)
   
    const [showPassword,setShowPassword]=useState(false)

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
      });

      const guestLogin={
        username:"adarshbalika",
        password:"adarshbalika123"

      }
      
      const handleLogin=(e)=>{
        e.preventDefault()
        loginHandler(loginForm.username,loginForm.password)
     
        
        
      }
      


      useEffect(() => {
        if (token) {
          navigate("/");
        }
      }, [token]);
    
    
    
    return(
        <>
        <div className="landing-main-container">
            <h4><span>Connect</span> Me</h4>
            <p>Here you can connect with great <span>People</span> around the <span>Globe</span></p>
<form  onSubmit={handleLogin} >
   <label htmlFor='user'>Username:</label>
   <input id='user' type="text" value={loginForm.username} onChange={(e)=>setLoginForm({...loginForm,username:e.target.value})} />
   <label>password:</label>
   
   <div className="password-input">
            <input type={showPassword ? "text" : "password"} value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
            <p onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <BiHide /> : <BiShow />}
            </p>
          </div>
   <button type='submit' >Log in</button> <br/>
    </form>
    <button onClick={()=>loginHandler(guestLogin.username,guestLogin.password)}>Guest Login</button>
            
            
  
            <p className="landing-main-container-p2">Don't have an account? <Link to="/signup">SignUp</Link></p>
        </div>
        </>
    )
}