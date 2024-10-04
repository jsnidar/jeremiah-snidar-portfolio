import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export class Experience extends Component {

    render() {
        return (
            <>
                <Row className="pb-4">
                    <h2>Experience</h2>
                </Row>
                <Row className="pb-4">
                    <h3>Technical Skills</h3>
                    <Col xs={12}>
                        <ul className="ps-4 fs-4">
                            <li>
                                <span className="fw-bolder">Frontend: </span>
                                Angular, React, Redux, jQuery, Stencil, HTML5, CSS3</li>
                            <li><span className="fw-bolder">Backend: </span> Java, Spring, SpringBoot, Ruby, Rails, Sinatra</li>
                            <li><span className="fw-bolder">Data Tranfer: </span>REST, Apollo GraphQL, JSON</li>
                        </ul>
                    </Col>
                    <Col></Col>
                </Row>
            </>
        );
    }

}

export default Experience