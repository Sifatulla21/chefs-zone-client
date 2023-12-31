import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FaHeart, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import LazyLoad from 'react-lazy-load';
import '../../Shared/Animation/Animation.css'

const ChefCard = () => {
    const [chefData, setChefData] = useState([]);
    const { loading } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://chefs-zone-server-sifatulla21.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(error => console.error(error))
    }, []);
    if (loading) {
        return <Spinner className="position-absolute top-50 start-50" animation="grow" variant="info" />;
    }
    return (
        <Container className="mb-5">
            <Row sm={1} md={1} lg={3} className="g-4 mt-5">
                {
                    chefData.map(chef => <div className="mt-3" key={chef.c_id}>

                        <Col>
                            <Card className="myAnimation" style={{width:'400px'}}>
                                <LazyLoad once>
                                       <img style={{height:'250px', width:'400px'}} src={chef.c_image} />                
                                </LazyLoad>
                                <Card.Body>
                                    <Card.Title>{chef.c_name}</Card.Title>
                                    <Card.Text>
                                        <span className="text-danger">{chef.year_of_experience} </span> Years of experience  <br />
                                        <span className="text-danger">{chef.num_of_recipes}</span> Recipes:  <br />
                                        <FaHeart className="text-danger"></FaHeart> {chef.num_of_likes}
                                    </Card.Text>
                                    <Card.Body className="d-flex justify-content-center">
                                        <Link to={`/details/${chef.c_id}/`}><Button variant="outline-danger" size="lg">View Recipes Button <FaLongArrowAltRight></FaLongArrowAltRight></Button></Link>
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