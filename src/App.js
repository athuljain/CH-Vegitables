
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CHNavbar from './Components/ChNavBar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import { StaffDetails } from './Assets/Staff';
import Staff from './Components/Staff';
import { useState } from 'react';
import { myContext } from './Context';

function App() {

  const [staffData,setStaffData]=useState(StaffDetails)

// console.log(staffData);

const values={
  staffData,setStaffData

}
  return (
    <div className="App">
      


{/* <Home /> */}
      <BrowserRouter>
      <myContext.Provider value={values}>
<CHNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/staff' element={<Staff data={staffData} />}/>
      </Routes>
      </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
