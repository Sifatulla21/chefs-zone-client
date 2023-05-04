import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../public/chef.jpg';
import banner2 from '../../../../public/food.jpg';

const HomeBanner = () => {
    return (
        <div>
            <Carousel fade className="mt-3">
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A Group Of Worldclass Chef</h3>
                        <p>A group of worldclass chef with vast of experience and their selected recipes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Touch Of Tradition</h3>
                        <p>Provide traditional cusins and their authentic recipes</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;