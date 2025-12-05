import { Star } from 'lucide-react';

import { Link } from 'react-router';

const ServiceCard = ({singleData}) => {
    const {serviceId,serviceName,providerName,providerEmail,price,rating,slotsAvailable,description,image,category}= singleData;
    return (
            <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200">
      
 
      <img
        src={image}
        alt={serviceName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-3">
        
   
        <h2 className="text-xl font-semibold text-gray-800">
          {serviceName}
        </h2>

      
       <div className='flex justify-between'>
         <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {/* Stars */}
        <Star fill="yellow"/>
        <Star fill="yellow"/>
        <Star fill="yellow"/>
        <Star fill="yellow"/>
        <Star fill="yellow"/>

          <span className="ml-1 text-gray-600 text-sm">({rating})</span>
        </div>

         <p className="text-lg font-semibold text-green-600">
          ${price}
        </p>

       </div>

    
       

        {/* Button */}
        <Link to={`/service/${serviceId}`}>
        <button className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          View Details
        </button>
        </Link>
      </div>

    </div>
    );
};

export default ServiceCard;