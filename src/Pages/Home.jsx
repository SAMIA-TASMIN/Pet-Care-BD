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
           <Services></Services>
            
        </div>
    );
};

export default Home;