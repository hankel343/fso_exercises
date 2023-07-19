const Header = (props) => {
  return (
    <>
      <p>{props.name}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p> {props.name} {props.number} </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.name[0]} number={props.number[0]} />
      <Part name={props.name[1]} number={props.number[1]} />
      <Part name={props.name[2]} number={props.number[2]} />
    </>  
  )
}

const Total = (props) => {
  return (
    <>
      <p>{props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name={[part1, part2, part3]} number={[exercises1, exercises2, exercises3]} /> 
      <Total total={exercises1 + exercises2 + exercises3 } />
    </div>
  )
}

export default App;
