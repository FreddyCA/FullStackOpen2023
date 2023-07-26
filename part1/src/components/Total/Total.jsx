import PropTypes from "prop-types";

const Total = ({courseParts}) => {
    
    const exercisesCounts = courseParts.map(value => value.exercises)

    let sum = 0;
    exercisesCounts.forEach((value) => {
        sum += value
    })

    return <p>Number of exercises {sum}</p>
}

Total.propTypes = {
    courseParts: PropTypes.array.isRequired,
};

export default Total