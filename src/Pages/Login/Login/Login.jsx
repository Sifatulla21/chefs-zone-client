import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import app from '../../../Firebase/firebase.config';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from);
            })
            .catch(error => {
                console.log("Error:", error.message);
            })

    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const user = result.user;
                navigate(from);
            })
            .catch(error => {
                console.log("Error:", error.message);
            })
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
        <div className="my-5 d-flex justify-content-center">
            <div className="loginForm">
            <h1>Please Login</h1>
            <Row sm={2} xs={2} md={1} lg={1} className="g-4 mt-5">
            <Col>
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
                <Button  className="w-100" type="submit">
                    Login
                </Button><br />
                <Form.Text className="text-secondary">
                    Dont Have An Account? <Link to="/register/">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                </Form.Text>
            </Form>
            <hr />
            <h5 className="text-center">Or Login With</h5>
            <div className="d-flex flex-column mt-1">
                <Button className="mb-2" onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Google</Button>
                <Button onClick={handleGitHubSignIn} variant="outline-dark"><FaGithub></FaGithub> Git Hub</Button>
            </div>
            </Col>
            </Row>
            </div>
       </div>
    );
};

export default Login;


