import { useState } from 'react'

const Person = ({name}) => {

  return (
    <div key={name}>
      <p>{name}</p>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    console.log(event.target);

    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject));
    setNewName('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person name={person.name}/>
      ))}
    </div>
  )
}

export default App