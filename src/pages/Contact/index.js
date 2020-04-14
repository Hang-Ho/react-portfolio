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
                        <label>Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Smith"></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2"
                            placeholder="example@gmail.com"></input>
                    </div>
                    <label>Message</label>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                    <br></br>
                    <button type="submit" className="btn bg-info text-white my-1">Submit</button>
                </form>
            </Col>
        </Row>
        </Header>
    )
}

export default Contact;