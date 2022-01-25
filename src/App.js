import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css'
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from './components/Navbar';
import Service from "./components/Service"
import Weather from './components/Weather';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes className="Appcomponents">
                <Route path="/" element={<Weather />} />
                <Route path="/home" element={<Weather />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />

            </Routes>
        </div>
    )
}
export default App