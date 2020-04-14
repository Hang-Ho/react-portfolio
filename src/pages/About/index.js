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
                    <img className="mypic shadow mb-5 rounded" src="https://avatars0.githubusercontent.com/u/55907833?s=460&u=3749b8c0dd55c8410990f57f942c2808eb31c0e7&v=4" alt=""></img>
                </Col>
                <Col className="col-sm-8">
                    <p>Welcome to my page!</p>
                    <p>My name is Hang Ho. I'm attending at UC Berkeley Extension program, and my portfolio is a representation of what I have
                        learned from our
                        bootcamp.</p>
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