import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    const {createUser, updateUser } = useContext(AuthContext);
    
    const [accepted,setAccepted] = useState(false);
    const [error,setError]= useState('');
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
        <Container style={{marginBottom:'155px'}} className="w-25 mx-auto">
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
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                   Already Register? <Link to="/login/">Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;