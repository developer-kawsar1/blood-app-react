

import React, { Component }  from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomShape from './components/CustomShape/CustomShape';
import Footer from './components/Footer/Footer';
import DonorsList from './components/Pages/donorsList/DonorsList';
import FindDonor from './components/Pages/FindDonor/FindDonor';
import Home from './components/Pages/Home/Home';
import Loader from './components/Pages/Loader/Loader';

function App() {
  return (
    
  <div>

 
 <Routes> 
        
        
        <Route path="/" element={<Home/>} /> 
        <Route path="/find-donor" element={<FindDonor />} /> 
        <Route path="/find-donor/:group" element={<DonorsList/>} /> 
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

 <Footer/>
  </div>
  );
}

export default App;
