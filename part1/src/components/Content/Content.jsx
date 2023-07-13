import PropTypes from "prop-types";

const Content = (props) => {
    return (
        <>
            <p>{props.part1.name} {props.part1.exercises}</p>
            <p>{props.part2.name} {props.part2.exercises}</p>
            <p>{props.part3.name} {props.part3.exercises}</p>
        </>
    )
}

Content.propTypes = {
    part1: PropTypes.object.isRequired,
    part2: PropTypes.object.isRequired,
    part3: PropTypes.object.isRequired,
};

export default Content