import React from 'react';
import PageNotFound from "../assets/App-Error.png"
import { Link } from 'react-router-dom';

const ErrorApps = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen text-center'>
            <img src={PageNotFound} alt="" />
            <h1 className='text-2xl font-bold m-4'>Oops, Apps not found!</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/">
                <button className="btn btn-accent mt-4">Go Back !</button>
            </Link>
        </div>
    );
};

export default ErrorApps;