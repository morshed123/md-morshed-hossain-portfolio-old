import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Exprience from './Components/Exprience/Exprience';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';
import Education from './Components/Education/Education';
// import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';


function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<Header/>}></Route> */}
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="education" element={<Education/>}></Route>
          <Route path="projects" element={<Projects/>}></Route>
          <Route path="skills" element={<Skills/>}></Route>
          <Route path="exprience" element={<Exprience/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="resume" element={<Resume/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route> 
      </Routes>
  );
}

export default App;
