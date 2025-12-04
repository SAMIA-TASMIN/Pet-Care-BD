import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {id} = useParams()
  
    return (
        <div>
            serviceDetails
        </div>
    );
};

export default ServiceDetails;