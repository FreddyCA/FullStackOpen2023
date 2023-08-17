import PropTypes from "prop-types";

const Total = ({parts}) => {
    let total = 0
    parts.forEach(element => {
        total += element.exercises
    })
    return<p><b>total of {total} exercises</b></p>
}

Total.propTypes = {
    parts: PropTypes.array,
};

export default Total