import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const MyCourses = ({ course }) => {

    // const { name, id, picture, details } = course
    console.log(course);

    return (
        <Row>
            {/* {
                [...Array(9)].map(item => <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='p-3 rounded-2' variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>)
            } */}

        </Row>
    );
};

export default MyCourses;