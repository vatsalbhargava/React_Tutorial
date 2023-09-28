import './CourseList.css';
import Course from './Course.jsx';

const CourseList = ({courses}) => (
    <div className="courses-grid">
      { Object.entries(courses).map(([id,course]) => 
      <div key={id}><Course course={course}/></div> ) }
    </div>
);

export default CourseList;