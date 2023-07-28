const Part = ({id, name, exercises}) => {
    return (
        <div key={id} >
            <p>{name} {exercises}</p>
        </div>
    )
}

export default Part