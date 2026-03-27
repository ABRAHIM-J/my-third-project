import React from 'react';
import { useLoaderData } from 'react-router';
import App from './App';

const Allapps = () => {
    const data =useLoaderData();
    return (
        <div>
             <h1 className='text-2xl text-center font-bold m-4'>Our All Applications</h1> 
             <p className='text-center m-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
            {
              data.map((SingleApp)=><App SingleApp={SingleApp} key={SingleApp.id} > </App>)
            }      
         </div>
              
        </div>
    );
};

export default Allapps;