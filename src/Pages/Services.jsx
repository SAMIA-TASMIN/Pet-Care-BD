import { Star } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';


const Services = () => {
    const data = useLoaderData()
  ;
  
    return (
   
     <div className=' max-w-7xl mx-auto my-10'>
                <h1 className='md:text-4xl my-5 font-semibold underline '>Popular Winter Care Services </h1>
            <div className='grid md:grid-cols-3 gap-5  '>
                {
                    data.map((singleData,idx)=><ServiceCard key={idx} singleData={singleData}></ServiceCard>)
                }
               
            </div>
            </div>
    );
};

export default Services;




