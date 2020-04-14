import React from 'react';
import './index.css';
import Hearder from '../../components/header';
import Row from '../../components/row';
import Col from '../../components/col';

function Portfolio() {
    return (
        <Hearder info="Portfolio">
            <Row>
                <Col className="col-sm-1"></Col>
                <Col className="col-sm-3 frame">
                    <a href=" https://hang-ho.github.io/homework3/" target="_blank"><img className="pic shadow rounded" src="https://img-ipad.lisisoft.com/imgmic/2/5/2587-1-password-generator-deluxe.jpg" alt=""></img></a>
                    <div className="text">
                        <h4>Password Generator</h4>
                    </div>
                </Col>
                <Col className="col-sm-3 frame ml-5">
                    <a href=" https://hang-ho.github.io/homework4/" target="_blank"><img className="pic shadow rounded" src="https://tse3.mm.bing.net/th?id=OIP.aMcEHqRUSqTDRCi1Pi4EyQHaFt&pid=Api&P=0&w=196&h=151" alt=""></img></a>
                    <div className="text">
                        <h4>Quiz Game</h4>
                    </div>
                </Col>
                <Col className="col-sm-3 frame ml-5">
                    <a href=" https://hang-ho.github.io/homework5/main.html" target="_blank"><img className="pic shadow rounded" src="https://tse3.mm.bing.net/th?id=OIP.UIhpjOT7gPNL-OLkrdJTeQAAAA&pid=Api&P=0&w=170&h=135" alt=""></img></a>
                    <div className="text">
                        <h4>Day Planner</h4>
                    </div>
                </Col>
                <Col className="col-sm-2"></Col>
            </Row>
            <Row className="mt-5">
                <Col className="col-sm-2"></Col>
                <Col className="col-sm-3 frame">
                    <a href=" https://hang-ho.github.io/homework6/" target="_blank"><img className="pic shadow rounded" src="https://tse1.mm.bing.net/th?id=OIP.MVCFWLATa1j4CO42FJuJPQAAAA&pid=Api&P=0&w=300&h=300" alt=""></img></a>
                    <div className="text">
                        <h4>Weather App</h4>
                    </div>
                </Col>
                <Col className="col-sm-2"></Col>
                <Col className="col-sm-3 frame">
                    <a href="https://hang-ho.github.io/homeworkWeek1/" target="_blank"><img className="pic shadow rounded" src="https://tse1.mm.bing.net/th?id=OIP.xKpKFaEOVs70aWK6nQ9DQwAAAA&pid=Api&P=0&w=300&h=300" alt=""></img></a>
                    <div className="text">
                        <h5>NYT search</h5>
                    </div>
                </Col>
            </Row>
            </Hearder>
    )
}

export default Portfolio;