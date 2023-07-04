
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Landing from './pages/landing';
import NavBar from './pages/navbar';
import LeftsideBar from './components/leftsideBar';
import RightsideBar from './components/RightsideBar/rightsideBar';
import BookMark from './pages/bookmark';
import Explore from './pages/explore';
import Signup from './pages/signup';
import RequirsAuth from './components/requirsAuth';
import Details from './pages/userDetails';
import Profile from './pages/profile';

import { useContext, useEffect,useState } from 'react';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BallTriangle } from  'react-loader-spinner'
import { UserContext } from './context/userContext';





function App() {
  const [isLoading,setIsLoading]=useState(true)
  const {darkMode,setdarkMode}=useContext(UserContext)
  useEffect(()=>{
setTimeout(()=>{
  setIsLoading(false)
},2000)
  },[])
  return (
   
    <div className="App"
    style={{color:darkMode?"white":"black" ,backgroundColor:darkMode?"black":"rgb(235, 253, 253)"}}
    >
      {isLoading&&(<BallTriangle
  height={100}
  width={100}
  

  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle={{
    position:"fixed",
    top:"50%",
    left:"50%",
   
   
  }}
  visible={true}
/>)}
{!isLoading&&(<>
  <Routes>
     <Route path="/" element={<RequirsAuth><Home/></RequirsAuth>} />
     <Route path="/login" element={<Landing/>} />
     <Route path="/navbar" element={<NavBar/>} />
     <Route path="/leftsidebar" element={<LeftsideBar/>} />
     <Route path="/rightsidebar" element={<RightsideBar/>} />
     

     <Route path="/bookmark" element={<BookMark/>} />
     <Route path="/explore" element={<Explore/>} />
     <Route path="/details/:detailsEl" element={<Details/>} />
     <Route path="/profile" element={<RequirsAuth><Profile/></RequirsAuth>} />


     <Route path="/signup" element={<Signup/>} />
    
      </Routes>
</>)}
     
      

      <ToastContainer/>
    
    </div>
  );
}

export default App;
