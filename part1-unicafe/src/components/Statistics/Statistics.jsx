import PropTypes from "prop-types";
import StatisticLine from "../StatisticLine/StatisticLine";

const TitleStatistics = () => {
  return <h2>statistics</h2>;
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
          <StatisticLine name={name.good} variable={good} />
          <StatisticLine name={name.neutral} variable={neutral} />
          <StatisticLine name={name.bad} variable={bad} />
          <StatisticLine 
            name="all" 
            variable={all} 
          />
          <StatisticLine
            name="average"
            variable={isNaN(average) ? 0 : average}
          />
          <StatisticLine
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

export default Statistics;
