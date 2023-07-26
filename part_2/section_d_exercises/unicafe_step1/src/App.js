import { useState } from 'react'

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = good + neutral + bad;

  return (
    <>
      <p>all {all}</p>
      <p>average {(good + -bad) / all * 100 + '%'}</p>
      <p>positive {good / all * 100 + '%'}</p>
    </>
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
      <button onClick={handleGood(good + 1)}>
        good  
      </button>

      <button onClick={handleNeutral(neutral + 1)}>
        neutral  
      </button>

      <button onClick={handleBad(bad + 1)}>
        bad  
      </button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p> 

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App