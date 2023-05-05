import React, { useEffect, useState } from 'react';
import { Badge, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { FaHotjar } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const HotItems = () => {
    const [hotItems, setHotItems] = useState([]);
    useEffect(() => {
        fetch('https://chefs-zone-server-sifatulla21.vercel.app/hot')
            .then(res => res.json())
            .then(data => setHotItems(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <Container>
            <h1>Hot Items</h1>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4 mt-5">
                {
                    hotItems.map(item => <Container className="pt-3 " key={item.id}>
                        <Col>
                            <Card className="myAnimation">
                                <span className="position-absolute top-0 start-100 translate-middle p-2  rounded-circle"><FaHotjar className="text-danger fs-1"></FaHotjar></span>
                                    <img style={{ height: '250px' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>)
                }
            </Row>
        </Container>
    );
};

export default HotItems;