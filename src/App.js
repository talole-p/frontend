import './App.css';
import { Routes , Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';
import Short from './Components/short';
const App =()=>{
  return (
    <>
    <Navbar/>
       <Routes>
       <Route exact path="/" element ={<Registration/>}/>
       <Route exact path="/dashboard" element ={<Dashboard/>}/>
       <Route exact path="/short" element ={<Short/>}/>
       </Routes>
    </>
  );
}

export default App;
