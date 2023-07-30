const Entries = ({persons, filterStr}) => {
    return persons
        .filter(person => person.name.includes(filterStr))
        .map((person) => {
            return (
                <div key={person.id}>
                    <p>{person.name} {person.number}</p>
                </div>
            )
        })
}

export default Entries