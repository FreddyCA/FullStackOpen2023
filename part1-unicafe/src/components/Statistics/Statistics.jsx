import PropTypes from "prop-types";

const TitleStatistics = () => {
  return <h2>statistics</h2>;
};

const Characteristics = ({ variable, name, percentage }) => {
  return (
    <p>
      {name}: {percentage ? variable + " %" : variable}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, name }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <TitleStatistics />
      { all == 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <Characteristics name={name.good} variable={good} />
          <Characteristics name={name.neutral} variable={neutral} />
          <Characteristics name={name.bad} variable={bad} />
          <Characteristics 
            name="all" 
            variable={all} 
          />
          <Characteristics
            name="average"
            variable={isNaN(average) ? 0 : average}
          />
          <Characteristics
            name="positive"
            variable={isNaN(positive) ? 0 : positive}
            percentage={true}
          />
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  name: PropTypes.object.isRequired,
};

Characteristics.propTypes = {
  variable: PropTypes.number,
  name: PropTypes.string,
  percentage: PropTypes.bool,
};

export default Statistics;
