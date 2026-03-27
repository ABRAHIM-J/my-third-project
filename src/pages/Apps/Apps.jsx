import React from 'react';
import App from './App';
import { Link } from 'react-router';

const Apps = ({data}) => {
    return (
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
            {
              data.slice(0, 8).map((SingleApp)=><App SingleApp={SingleApp} key={SingleApp.id} ></App>)
            }      
         </div>
             <Link to="/allapps">  <div className="flex justify-center m-12 ">
              <button className="btn bg-purple-500 text-white hover:bg-purple-600">
                                       Show All
                </button>
                </div>
             
             </Link>

        </div>
    );
};

export default Apps;