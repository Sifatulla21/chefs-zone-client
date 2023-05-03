import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipes';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { c_image, c_name, year_of_experience, num_of_recipes, num_of_likes, c_description, recipes } = chef;
    return (
        <div>
            <Row sm={1} md={1} lg={1} className="g-4 mt-5">
                <Col>
                    <div className="mt-3 d-flex border border-dark rounded">
                    
                        <div>
                            <img className="img-fluid rounded" src={c_image} alt="" />
                        </div>
                        <div className="d-flex flex-column align-items-center mt-3">
                            <h1>{c_name}</h1> <br />
                            <h4><span className="text-danger">{year_of_experience} </span> Years of experience </h4> <br />
                            <h4><span className="text-danger">{num_of_recipes}</span> Recipes
                            </h4> <br />
                            <h4><FaHeart className="text-danger"></FaHeart> {num_of_likes}</h4>
                             <br />
                            <p>{c_description}</p>
                        </div>
                    </div>
                </Col>
                <div className="mb-5 d-flex justify-content-center">
                <Row xs={1} sm={1} md={1} lg={2} className="g-4 mt-5">

                    {
                        recipes?.map(recipe=>
                            <Col key={recipe.r_id}>
                        <Recipes
                            
                            recipe={recipe}
                        ></Recipes>
                        </Col>
                        )
                    }
                </Row>
                </div>
            
            </Row>
        </div>
    );
};

export default ChefDetails;