import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { CourseEditor } from '../CourseEditor';
import TermPage from './TermPage';
const CouresFormForUrl = ({courses}) => {
  const { term, number } = useParams();
  return <CourseEditor id={term + number} course={courses[term[0] + number]} />;
};

const Dispatcher = ({courses}) => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<TermPage allCourses={courses}/>}></Route>
        <Route path="/courses/:id/edit" element={<CouresFormForUrl courses={courses} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;