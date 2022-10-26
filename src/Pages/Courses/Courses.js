import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSide from './LeftSide';
import MyCourses from './RightSide/MyCourses';

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses)
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
            {
                courses.map(course => <MyCourses
                    key={course.id}
                    corse={course}
                ></MyCourses>)
            }
        </div>
    );
};

export default Courses;