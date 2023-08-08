import personService from '../services/addperson';
import Button from './Button';

const Entries = ({ persons, filterStr }) => {

    const handleDeleteClick = (name, id) => {
        if (window.confirm("delete " + name + '?')) {
            personService
                .deleteEntry(id)
                    .then(res => {
                        console.log("Entry deleted successfully", res);
                    })
                    .catch(err => {
                        console.log("Error deleting entry", err)
                    })
        }
    }

    if (filterStr === '') {
        return persons.map((person) => (
            <div key={person.id}>
                <p>{person.name} {person.number}</p>
                <Button text={"delete"} 
                        clickHandler={() => handleDeleteClick(person.name, person.id)}
                        id={person.id}/>
            </div>
        ));
    }

    const filteredPersons = persons.filter(person => person.name.includes(filterStr));
    return filteredPersons.map((person) => (
        <div key={person.id}>
            <p>{person.name} {person.number}</p>
            <Button text={"delete"} 
                        clickHandler={() => handleDeleteClick(person.name, person.id)}
                        id={person.id}/>
        </div>
    ));
};

export default Entries