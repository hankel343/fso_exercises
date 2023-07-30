const Filter = ({filterStr, handleChange}) => {

    return (
        <div>
            <p>Filter shown with: </p>
            <input value={filterStr} onChange={handleChange}/>
        </div>
    )
}

export default Filter;