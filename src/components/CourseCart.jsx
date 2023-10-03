export const CourseCart = ({selected}) => (
    <div className="course-cart">
        {
            selected.length === 0 ?
            <h2>You have no courses selected.</h2>
            : selected.map(x => {
                console.log(x);
                return(
                    <div key={x.id}>
                        CS {x.number}: {x.title}, {x.meets}
                    </div>
                );
            })
        }
    </div>
)

export default CourseCart;