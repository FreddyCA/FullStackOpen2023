import PropTypes from "prop-types";

const PersonForm = ({
  addName,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        <label htmlFor="name">name:</label>
        <input id="name" value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="number">number:</label>
        <input
          id="number"
          value={newNumber}
          onChange={handleNumberChange}
        ></input>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

PersonForm.propTypes = {
  addName: PropTypes.func,
  newName: PropTypes.string,
  handleNameChange: PropTypes.func,
  newNumber: PropTypes.string,
  handleNumberChange: PropTypes.func,
};

export default PersonForm;
