import React from 'react'
import '../App.css';
import { useNavigate } from "react-router-dom"

import { Container, Button, Row, Col } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = ()=> {

    let navigate - useNavigate();

    const returnHome =() => {
        navigate("/");
    };

    return (
        <><Header />
        <Container id="aboutme">
            <Row id="aboutMeDesc">
                Let's Guess who ?
            </Col>
            <Col s={12} className="center-align" id="aboutMePhoto">
                <br /><img src="assets/images/kanwara.jpg alt="Kanwara Moore" />
            </Col>

            <Col s={12} className="left-align" id="aboutMeText">I have worked as a Certified Nurse Assistant for 5 years at the Providence Regional Hospital in Everett. As much as i enjoy to work at the hospital,it not my true passion. I am currently working on Web development,which i have found I love and enjoy. It is so exited to making a new life style. <br /><br />I am enrolled in the University of Washington coding bootcamp and really look forward to a career in an another place I am so exited<strong>WANTING</strong> to be apart of.
            <br />
            <br /> On my personal level, I enjoy spending time with my husband , our son and our sport(ski,bike,gym,edm music).
            <br />
            <br />
            </Col>

            <Col s={12} className="center-align">
                <Button className="waves-effect waves-green btn-floating btn-large introLink" onClick={returnHome}><
                    class="homeicons">home</></Button>
            </Col>
            </Row>

            </Container>
            <Footer/>
            </>


    )
}

export default About