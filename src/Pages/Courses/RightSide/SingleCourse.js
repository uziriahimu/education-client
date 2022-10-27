import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const course = useLoaderData();
    console.log(course)

    return (

        <Container className='pt-5 w-50 mx-auto' data-aos="fade-zoom-in">
            <Card >
                <Card.Header>
                    <h2>Description</h2>
                </Card.Header>
                <Row>
                    <Col md={8} className='w-100'>
                        <Card.Img className='p-3 rounded-2' variant="top" src={course.picture} />
                        <Card.Body>
                            <Card.Title className='fs-1'>{course.name}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                {course.details}
                            </Card.Text>
                            <Link to={`/checkout/${course.id}`}>
                                <Button variant="primary">Get Premium Access</Button>
                            </Link>
                        </Card.Body>
                    </Col>

                </Row>
            </Card>
        </Container>
    );
};

export default SingleCourse;