import React, { Component } from 'react';

import { createBrowserRouter,
   } from "react-router";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Allapps from '../pages/Apps/Allapps';
import AppDetails from '../pages/Apps/AppDetails';
import Installapps from '../pages/Apps/Installapps';
import ErrorApps from '../pages/ErrorApps';
 
  export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
        index: true ,
        loader:()=>fetch('App.json'),
        Component:Home,
    },
    {
    path:'allapps',
    loader:()=>fetch('App.json'),
     Component: Allapps,
     errorElement:<ErrorApps></ErrorApps>,
    },
    {
      path:'install',
      Component:Installapps,
      loader:()=>fetch('App.json'),
    },
    {
    path:'appDetails/:id',  
    loader:()=>fetch('App.json'),
     Component:AppDetails,
    }


   ]
  },
]);
