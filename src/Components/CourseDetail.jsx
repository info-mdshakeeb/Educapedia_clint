import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetail = () => {
    const bookdata = useLoaderData()
    const { name, picture, description } = bookdata;
    return (
        <div className=" w-4/5 md:w-3/4 lg:w-1/2 mx-auto mt-10 pb-5 " ref={ref}>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={picture} alt=""
                    className='object-cover '
                /></figure>
                <div className="card-body">
                    <h2 className="card-title ">New course is released!</h2>
                    <div className="flex justify-between my-10">
                        <p className='text-2xl'>{name}</p>
                        <Pdf targetRef={ref} filename={name}>
                            {({ toPdf }) => <FaDownload style={{ color: "red", width: '30px', height: '35px' }}
                                className=" cursor-pointer mx-10"
                                onClick={toPdf}></FaDownload>}
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