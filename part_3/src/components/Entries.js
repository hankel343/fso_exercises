import personService from '../services/addperson';
import Button from './Button'

const Entries = ({ persons, filterStr }) => {

    const deleteEntry = (person) => {
        personService
            .getAll()
    }

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
            <Button text={'Delete'} clickHandler={deleteEntry} />
        </div>
    ));
};

export default Entries