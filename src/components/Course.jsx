import './Course.css';
import { isConflict } from '../utilities/Conflict';
import { Link } from 'react-router-dom';

const Course = ({ course, selected, toggleSelected }) => {
  console.log(course.term[0] + course.number);
  return <div 
      className="card m-1 p-2" 
      onClick={isConflict(course, selected) ? null : () => toggleSelected(course)}
  >
      <div className={`card-body ${selected.includes(course) ? 'selected' : isConflict(course, selected) ? 'conflict' : ''}`}>
          <h5 className="card-title">{course.term} CS {course.number}</h5>
          <div className="card-desc">
            <p className="card-text">{course.title}</p>
          </div>
          <div className="edit-course-form">
            {/* put the form in here!!! */}
            
            <Link to={`/courses/${course.term + course.number}/edit`}>edit</Link>
          </div>
          <hr></hr>
          <p className="card-times">{course.meets}</p>
      </div>
  </div>
};

export default Course;