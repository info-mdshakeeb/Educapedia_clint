import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import errorAnimation from '../assets/error.json';

const Error = () => {
    return (
        <div className="h-screen w-3/5 mx-auto pt-20 md:pt-10 text-center ">
            <Lottie className='' animationData={errorAnimation} loop={true} />
            <p className=' text-red-400'>*Page is not Found );</p>
            <p className=' text-gray-300'>The page you are looking for might have been removed <br />
                had its name changed or is temporarily unavailable.</p>
            <div className="pt-8 ">
                <Link to='/'><button className='btn btn-warning'>Go Back to home</button></Link>
            </div>
        </div>
    );
};

export default Error;