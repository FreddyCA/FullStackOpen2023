import PropTypes from "prop-types";

const Button = ({setVariable, variable, name}) => {

    return<button onClick={() => setVariable(variable + 1)}>{name}</button>
}

Button.propTypes = {
    setVariable: PropTypes.func,
    variable: PropTypes.number,
    name: PropTypes.string,
};
export default Button