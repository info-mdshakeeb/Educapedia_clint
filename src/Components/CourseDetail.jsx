import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const bookdetail = useLoaderData()
    const { name, picture, description } = bookdetail;

    return (
        <div className=" w-2/3  mx-auto mt-10">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={picture} alt=""
                    className='object-cover '
                /></figure>
                <div className="card-body">
                    <h2 className="card-title ">New course is released!</h2>
                    <p className='text-2xl'>{name}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;