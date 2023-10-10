import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { CourseEditor } from '../CourseEditor';
import TermPage from './TermPage';
const CourseFormForUrl = ({courses}) => {
  const { id } = useParams();
  return <CourseEditor id={id} course={courses[id]} />;
};

const Dispatcher = ({courses}) => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<TermPage courses={courses}/>}></Route>
            <Route path="/courses/:id/edit" element={<CourseFormForUrl courses={courses} />} />
        </Routes>
    </BrowserRouter>
};

export default Dispatcher;