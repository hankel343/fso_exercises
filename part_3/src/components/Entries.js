const Entries = ({ persons, filterStr }) => {
  if (filterStr === '') {
    return persons.map((person) => (
      <div key={person.id}>
        <p>{person.name} {person.number}</p>
      </div>
    ));
  }

  const filteredPersons = persons.filter(person => person.name.includes(filterStr));
  return filteredPersons.map((person) => (
    <div key={person.id}>
      <p>{person.name} {person.number}</p>
    </div>
  ));
};

export default Entries