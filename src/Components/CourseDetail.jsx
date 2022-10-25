import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authUser } from '../Context/UserContext';

const CourseDetail = () => {
    const bookdata = useLoaderData()
    const { setBookDetails } = useContext(authUser);
    const { name, picture, description } = bookdata;
    setBookDetails(bookdata);
    return (
        <div className=" w-4/5 lg:w-3/5 mx-auto mt-10">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={picture} alt=""
                    className='object-cover '
                /></figure>
                <div className="card-body">
                    <h2 className="card-title ">New course is released!</h2>
                    <p className='text-2xl'>{name}</p>
                    <p>{description}</p>
                    <div className="flex justify-end mt-4">
                        <Link to='/checkout'> <button className='btn btn-success'>Get premium access</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetail;