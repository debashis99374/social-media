
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Landing from './pages/landing';
import NavBar from './pages/navbar';
import LeftsideBar from './components/leftsideBar';
import RightsideBar from './components/RightsideBar/rightsideBar';


function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/landing" element={<Landing/>} />
     <Route path="/navbar" element={<NavBar/>} />
     <Route path="/leftsidebar" element={<LeftsideBar/>} />
     <Route path="/rightsidebar" element={<RightsideBar/>} />
    
      </Routes>
    
    </div>
  );
}

export default App;
