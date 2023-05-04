import React, { useEffect, useState } from 'react';
import { Badge, Card, Carousel, Col, Row } from 'react-bootstrap';
import { FaHotjar } from 'react-icons/fa';

const HotItems = () => {
    const [hotItems, setHotItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hot')
            .then(res => res.json())
            .then(data => setHotItems(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <div>
            <h1>Hot Items</h1>
            <Row xs={1} sm={1} md={2} lg={2} className="g-4">
                {
                    hotItems.map(item => <div className="pt-3 " key={item.id}>
                        <Col>
                            <Card>
                                <span className="position-absolute top-0 start-100 translate-middle p-2  rounded-circle"><FaHotjar className="text-danger fs-1"></FaHotjar></span>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </div>)
                }
            </Row>
        </div >
            );
};

            export default HotItems;