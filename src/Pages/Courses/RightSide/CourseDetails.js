import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { id, name, picture, details } = course

    return (
        <div>
            <Row className='mb-5'>
                {
                    [...Array(3)].map(item => <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className='p-3 rounded-2' variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {
                                        details.length > 60 ?
                                            <p>{details.slice(0, 60) + '...'} <Link to={`/course/${id}`}>Read More</Link> </p>
                                            :
                                            <p>{details}</p>
                                    }
                                </Card.Text>
                                <Link to={`/course/${id}`}>
                                    <Button variant="primary">Show Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>)
                }

            </Row>
        </div >
    );
};

export default CourseDetails;