
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';


const Services = () => {
    const data = useLoaderData()
  ;
  
    return (
   
     <div className='bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto my-10 '>
                <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
           🐕 Our Service For Your Pets
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Keep your furry friends safe and comfortable during the cold season
          </p>
        </div>
            <div className='grid md:grid-cols-3 gap-5  '>
                {
                    data.map((singleData,idx)=><ServiceCard key={idx} singleData={singleData}></ServiceCard>)
                }
               
            </div>
            </div>
    );
};

export default Services;




