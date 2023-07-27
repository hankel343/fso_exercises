import { useState } from 'react'

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = good + neutral + bad;

  const outputHtml = (hasFeedback) => {
    if (!hasFeedback) {
      return (
        <>
        <p>No feedback provided</p>
        </>
      )
    } else {
      return (
        <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {(good + -bad) / all * 100 + '%'}</p>
        <p>positive {good / all * 100 + '%'}</p>
        </>
      )
    }
  }

  return (
    <>
      {outputHtml(all > 0)}
    </>
  )
}

const Button = (props) => {
  const text = props.text;
  const eventHandler = props.handleClick;

  return (
    <button onClick={eventHandler}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = (val) => () => {
    console.log('good now:', val);
    setGood(val);
  }

  const handleNeutral = (val) => () => {
    console.log('neutral now:', val);
    setNeutral(val);
  }

  const handleBad = (val) => () => {
    console.log('bad now:', val);
    setBad(val);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} eventHandler={handleGood}/>
      <Button text={"neutral"} eventHandler={handleNeutral}/>
      <Button text={"bad"} eventHandler={handleBad}/>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App