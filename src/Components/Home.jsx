import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import homeAmimation from '../assets/login.json';


const Home = () => {
    return (
        <div className=" h-screen">
            <div className="">
                <div className='md:flex md:pt-28  '>
                    <div className="text-7xl h-60 md:h-24  text-yellow-300 mt-20 text-center px-10 md:pl-10  md:w-2/4 lg:text-left lg:px-24 lg:ml-5">
                        <div className=" h-40 md:h-52 ">
                            <Typewriter
                                options={{
                                    strings: ['Learning is a process ', 'That leads to change'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <Link to='/courses'> <button className="btn btn-warning btn-outline">Tes's Start Course</button></Link>
                    </div>
                    <div className="">
                        <Lottie animationData={homeAmimation} loop={true} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;