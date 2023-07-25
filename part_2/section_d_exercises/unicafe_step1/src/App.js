import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = (val) => () => {
    console.log('good now:', val);
    setGood(val);
    setAll(all + 1);
  }

  const handleNeutral = (val) => () => {
    console.log('neutral now:', val);
    setNeutral(val);
    setAll(all + 1);
  } 

  const handleBad = (val) => () => {
    console.log('bad now:', val);
    setBad(val);
    setAll(all + 1);
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
      <p>all {all}</p>
      <p>average {(good + -bad) / all * 100 + '%'}</p>
      <p>positive {good / all * 100 + '%'}</p>

    </div>
  )
}

export default App