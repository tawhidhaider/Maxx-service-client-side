import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {_id,title,price,details,image_url} = service;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                <PhotoProvider>
                <PhotoView src={image_url}>
                <img src={image_url} style={{ objectFit: 'cover' }} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-800">
                            {details.length>100 ?
                               <>{details.slice(0,100)+ '...'}<Link to={`/services/${_id}`}>Read more</Link></>
                               :
                               <>{details}</>
                            }
                            
                            
                        </p>
                        <p>Price:${price}</p>
                    </div>
                    <Link to={`/services/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-400 text-gray-50">view-details</button>
                    </Link>
                </div>
            </div>
            

        </div>
    );
};

export default ServiceCard;