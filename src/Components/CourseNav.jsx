import React from 'react';
import { Link } from 'react-router-dom';

const CourseNav = ({ re }) => {
    return (
        <div className='  mt-3 w-full shadow-md  hover:text-yellow-600 hover:shadow-lg  cursor-pointer'>
            <Link to={`/courses/${re.id}`}> <p className='ml-4'>{re.name}</p></Link>
        </div>
    );
};

export default CourseNav; 