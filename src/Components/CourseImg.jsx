import React from 'react';

const CourseImg = ({ re }) => {
    return (
        <div className='card w-auto relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
            <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={re.picture}
                alt=''
            />
            <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>

            </div>
        </div>
    );
};

export default CourseImg;