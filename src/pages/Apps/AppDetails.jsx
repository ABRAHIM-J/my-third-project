import React from 'react';
import { Form, useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import download from "../../assets/icon-downloads.png"
import Avrating from "../../assets/icon-ratings.png"
import review from "../../assets/icon-review.png"
import { toast } from 'react-toastify';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { addToStoredApp } from '../../utility/addToDB';

const AppDetails = () => {
    const {id} = useParams();
    const appId=parseInt(id);
    const data =useLoaderData();
    const singleApp=data.find((app)=>app.id===appId);
    
   const {image,title,ratingAvg,downloads,companyName,description,reviews,ratings}=singleApp;

       const handle = (id) => {
    addToStoredApp(id);
    toast.success("App Installed Successfully");
};



    return (
        <div>
            <div className='flex gap-4'>
            <img src={image} alt="" />
            <div>
                <h1 className='font-bold text-2xl'>{title}</h1>
                 <p>{companyName}</p>
                  <div className="flex gap-2 mt-6 mb-6">
                 <div>
                     <img src={download} alt="" />
                     <p>Downloads</p>
                     <h1 className='font-bold text-xl'>{downloads}</h1>
                 </div>
                 <div>
                     <img src={Avrating} alt="" />
                     <p>Average Ratings</p>
                     <h1 className='font-bold text-xl' >{ratingAvg}</h1>
                 </div>
                 <div>
                     <img src={review} alt="" />
                     <p>Total Reviews</p>
                     <h1 className='font-bold text-xl' >{reviews}</h1>
                 </div>
                 </div>
                 <button onClick={()=>handle(id)} className="btn btn-accent">Install Now</button>
            </div>
            </div>
             <h1 className='text-xl font-bold text-center mt-4 mb-4'>Ratings</h1>
            <ResponsiveContainer width="100%" height={300}>
  <BarChart data={ratings}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="count" fill="#8884d8" />
  </BarChart>
</ResponsiveContainer>
            <div>
               <h1 className='font-bold text-xl'>Description</h1>
               <p>{description}</p>
            </div>  
        </div>
    );
};

export default AppDetails;