import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
import LeftSide from './LeftSide';
import MyCourses from './RightSide/MyCourses';

const Courses = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                        <Outlet />
                    </Col>
                    <Col lg="3">
                        <LeftSide />
                    </Col>


                </Row>
            </Container>

        </div>
    );
};

export default Courses;