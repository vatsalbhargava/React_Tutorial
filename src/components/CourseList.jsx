import './CourseList.css';
import Course from './Course.jsx';
import { useState } from 'react';

const CourseList = ({term, courses, selected, toggleSelected}) => {
  return <div className="courses-grid">
    { Object.entries(courses).filter(([id, course]) => course.term == term).map(([id,course]) => 
    <div key={id}><Course course={course} selected={selected} toggleSelected={toggleSelected}/></div> ) }
  </div>
};

export default CourseList;