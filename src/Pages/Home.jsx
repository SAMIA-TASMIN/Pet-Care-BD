import { div } from 'framer-motion/client';
import React from 'react';
import 'animate.css';
import { useLoaderData } from 'react-router';
import SlideCard from '../Components/SlideCard';
import Services from './Services';

const Home = () => {
    const data = useLoaderData()
   
    return (
        <div>
         
            <SlideCard data={data}></SlideCard>
            <div className=' max-w-7xl mx-auto my-10'>
                <h1 className='md:text-4xl my-5 font-semibold underline    '>Popular Winter Care Services </h1>
            <div className='grid md:grid-cols-3 gap-5  '>
                {
                    data.map((singleData,idx)=><Services key={idx} singleData={singleData}></Services>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Home;