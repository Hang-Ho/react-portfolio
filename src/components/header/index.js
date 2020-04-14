import React from 'react';
import Row from '../row';
import Col from '../col';

function Header(props) {
    return (
        <main className="container shadow rounded pl-4">
        <Row>
            <Col className="col-sm-12 mt-4">
                <h2 className="text-info float-left">{props.info}</h2>
            </Col>
        </Row>
        <Row>
            <Col className="col-sm-12">
                <hr></hr>
            </Col>
        </Row>
        {props.children}
        </main>
    );
}

export default Header;