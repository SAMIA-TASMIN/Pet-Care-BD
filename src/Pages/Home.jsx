import { div } from 'framer-motion/client';
import React from 'react';
import { useLoaderData } from 'react-router';
import SlideCard from '../Components/SlideCard';

const Home = () => {
    const data = useLoaderData()
   
    return (
        <div>
         
            <SlideCard data={data}></SlideCard>
        </div>
    );
};

export default Home;