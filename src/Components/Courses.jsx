import React, { useEffect, useState } from 'react';
import CourseImg from './CourseImg';
import CourseNav from './CourseNav';

const Courses = () => {
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        fetch('https://educapedia-server-site.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='md:flex justify-center md:mr-12 '>
            <div className="w-full md:w-1/3 mt-12 md:ml-5 md:mr-3 text-center md:text-left">
                {
                    courses?.map(re => <CourseNav
                        key={re.id}
                        re={re}
                    />)
                }
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-5 md:px-0">
                {
                    courses?.map(re => <CourseImg
                        key={re.id}
                        re={re}
                    />)
                }
            </div>
        </div>
    );
};

export default Courses;