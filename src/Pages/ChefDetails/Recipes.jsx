import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Recipes = ({ recipe }) => {
    const { r_id, r_name, r_image, ingredients, cooking_method, rating } = recipe;
    return (
        <div>
                    <Card>
                        <Card.Img variant="top" src={r_image} />
                        <Card.Body className="d-flex align-items-center">
                            <Card.Title className="me-auto">{r_name}</Card.Title>
                            <Rating
                                className="text-danger fs-3"
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegHeart></FaRegHeart>}
                                placeholderSymbol={<FaHeart></FaHeart>}
                                fullSymbol={<FaHeart></FaHeart>}
                            />
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><strong>Ingredients:</strong> {ingredients}</ListGroup.Item>
                            <ListGroup.Item><strong>Cooking Method:</strong> {cooking_method}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className="d-flex justify-content-center">
                            <Link to=""><Button variant="outline-danger" size="lg"><FaHeart></FaHeart> Add To Favourite</Button></Link>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default Recipes;