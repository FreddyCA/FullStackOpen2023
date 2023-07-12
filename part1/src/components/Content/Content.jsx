import PropTypes from "prop-types";

const Content = (props) => {
    return (
        <>
            <p>{props.part1} {props.exercises1}</p>
            <p>{props.part2} {props.exercises2}</p>
            <p>{props.part3} {props.exercises3}</p>
        </>
    )
}

Content.propTypes = {
    part1: PropTypes.string.isRequired,
    exercises1: PropTypes.number.isRequired,
    part2: PropTypes.string.isRequired,
    exercises2: PropTypes.number.isRequired,
    part3: PropTypes.string.isRequired,
    exercises3: PropTypes.number.isRequired,
};

export default Content