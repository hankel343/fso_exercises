import { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './services/addperson';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Entries from './components/Entries';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    console.log(event.target);

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if(containsObject(personObject)) {
      alert(`${newName} already exists in the phone book.`);
      return;
    }

    const newPerson = personService.create(personObject)
    setPersons(persons.concat(newPerson));
    console.log(persons);
    
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  }

  const containsObject = (obj) => {
    for (let i = 0; i < persons.length; i++) {
      if (JSON.stringify(obj) === JSON.stringify(persons[i])) {
        return true;
      }
    }
    return false;
  }

  // fetch data from server
  useEffect(() => {
    console.log("useEffect()");
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('promise fulfilled', res);
        setPersons(res.data);
      })
  }, []);

  return (
    <div>
      
      <h2>Phonebook</h2>
      <Filter filterStr={filter} handleChange={handleFilterChange} />

      <h2>Add a new entry</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Entries persons={persons} filterStr={filter}/>
    </div>
  )
}

export default App