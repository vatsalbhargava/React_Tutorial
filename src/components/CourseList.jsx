import './CourseList.css';
import Course from './Course.jsx';

const CourseList = ({term, courses}) => (
    <div className="courses-grid">
      { Object.entries(courses).filter(([id, course]) => course.term == term).map(([id,course]) => 
      <div key={id}><Course course={course}/></div> ) }
    </div>
);

export default CourseList;