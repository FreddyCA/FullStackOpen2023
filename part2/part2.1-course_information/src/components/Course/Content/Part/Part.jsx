import PropTypes from "prop-types";

const Part = ({name, exercises}) => {
    return <p>{name} {exercises}</p>
}

Part.propTypes = {
    name: PropTypes.string,
    exercises: PropTypes.number
};
export default Part