import PropTypes from "prop-types";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

Course.propTypes = {
  courses: PropTypes.array,
};
export default Course;
