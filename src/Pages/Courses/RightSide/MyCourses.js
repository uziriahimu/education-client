import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';


const MyCourses = () => {
    const courses = useLoaderData()
    return (
        <div>
            {
                courses.map(course => <CourseDetails
                    key={course.id}
                    course={course}></CourseDetails>)
            }
        </div>
    );
};


export default MyCourses;