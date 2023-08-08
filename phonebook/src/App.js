import { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './services/addperson';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Entries from './components/Entries';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    console.log(event.target);

    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (containsObjectName(personObject)) {
      if (window.confirm(personObject.name + " is already in the phone book. Would you like to replace the old number with a new one?")) {
        personObject.id = getIdByName(personObject.name);
        
        personService
          .update(personObject)
          .then(res => {
            console.log(personObject.name + " updated successfully", res);
          })
          .catch(err => {
            console.log(personObject.name + " not updated", err);

            setToastMsg(
              `Information for ${personObject.name} has already been removed from the server`
            );

            setTimeout(() => {
              setToastMsg(null)
            }, 5000);
          })
      }
      return;
    }

    personService
      .create(personObject)
      .then(res => {
        setPersons(persons.concat(res));
        console.log(`Added ${personObject.name}`);
        setToastMsg(
          `Added ${personObject.name}`
        );

        setTimeout(() => {
          setToastMsg(null)
        }, 5000);
      })
      .catch(err => {
        console.log("entering the catch clause");
        setToastMsg(
          `Information for ${personObject.name} has already been removed from the server`
        );

        setTimeout(() => {
          setToastMsg(null)
        }, 5000);
      })

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

  const containsObjectName = (obj) => {
    for (let i = 0; i < persons.length; i++) {
      if (obj.name === persons[i].name) {
        return true;
      }
    }
    return false;
  }

  const getIdByName = (name) => {
    for (let i = 0; i < persons.length; i++) {
      if (name === persons[i].name)
        return (i+1);
    }

    return -1;
  }

  // fetch data from server
  useEffect(() => {
    console.log("useEffect()");
    personService
      .getAll()
      .then(res => {
        console.log('getAll() promise fulfilled', res);
        setPersons(res);
      })
  }, []);

  return (
    <div>
      
      <h2>Phonebook</h2>
      <Notification message={toastMsg}/>
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