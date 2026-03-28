import React from 'react';
import Download from "../../assets/icon-downloads.png"
import Rating from "../../assets/icon-ratings.png"
import { Link } from 'react-router';


const App = ({SingleApp}) => {
    
     const {image,title,ratingAvg,downloads,id}=SingleApp;
        const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};


    return (
      <Link to={`/appDetails/${id}`}>
       <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={image}
      className="w-full h-48 object-cover"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    
    <p className='text-center'>{title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline"><span><img src={Download} className="w-4 h-4 object-contain" alt="" /></span> {formatNumber(downloads)}</div>
      <div className="badge badge-outline"><span><img src={Rating} className="w-4 h-4 object-contain" alt="" /></span>{ratingAvg}</div>
    </div>
  </div>
</div>
      
      </Link>
    );
};

export default App;