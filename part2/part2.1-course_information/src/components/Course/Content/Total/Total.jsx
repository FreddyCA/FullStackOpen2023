import PropTypes from "prop-types";

const Total = ({parts}) => {
    const sum = parts.reduce((acumulator, part) => {
        return acumulator + part.exercises
    }, 0);

    return<p><b>total of {sum} exercises</b></p>
}

Total.propTypes = {
    parts: PropTypes.array,
};

export default Total