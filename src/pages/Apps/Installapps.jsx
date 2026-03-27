import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import App from './App';
import { removeStoredApp } from '../../utility/addToDB';
import { toast } from 'react-toastify';

const Installapps = () => {
   const [list,setList]=useState([]);

   const data =useLoaderData();
   
     useEffect(()=>{
         const storedAppData=getStoredApp();
         const convertedStoredApp=storedAppData.map(id=>parseInt(id))
       const appList=data.filter(app => convertedStoredApp.includes(app.id) );
          setList(appList)
     },[])

     const handleRemove = (id) => {
  removeStoredApp(id);

 
  const updatedList = list.filter(app => app.id !== id);
  setList(updatedList);

  
  toast.success("App uninstalled Successfully ", {
    position: "top-center",
    autoClose: 2000,
  });
};

    return (
       <div>
    <h1 className="text-4xl text-center mb-10 mt-6 font-semibold">
       Your Installed Apps
    </h1>
    <p className='text-center mb-6 '>Explore All Trending Apps on the Market developed by us</p>
     {
  list.map(a => (
    <div key={a.id}>
      <App SingleApp={a} />

      <button
        onClick={() => handleRemove(a.id)}
        className="btn btn-error mt-2 mb-4"
      >
        Uninstall
      </button>
    </div>
  ))
}
</div>
    );
};

export default Installapps;
