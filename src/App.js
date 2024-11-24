import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Properties from './components/pages/Properties';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
         <Route path='/Properties' element={ <Properties/>}/>
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
