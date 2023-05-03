import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted,setAccepted] = useState(false);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result => {
           const createdUser = result.user;
        }) 
        .catch(error =>{
            console.log(error);
        })
    }
    const handleAccepted = event =>{
        const form = event.target.checked;
        setAccepted(form);
    }
    return (
        <Container className="w-25 mx-auto">
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
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                     onClick={handleAccepted}
                     type="checkbox" name="accept"
                     label= {<>Accept <Link to="/terms">Terms And Conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button><br />
                <Form.Text className="text-secondary">
                   Already Register? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                </Form.Text>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;