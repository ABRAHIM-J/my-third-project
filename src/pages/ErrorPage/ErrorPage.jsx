import React from 'react';
import PageNotFound from "../../assets/error-404.png"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen text-center'>
            <img src={PageNotFound} alt="" />
            <h1 className='text-2xl font-bold m-4'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
            <Link to="/">
                <button className="btn btn-accent mt-4">Go Back !</button>
            </Link>
        </div>
    );
};

export default ErrorPage;