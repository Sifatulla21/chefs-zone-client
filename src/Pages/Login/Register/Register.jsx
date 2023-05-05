import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../Firebase/firebase.config';
import './Register.css'

const Register = () => {
    const {createUser, updateUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider(); 
    const gitHubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [accepted,setAccepted] = useState(false);
    const [error,setError]= useState('');
    const handleGoogleSignIn = () => {
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from);
        })
        .catch(error =>{
            console.log("Error:",error.message);
        })
           
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth,gitHubProvider)
        .then(result =>{
            const user = result.user;
            navigate(from);
        })
        .catch(error =>{
            console.log("Error:",error.message);
        })
    }
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<6){
            setError("Password should be at least 6 characters");
        }
        createUser(email,password)
        .then(result => updateUser(result.user,name,photo)
        .catch(error =>{
            console.log(error);
        })) 
        .catch(error =>{
            console.log(error);
        })
    }
    const handleAccepted = event =>{
        const form = event.target.checked;
        setAccepted(form);
    }
    return (
        <div className="my-5 d-flex justify-content-center">
            <div className="registrationForm">
            <h1>Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" required placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" required placeholder="Enter URL" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="Password" />
                    <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                     onClick={handleAccepted}
                     type="checkbox" name="accept"
                     label= {<>Accept <Link to="/terms">Terms And Conditions</Link></>} />
                </Form.Group>
                <Button className="w-100" disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                   Already Register? <Link to="/login/">Login</Link>
                </Form.Text>
            </Form>
            <hr />
            <h5 className="text-center">Or Login With</h5>
            <div className="d-flex flex-column mt-1">
                <Button className="mb-2" onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Google</Button>
                <Button onClick={handleGitHubSignIn} variant="outline-dark"><FaGithub></FaGithub> Git Hub</Button>
            </div>
            </div>
        </div>
    );
};

export default Register;