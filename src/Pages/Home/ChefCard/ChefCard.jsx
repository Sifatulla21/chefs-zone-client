import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <Container>
             <Row xs={1} md={2} lg={3} className="g-4 mt-5">
            {
                chefData.map(chef => <div className="mt-3" key={chef.c_id}>
                   
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={chef.c_image} />
                                <Card.Body>
                                    <Card.Title>{chef.c_name}</Card.Title>
                                    <Card.Text>
                                        <span className="text-danger">{chef.year_of_experience} </span> Years of experience  <br />
                                        <span className="text-danger">{chef.num_of_recipes}</span> Recipes:  <br />
                                        <FaHeart className="text-danger"></FaHeart> {chef.num_of_likes}
                                    </Card.Text>
                                    <Link to={`/chef/${chef.c_id}`}><Button variant="primary">View Recipes Button</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                </div>)
            }
            </Row>
        </Container>
    );
};

export default ChefCard;