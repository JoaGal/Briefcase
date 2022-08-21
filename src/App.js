import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavMenu} from './Components/Nav/NavMenu';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Home } from './Pages/Home/Home';
import { Projects } from './Pages/Projects/Projects';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}