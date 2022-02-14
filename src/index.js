import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'materialize-css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Portfolio from './pages/Portfolio';
import Weather from './pages/Weather';
import Workday from './pages/Workday';

ReactDOM.render(
    <React.StrickMode>
<Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about"  element={<About />} />
        <Route path="/projects"  element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project1"  element={<Project1 />} />
        <Route path="/project2"  element={<Project2 />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/workday" element={<Workday />} />
    </Routes>
</Router>
</React.StrickMode>,
document.getElementById('root')
);


reportWebVitals();

