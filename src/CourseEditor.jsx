import { useDbUpdate } from './utilities/firebase';
import { useFormData } from './utilities/useFormData';
import { useNavigate } from 'react-router-dom';

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return val == '' || /^[MTuWThF]+ (([0-2]?[0-9]):([0-5][0-9])-([0-2]?[0-9]):([0-5][0-9]))/.test(val) ? '' : 'must contain days and start-end, e.g., TuTh 11:00-12:20';
      default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

export const CourseEditor = ({id, course}) => {
  const [state, change] = useFormData(validateCourseData, course);
  const key = id[0] + id.slice(-3);
  const [ update, result ] = useDbUpdate(`/courses/${key}`);
  const navigate = useNavigate();

  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
    navigate('/');
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="title" text="New Course Title" state={state} change={change} />
      <InputField name="meets" text="New Meeting Time" state={state} change={change} />
      <ButtonBar ButtonBar message={result?.message}/>
    </form>
  )
};