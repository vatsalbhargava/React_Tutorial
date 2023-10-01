import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import { useState } from "react";

const TermPage = ({courses}) => {
    const [term, changeTerm] = useState("Fall");

    return(
        <div>
            <TermSelector term={term} changeTerm={changeTerm}></TermSelector>
            <CourseList term={term} courses={courses}></CourseList>
        </div>
    );
}
export default TermPage;
