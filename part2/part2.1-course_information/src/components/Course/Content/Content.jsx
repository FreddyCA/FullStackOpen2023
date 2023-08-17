import PropTypes from "prop-types";
import Part from "./Part/Part";
import Total from "./Total/Total";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
          ></Part>
        );
      })}
      <Total parts={parts}></Total>
    </div>
  );
};

Content.propTypes = {
  parts: PropTypes.array,
};

export default Content;
