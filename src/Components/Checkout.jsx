import Lottie from 'lottie-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import thankAmimation from '../assets/thanks.json';

const Checkout = () => {
    const data = useLoaderData()
    const { name, id } = data;
    return (
        <div className='text-center mt-10'>
            <div className="w-1/5 mx-auto">
                <Lottie animationData={thankAmimation} loop={false} />
            </div>
            <p> you are selected ID number -{id}</p>
            <p className=' text-2xl'>{name}</p>
        </div>
    );
};

export default Checkout;