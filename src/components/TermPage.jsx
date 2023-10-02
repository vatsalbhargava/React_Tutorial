import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import { useState } from "react";

const TermPage = ({courses}) => {
    const [term, changeTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)?
        selected.filter(x => x !== item): [...selected, item]
    );

    console.log(selected);
    return(
        <div>
            <TermSelector term={term} changeTerm={changeTerm}></TermSelector>
            <CourseList term={term} courses={courses} selected={selected} toggleSelected={toggleSelected}></CourseList>
        </div>
    );
}
export default TermPage;
