import {Link, useNavigate} from 'react-router-dom'
import "../css/landing.css"
export default function Landing(){
    const navigate=useNavigate()
    return(
        <>
        <div className="landing-main-container">
            <h4><span>Connect</span> Me</h4>
            <p>Here you can connect with great <span>People</span> around the <span>Globe</span></p>
            <button onClick={()=>navigate("/login")}>Log in</button> <br/>
            <button onClick={()=>navigate("/login")}>Guest LogIn</button>
            <p>Don't have an account? <Link>SignUp</Link></p>
        </div>
        </>
    )
}