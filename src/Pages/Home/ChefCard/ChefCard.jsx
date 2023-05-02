import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaHeart, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <Container>
            <Row sm={1} md={2} lg={3} className="g-4 mt-5">
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
                                    <Card.Body className="d-flex justify-content-center">
                                        <Link to={`/${chef.c_id}`}><Button variant="outline-danger" size="lg">View Recipes Button <FaLongArrowAltRight></FaLongArrowAltRight></Button></Link>
                                    </Card.Body>
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