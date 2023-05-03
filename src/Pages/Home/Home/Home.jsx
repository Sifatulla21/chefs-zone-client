import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import HomeBanner from '../HomeBanner/HomeBanner';
const Home = () => {
    return (
        <div className="ms-5">
            <HomeBanner></HomeBanner>
            <ChefCard></ChefCard>
        </div>
    );
};

export default Home;