import React, { useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';

const Recipes = ({ recipe }) => {
    const [loved, useLoved] = useState(true);
    const handleFavourite = () => {
        toast.success('Added To Favourite!');
        useLoved(false);
    }
    const { r_name, r_image, ingredients, cooking_method, rating } = recipe;
    return (
        <div>
            <Card className="gap-0 w-75 myAnimation">
                <LazyLoad once>
                    <img style={{ height: '250px' }} src={r_image} />
                </LazyLoad>
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
                <ListGroup style={{ minHeight: '150px' }} className="list-group-flush">
                    <ListGroup.Item><strong>Ingredients:</strong> {ingredients}</ListGroup.Item>
                    <ListGroup.Item style={{ height: '100px' }}><strong>Cooking Method:</strong> {cooking_method}</ListGroup.Item>
                </ListGroup>
                <Card.Body className="d-flex justify-content-center">
                    <Link to=""><Button disabled={!loved} onClick={handleFavourite} variant="outline-danger" size="lg"><FaHeart></FaHeart> Add To Favourite</Button></Link>
                </Card.Body>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Recipes;