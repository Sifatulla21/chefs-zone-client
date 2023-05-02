import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
            <h1>Chefs Details</h1>
        </div>
    );
};

export default ChefDetails;