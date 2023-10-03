import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import { useState } from "react";
import SelectedModal from './SelectedModal';
import CourseCart from './CourseCart';

const TermPage = ({courses}) => {
    const [term, changeTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)?
        selected.filter(x => x !== item): [...selected, item]
    );
    
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    console.log(selected);
    return(
        <div>
            <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4">Course Plan</i></button>
            
            <SelectedModal open={open} close={closeModal}>
                <CourseCart selected={selected}/>
            </SelectedModal>
            <TermSelector term={term} changeTerm={changeTerm}></TermSelector>
            <CourseList term={term} courses={courses} selected={selected} toggleSelected={toggleSelected}></CourseList>
        </div>
    );
}
export default TermPage;
