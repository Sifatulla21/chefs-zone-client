import React, { useEffect, useState } from 'react';
import { Card, Button, Carousel, Row, Col } from 'react-bootstrap';
const Quots = () => {
    const [quots, setQuots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/quote')
            .then(res => res.json())
            .then(data => setQuots(data))
            .catch(error => console.error(error))
    }, []);
    return (
        <div className="my-5">
            <h1>What They Said</h1>
            <div>
                <Carousel 
                style={{ background: 'linear-gradient(90deg, rgba(238,174,202,0.6839110644257703) 0%, rgba(195,180,217,0.5410539215686274) 48%, rgba(148,187,233,0.5858718487394958) 100%)' }}className="my-3 rounded">
                {
                    quots.map(quote=> <Carousel.Item  key={quote.id}>
                            <Row noGutters>
                                <Col md={6}>
                                    <Card.Img className="my-3 rounded" src={quote.image} />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="pt-5">
                                         
                                        <Card.Title>
                                            <h1>{quote.name}</h1>
                                             </Card.Title>
                                        <Card.Text>
                                           <h3 className="text-danger">"{quote.quote}"</h3> 
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