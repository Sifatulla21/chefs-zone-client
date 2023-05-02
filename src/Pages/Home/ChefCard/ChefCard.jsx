import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ChefCard.css'

const ChefCard = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <div>
            {
                chefData.map(chef => <div className="mt-3">
                    <Row xs={1} md={2} lg={3} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={chef.c_image} />
                                    <Card.Body>
                                        <Card.Title>{chef.c_name}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </Row>
                </div>)
            }
        </div>
    );
};

export default ChefCard;