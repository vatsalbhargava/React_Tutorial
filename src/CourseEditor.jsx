import { useFormData } from './utilities/useFormData';
import { useNavigate } from 'react-router-dom';
const validateCourseData = (key, val) => {
  switch (key) {
    case 'Title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';    case 'New Meeting Time':
    case 'Meeting time':
      return val == '' || /^[MTuWThF]+ ((0|1)[0-9]|2[1-3]):([0-5][0-9])-((0|1)[0-9]|2[1-3]):([0-5][0-9])/.test(val) ? '' : 'must contain days and start-end, e.g., TuTh 11:00-12:20';
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

export const CourseEditor = ({course}) => {
  const [state, change] = useFormData(validateCourseData, course);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form onSubmit={null} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="Title" text="New Course Title" state={state} change={change} />
      <InputField name="Meeting time" text="New Meeting Time" state={state} change={change} />
      <ButtonBar />
    </form>
  )
};