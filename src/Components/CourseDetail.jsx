import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetail = () => {
    const bookdata = useLoaderData()
    const { name, picture, description } = bookdata;
    return (
        <div className=" w-4/5 lg:w-3/5 mx-auto mt-10" ref={ref}>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={picture} alt=""
                    className='object-cover '
                /></figure>
                <div className="card-body">
                    <h2 className="card-title ">New course is released!</h2>
                    <div className="flex justify-between">
                        <p className='text-2xl'>{name}</p>
                        <Pdf targetRef={ref} filename={name}>
                            {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Download</button>}
                        </Pdf>
                    </div>
                    <p>{description}</p>
                    <div className="flex justify-end mt-4">
                        <Link to={`/checkout/${bookdata.id}`}> <button className='btn btn-success'>Get premium access</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetail;