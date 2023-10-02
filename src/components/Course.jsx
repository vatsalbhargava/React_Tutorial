import './Course.css';

const Course = ({course, selected, toggleSelected}) => (
    <div className="card m-1 p-2">
    <div className={`card-body${selected.includes(course) ? ' selected' : ''}`} onClick={() => toggleSelected(course)}>      <h5 className="card-title">{course.term} CS {course.number}</h5>
      <div className="card-desc">
        <p className="card-text">{course.title}</p>
      </div>
      <hr></hr>
      <p className="card-times">{course.meets}</p>
    </div>
  </div>
)

export default Course;