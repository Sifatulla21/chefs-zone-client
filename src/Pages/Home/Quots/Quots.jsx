import React, { useEffect, useState } from 'react';
import { Card, Button, Carousel, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const Quots = () => {
    const [quots, setQuots] = useState([]);
    useEffect(() => {
        fetch('https://chefs-zone-server-sifatulla21.vercel.app/quote')
            .then(res => res.json())
            .then(data => setQuots(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <div className="my-5">
            <h1>What They Said</h1>
            <div>
                <Carousel
                    style={{ background: 'linear-gradient(90deg, rgba(238,174,202,0.6839110644257703) 0%, rgba(195,180,217,0.5410539215686274) 48%, rgba(148,187,233,0.5858718487394958) 100%)' }} className="my-3 rounded">
                    {
                        quots.map(quote => <Carousel.Item key={quote.id}>
                            <Row>
                                <Col md={6}>
                                    <Card.Img className="my-3 rounded" src={quote.image} />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="mt-5 ms-5">

                                        <Card.Title className="fs-1">
                                            {quote.name}

                                        </Card.Title>
                                        <Card.Text className="mt-2 w-50 fs-5 text-danger">
                                            <FaQuoteLeft></FaQuoteLeft>  {quote.quote}
                                            <FaQuoteRight></FaQuoteRight>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        )
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Quots;