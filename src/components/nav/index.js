import React from 'react';
import Row from '../row';
import Col from '../col';
import Container from '../container';

function Nav() {
    return (
        <Container>
            <Row>
                <Col className="col-sm-12">
                    <nav className="navbar shadow rounded navbar-expand-lg navbar-light bg-light header">
                        <div className="bg-info shadow rounded w-25 mh-100 text-center">
                            <h1 className="navbar-brand text-white">Hang Ho</h1>

                        </div>
                        <ul className="nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-muted" href="/">About <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-muted" href="/portfolio">Portfolio <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-muted" href="/contact">Contact <span
                                    className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Nav;