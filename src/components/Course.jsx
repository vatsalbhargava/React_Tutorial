import './Course.css';
import { isConflict } from '../utilities/Conflict';

const Course = ({ course, selected, toggleSelected }) => (
  <div 
      className="card m-1 p-2" 
      onClick={isConflict(course, selected) ? null : () => toggleSelected(course)}
  >
      <div className={`card-body ${selected.includes(course) ? 'selected' : isConflict(course, selected) ? 'conflict' : ''}`}>
          <h5 className="card-title">{course.term} CS {course.number}</h5>
          <div className="card-desc">
              <p className="card-text">{course.title}</p>
          </div>
          <hr></hr>
          <p className="card-times">{course.meets}</p>
      </div>
  </div>
);

export default Course;