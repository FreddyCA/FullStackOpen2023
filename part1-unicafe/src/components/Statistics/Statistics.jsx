import PropTypes from "prop-types";

const TitleStatistics = () => {
    return <h2>statistics</h2>
}

const Characteristics = ({variable, name}) => {
    return <p>{name}: {variable}</p>
}

const Statistics = ({good, neutral, bad, name}) => {

    return <div>
        <TitleStatistics />
        <Characteristics variable ={good} name={name.good} />
        <Characteristics variable ={neutral} name={name.neutral} />
        <Characteristics variable ={bad} name={name.bad} />
    </div>
}


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    name: PropTypes.object.isRequired,
};

Characteristics.propTypes = {
    variable: PropTypes.number,
    name: PropTypes.string
};

export default Statistics