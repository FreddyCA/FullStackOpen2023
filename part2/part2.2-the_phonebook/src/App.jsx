import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const duplicateName = persons.some((person) => person.name === newName);

    if (!duplicateName) {
      if (newName.trim() !== "") {
        const newPerson = { name: newName, number: newNumber };
        setPersons((allPersons) => [...allPersons, newPerson]);
      }
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <p key={person.name + "-" + index}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
