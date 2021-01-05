import React from 'react';
import './index.css';
import Header from '../../components/header';
import Row from '../../components/row';
import Col from '../../components/col';

function About() {
    return (
        <Header info="About Me">
            <Row className="mt-4">
                <Col className="col-sm-4">
                    <img className="mypic shadow mb-5 rounded" src="https://media-exp1.licdn.com/dms/image/C5603AQG7sEnN51IRvA/profile-displayphoto-shrink_400_400/0/1598122309543?e=1615420800&v=beta&t=uDS_PuTSw5r7gtkETVwae7Itn1XOyN6FzsQzeGRHJ_M" alt=""></img>
                </Col>
                <Col className="col-sm-8">
                    <p>Welcome to my page!</p>
                    <p>My name is Hang Ho. I’m pursuing a Bachelor of Science in Computer Science at San Jose State University. I’m graduated from UC Berkeley coding boot camps. 
                        I’m open-minded and learn new things quickly. I’m always interested in challenges and open to constructive feedback. 
                        Reach out to my contact to connect!</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-12">
                    <p>Thank you for visiting my page! Contact me if you have any questions.</p>
                </Col>
            </Row>
        </Header>
    )
}
 
export default About;
