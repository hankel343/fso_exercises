import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Entries from './components/Entries';

const Entry = ({id, name, number}) => {
  console.log('Creating entry: ', name, number);
  return (
    <div key={id}>
      <p>{name} {number}</p>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    console.log(event.target);

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons[-1].id + 1
    }

    if(containsObject(personObject)) {
      alert(`${newName} already exists in the phone book.`);
      return;
    }

    setPersons(persons.concat(personObject));

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