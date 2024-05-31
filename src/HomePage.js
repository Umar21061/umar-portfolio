import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import the external CSS file

import { Container, Row, Col } from 'react-bootstrap';
import umarImage from './images/umar.jpg'; // Import the image
import linkIcon from './images/link.png';
import instaIcon from './images/insta.webp';
import gmailIcon from './images/gmail.png';
import fbIcon from './images/twit.png';

const HomePage = () => {
    return (
        <div className="home-page">
            <Container>
                <Row>
                    <Col md={7} className="content"> 
                        <h1>Hey!</h1>
                        <h3>I'm your Python problem-solver, dedicated to creating sleek and powerful applications that drive your success</h3>
                        <p>Specializing in building scalable, efficient, and reliable software, I blend creativity with technical prowess, utilizing the latest frameworks and industry standards to deliver solutions that exceed expectations.</p>
                    </Col>
                    <Col md={5} className="d-flex justify-content-center align-items-center"> {/* Center the image within its column */}
                        <img src={umarImage} alt="Your Image" />
                    </Col>
                </Row>
                <Row className="icon-row">
    <div className="icon-block">
        <a href="https://www.linkedin.com/in/umar-murtaza-" target="_blank" rel="noopener noreferrer">
            <img src={linkIcon} alt="LinkedIn" />
        </a>
    </div>
    <div className="icon-block">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Instagram" />
        </a>
    </div>
    <div className="icon-block">
        <a href="mailto:umar@systemheuristics.com">
            <img src={gmailIcon} alt="Gmail" />
        </a>
    </div>
    <div className="icon-block">
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} alt="Twitter" />
        </a>
    </div>
</Row>

            </Container>
        </div>
    );
}

export default HomePage;
