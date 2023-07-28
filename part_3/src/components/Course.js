import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
    console.log(course);
    return (
        <div key={course.id}>
            <Header text={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course;