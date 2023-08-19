import PropTypes from "prop-types";

const FilterPersons = ({ filterAll }) => {
  return (
    <div>
        {filterAll.map((filter, index) => (
          <p key={filter.name + "-" + index}>
            {filter.name} {filter.number}
          </p>
        ))}
    </div>
  );
};

FilterPersons.propTypes = {
    filterAll: PropTypes.array,
};

export default FilterPersons;
