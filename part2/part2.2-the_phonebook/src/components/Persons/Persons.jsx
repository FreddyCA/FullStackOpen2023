import PropTypes from "prop-types";

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <p key={person.name + "-" + index}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

Persons.propTypes = {
  persons: PropTypes.array,
};

export default Persons;
