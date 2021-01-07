import React from 'react';
import Header from '../../components/header';
import Row from '../../components/row';
import Col from '../../components/col';

function Contact() {
    return (
        <Header info="Contact">
        <Row>
            <Col className="col-sm-12 mt-4">
                <form>
                    <div className="form-group">
                        <label>Cell Phone:</label>
                        <p>(510) 759 6506</p>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Email:</label>
                        <a href="mailto:hangphamho@gmail.com">hangphamho@gmail.com</a>
                    </div>                    
                </form>
            </Col>
        </Row>
        </Header>
    )
}

export default Contact;
