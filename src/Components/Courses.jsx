import React, { useEffect, useState } from 'react';
import CourseImg from './CourseImg';
import CourseNav from './CourseNav';

const Courses = () => {
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        fetch('http://localhost:1100/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='flex justify-center mr-12 '>
            <div className=" w-1/3 mt-12 ml-5 mr-3">
                {
                    courses?.map(re => <CourseNav
                        key={re.id}
                        re={re}
                    />)
                }
            </div>
            <div className="grid grid-cols-3 gap-5 py-12 ">
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