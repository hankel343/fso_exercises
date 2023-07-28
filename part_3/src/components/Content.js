import Part from "./Part";

const Content = ({parts}) => {
    const sum = parts.reduce((acc, part) => acc + part.exercises, 0);
    const partsJSX = parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
    ));

    return (
        <div>
            {partsJSX}
            <p><strong>a total of {sum} exercises</strong></p>
        </div>
    )
}

export default Content