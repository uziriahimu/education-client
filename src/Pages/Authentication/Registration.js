import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState()
    const { register, handleSubmit } = useForm();
    const { createUser, setLoading, updateUserProfile } = useContext(AuthContext)


    const onSubmit = data => {
        data.password.length < 6 ? alert('password is less then 6 charachter')
            :
            createUser(data.email, data.password)
                .then(result => {
                    updateUserProfile({
                        displayName: data.displayName,
                        photoURL: data.photoURL
                    });
                })
                .catch(e => {
                    console.error(e);
                    setError(e.message);
                });
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-1" >
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="i!"
                    {...register("displayName", { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="https://img.png"
                    {...register("photoURL", { required: true })}
                />
            </Form.Group>



            <Button size='sm' variant="primary" type='submit'>Register</Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Registration;