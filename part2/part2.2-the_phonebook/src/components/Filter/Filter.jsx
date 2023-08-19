import PropTypes from "prop-types";

const Filter = ({filterPerson, handleFilterChange}) => {
    return <div>
        <label htmlFor="filter">filter shown with</label>
        <input
          id="filter"
          value={filterPerson}
          onChange={handleFilterChange}
        ></input>
    </div>
}

Filter.propTypes = {
    filterPerson: PropTypes.string,
    handleFilterChange: PropTypes.func,
};

export default Filter