import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Newsevents from "./Pages/Newsevents";
import Rating from "./Components/Rating";
import Readmore from "./Components/Readmore";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Newsevents/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/rating" element={<Rating/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/readmore/:id" element={<Readmore/>}/>
      </Routes>
   <Footer/>
    </>
  );
}

export default App;