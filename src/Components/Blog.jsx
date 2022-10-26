import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className=" shadow-xl mt-5 p-4 m-5 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>4.1 what is cors?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </div>
            <div className=" shadow-xl mt-5 m-5 p-4 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>4.2 Why are you using firebase? What other options do you have to implement authentication?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br />
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
            <div className=" shadow-xl mt-5 m-5 p-4 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>4.3 How does the private route work?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className=" shadow-xl mt-5 p-4 m-5 md:w-3/5 md:mx-auto">
                <p  ><span className='text-2xl mx-2'> Q.</span>4.4 What is Node? How does Node work?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blog;

