import './Course.css';
import { isConflict } from '../utilities/Conflict';
import { Link } from 'react-router-dom';
import { useAuthState } from '../utilities/firebase';
import { useProfile } from '../utilities/profile';

const Course = ({ course, selected, toggleSelected }) => {
  const [user] = useAuthState();
  const [profile, profileLoading, profileError] = useProfile();

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
            {profile?.isAdmin && <Link to={`/courses/${course.term + course.number}/edit`}>Edit Info</Link>}
          </div>
          <hr></hr>
          <p className="card-times">{course.meets}</p>
      </div>
  </div>
};

export default Course;