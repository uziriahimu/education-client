import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';




const Login = () => {
    const [error, setError] = useState()
    const { signIn, setLoading } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const onSubmit = data => {
        data.password.length < 6 ? alert('password is less then 6 charachter')
            :
            signIn(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setError('');
                    if (user.email) {
                        navigate(from, { replace: true });
                    }
                    else {

                        toast.error('Something went wrong.')
                    }

                })
                .catch(error => {
                    console.error(error)
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;