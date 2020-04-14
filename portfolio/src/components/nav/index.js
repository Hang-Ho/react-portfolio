import React from 'react';
import Row from '../row';
import Col from '../col';
import Container from '../container';
import {Link} from 'react-router-dom';
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
                                <Link className="nav-link text-muted" to="/">About <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-muted" to="/portfolio">Portfolio <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-muted" to="/contact">Contact <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Nav;