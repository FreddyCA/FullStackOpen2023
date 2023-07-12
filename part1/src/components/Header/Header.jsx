import PropTypes from "prop-types";

const Header = (props) => {
    return (
        <h1>
            {props.nameCourse}
        </h1>
    )
}

Header.propTypes = {
    nameCourse: PropTypes.string.isRequired,
};

export default Header