import { useState } from 'react'

const Entry = ({name, number}) => {
  console.log('Creating entry: ', name, number);

  return (
    <div key={name}>
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
      <p>Filter shown with: </p>
      <input value={filter} onChange={handleFilterChange}/>

      <h2>Add a new entry</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons
        .filter(person => person.name.includes(filter))
        .map((person) => {
        return <Entry key={person.id} name={person.name} number={person.number}/>
      })}
    </div>
  )
}

export default App