
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CHNavbar from './Components/ChNavBar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      


{/* <Home /> */}
      <BrowserRouter>
      
<CHNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
