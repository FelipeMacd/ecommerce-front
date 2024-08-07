import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contato from './pages/contato/Contato';
import SobreNos from './pages/sobre/SobreNos';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/sobrenos" element={<SobreNos/>} />
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
    </>

);
}
export default App;