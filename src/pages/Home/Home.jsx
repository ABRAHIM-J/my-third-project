import React from 'react';
import Banner from './Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data =useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
             <h1 className='text-4xl text-center mb-4 mt-8'>Trending Apps</h1>
             <p className='text-center mb-4'>Explore All Trending Apps on the Market developed by us</p>
             <Apps data={data}></Apps>
        </div>
    );
};

export default Home;