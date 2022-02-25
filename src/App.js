import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import Contact from "./pages/Contact";
// import Header from './components/Header'
// import Navigation from './Component/Navigation'
// import Footer from "./components/Footer";
// import Skills from "./components/Skills";
// import About from "./components/About";
// import Work from "./components/Work";
// import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("about");
console.log(page)
const renderPage = () => {
    if (page === "About Me") {
        return "Hello World"
    }
    if (page === "Work") {
        return "Work"
    }
    if (page === "Contact") {
        return "Contact"
    }
    if (page === "Resume") {
        return "My Resume"
    }
}
  return (
    <Router>
      <div className="App">
        <Header setPage={setPage} page={page} />
        {renderPage()} 
        <Contact />
      </div>
    </Router>
  );
}

export default App;
