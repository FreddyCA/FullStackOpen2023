import { useState } from "react";
import Filter from "./components/Filter/Filter";
import FilterPersons from "./components/FilterPersons/FilterPersons";
import PersonForm from "./components/PersonForm/PersonForm";
import Persons from "./components/Persons/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPerson, setFilterPerson] = useState("");

  const [filterAll, setFilterAll] = useState([]);
  const [filterWatch, setFilterWatch] = useState(false);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    const nameFilter = e.target.value;
    setFilterPerson(nameFilter);
    filter(nameFilter);
  };

  const filter = (name) => {
    if (name.length > 2) {
      const filterPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilterAll(filterPersons);
      setFilterWatch(filterPersons.length > 0);
    } else {
      setFilterAll([]);
      setFilterWatch(false);
    }
  };

  const addName = (e) => {
    e.preventDefault();
    const duplicateName = persons.some((person) => person.name === newName);

    if (!duplicateName) {
      if (newName.trim() !== "" && newNumber.trim() !== "") {
        const newPerson = { name: newName, number: newNumber };
        setPersons((allPersons) => [...allPersons, newPerson]);
        setNewName("");
        setNewNumber("");
      }
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterPerson={filterPerson}
        handleFilterChange={handleFilterChange}
      />
      {filterWatch && <FilterPersons filterAll={filterAll} />}

      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
