import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://education-server-sooty.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (

        <div className='border p-2 '>
            <Card.Header className='fs-2 text-center mb-2 border bg-primary text-white'>Category</Card.Header>
            {
                categories.map(category => <p key={category.id}>

                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush" className='bg-primary'>
                            <ListGroup.Item><Link to={`/category/${category.id}`}>{category.name}</Link></ListGroup.Item>
                        </ListGroup>
                    </Card>

                </p>)
            }
        </div>

    );

};

export default LeftSide;