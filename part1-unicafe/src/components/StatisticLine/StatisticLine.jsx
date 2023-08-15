import PropTypes from "prop-types";

const StatisticLine = ({ variable, name, percentage }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{percentage ? variable + " %" : variable}</td>
    </tr>
  );
};

StatisticLine.propTypes = {
  variable: PropTypes.number,
  name: PropTypes.string,
  percentage: PropTypes.bool,
};

export default StatisticLine;
