import PropTypes from "prop-types";

const StatisticLine = ({ variable, name, percentage }) => {
  return (
    <p>
      {name}: {percentage ? variable + " %" : variable}
    </p>
  );
};

StatisticLine.propTypes = {
  variable: PropTypes.number,
  name: PropTypes.string,
  percentage: PropTypes.bool,
};

export default StatisticLine;
