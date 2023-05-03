import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { signIn, user, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const [error,setError]= useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn();
           
    }
    const handleGitHubSignIn = () => {
        gitHubSignIn();
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from);
            })
            .catch(error => {
                const splitedMessage = error.message.split('/');
                const splitedError = splitedMessage[1].split(')');
                setError(splitedError[0]);
            })
    }
    return (
        <Container className="w-25 mx-auto">
            <h1>Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-danger">
                    <h5>{error}</h5>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button><br />
                <Form.Text className="text-secondary">
                    Dont Have An Account? <Link to="/register/">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                </Form.Text>
            </Form>
            <div className="d-flex flex-column mt-1">
                <Button className="mb-2" onClick={handleGoogleSignIn} variant="outline-info"><FaGoogle></FaGoogle> Google</Button>
                <Button onClick={handleGitHubSignIn} variant="outline-secondary"><FaGithub></FaGithub> Git Hub</Button>
            </div>
        </Container>
    );
};

export default Login;