import React from 'react';

const CourseNav = ({ re }) => {
    return (
        <div className='  mt-3 w-full shadow-md  text-gray-500 hover:text-gray-600 hover:shadow-lg  cursor-pointer'>
            <p className='ml-4'>{re.name}</p>
        </div>
    );
};

export default CourseNav; 