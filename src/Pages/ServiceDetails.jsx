
import { Link, useLoaderData, useParams } from 'react-router';
import React from 'react';
import { Star, Mail, User, Calendar, DollarSign, Tag } from 'lucide-react';
import toast from 'react-hot-toast';


const ServiceDetails = () => {

    const handleSubmit =(e)=>{
        e.preventDefault();
        e.target.reset()
        toast.success('Succesfully Booked');
    }
    const {id} = useParams()
  const data = useLoaderData()
  const singleData = data.find(item=>item.serviceId==id)
  const {serviceId,serviceName,providerName,providerEmail,price,rating,slotsAvailable,description,image,category}= singleData;
  
   return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 px-4 my-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Card - Compact Version */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          
          {/* Image and Info Section - Side by Side on Desktop */}
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Image */}
            <div className="relative h-64 md:h-full">
              <img 
                src={image} 
                alt={serviceName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Tag className="w-3 h-3 text-indigo-600" />
                {category}
              </div>
              <div className={`absolute top-3 right-3 ${slotsAvailable > 0 ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                {slotsAvailable} Slots
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title & Price */}
              <div className="flex justify-between items-start mb-3">
                <h1 className="text-2xl font-bold text-gray-900 flex-1">
                  {serviceName}
                </h1>
                <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg ml-3">
                  <div className="text-xl font-bold">৳{price}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">{rating}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {description}
              </p>

              {/* Provider Info */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-gray-900">{providerName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm text-gray-700">{providerEmail}</span>
                </div>
              </div>

              {/* Book Service Form */}
              <div className="border-t pt-4">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Book Service</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                     
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    
                    />
                  </div>

                  <button
                    
                    className={`w-full py-3 rounded-lg font-bold transition-all bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer`}
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;



