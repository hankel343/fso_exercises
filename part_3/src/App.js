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

    if(containsObject(personObject)) {
      alert(`${newName} already exists in the phone book.`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
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