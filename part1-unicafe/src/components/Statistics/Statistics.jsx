import PropTypes from "prop-types";
import StatisticLine from "../StatisticLine/StatisticLine";

const TitleStatistics = () => {
  return <h2>statistics</h2>;
};

const Statistics = ({ good, neutral, bad, name }) => {
  const all = good + neutral + bad;
  const average = parseFloat(((good - bad) / all).toFixed(1));
  const positive = parseFloat(((good / all) * 100).toFixed(1));

  return (
    <div>
      <TitleStatistics />
      { all == 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
            <tbody>
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
            </tbody>
        </table>
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
