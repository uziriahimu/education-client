import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf, IconName } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";


const ref = React.createRef();
const SingleCourse = () => {

    const course = useLoaderData();

    return (

        <Container className='pt-5 w-50 mx-auto' data-aos="fade-zoom-in">


            <Card ref={ref} >
                <Card.Header className='d-flex justify-content-between'>
                    <h2>Description</h2>
                    <ReactToPdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='btn btn-light' onClick={toPdf}> <FaFilePdf className='fs-1 bg-white text-danger'></FaFilePdf> </button>}
                    </ReactToPdf>
                </Card.Header>
                <Row >
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