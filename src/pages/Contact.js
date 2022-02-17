import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { Container } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {

    return (


        <>
        <Header />
        <Container>
        <div id="contactMeDesc">
            Connect with me!!
        </div>
        <div id="contactMeContent">
        <a href="mailto:maykanwara@gmail.com" target="_blank" rel="noreferrer" ><img src="assets/images/emailicon.png"
        className="tooltipped" data-position="top" data="tooltipped=Email" alt="email icon" /></a>

        <a href="http://github.com/maykanwara" target="_blank" rel="noreferrer" ><img src="assets/images/githubicon.png"
        className="tooltipped" data-position="top" data="tooltipped=Github" alt="github icon" /></a>

        <a href="http://linkedin.com/in/kanwara-moore-415896a7" target="_blank" rel="noreferrer" ><img src="assets/images/linkedinicon.png"
        className="tooltipped" data-position="top" data="tooltipped=Linkedin" alt="linkedin icon" /></a>
        
        
        <a href="kanwararesume.pdf" download  rel="noreferrer" ><img src="assets/images/resume.png"  
        className="tooltipped" data-position="top" data="tooltipped=resume" alt="resumeicon" /></a>

        <Link className="btn-floating btn-large introLink" to="/"><i className="Materialize-icons" alt="home button">home</i></Link>

        </div>
        </Container>
        <Footer />
        </>

    )
}

export default Contact






       
  
