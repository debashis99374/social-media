
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



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <div className="App">
     
      <Routes>
     <Route path="/" element={<RequirsAuth><Home/></RequirsAuth>} />
     <Route path="/login" element={<Landing/>} />
     <Route path="/navbar" element={<NavBar/>} />
     <Route path="/leftsidebar" element={<LeftsideBar/>} />
     <Route path="/rightsidebar" element={<RightsideBar/>} />
     

     <Route path="/bookmark" element={<BookMark/>} />
     <Route path="/explore" element={<Explore/>} />
     <Route path="/details/:detailsEl" element={<Details/>} />
     <Route path="/profile" element={<Profile/>} />


     <Route path="/signup" element={<Signup/>} />
    
      </Routes>

      <ToastContainer/>
    
    </div>
  );
}

export default App;
