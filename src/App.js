
import './App.css';
import Header from './components/Header';
import Productlist from './components/Productlist';
import About from './components/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login/>}/>
       
      </Routes>
      </BrowserRouter>

      
      
      
      <BrowserRouter>
      
      <Routes>
        <Route path="/Home" element={<Productlist/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
