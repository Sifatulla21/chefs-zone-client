import React from 'react';

const Recipes = ({recipe}) => {
    const {r_id, r_name, r_image, ingredients, cooking_method, rating} = recipe;
    return (
        <div>
            <h1>{r_image}</h1>
        </div>
    );
};

export default Recipes;