import Part from "./Part";

const Content = ({parts}) => {
    return (
        <div>
            <Part id={parts[0].id} name={parts[0].name} exercises={parts[0].exercises}/>
            <Part id={parts[1].id} name={parts[1].name} exercises={parts[1].exercises}/>
            <Part id={parts[2].id} name={parts[2].name} exercises={parts[2].exercises}/>
        </div>
    )

}

export default Content