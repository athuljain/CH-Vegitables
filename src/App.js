
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
import Gallery from './Components/Gallery';
import {GalleryData} from './Assets/Gallery'
import ContactUs from './Components/ContactUs';
function App() {

  const [staffData,setStaffData]=useState(StaffDetails)
const [galleryImages,setGalleryImages]=useState(GalleryData)
// console.log(staffData);
console.log(galleryImages);
const values={
  staffData,setStaffData,
  galleryImages,setGalleryImages

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
        <Route path='/staff' element={<Staff  />}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<ContactUs />}/>

      </Routes>
      </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
