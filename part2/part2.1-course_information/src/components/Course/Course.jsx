import PropTypes from "prop-types";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};
export default Course;
