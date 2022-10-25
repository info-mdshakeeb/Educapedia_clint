import React from 'react';
import { Link } from 'react-router-dom';

const CourseImg = ({ re }) => {
    return (
        <Link to={`/courses/${re.id}`} className='card w-auto relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
            <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={re.picture}
                alt=''
            />
            <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 '>
                <h2 className='text-2xl text-white r'>{re.name}</h2>
            </div>
        </Link>
    );
};

export default CourseImg;