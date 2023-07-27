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
        {/* <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {(good + -bad) / all * 100 + '%'}</p>
        <p>positive {good / all * 100 + '%'}</p> */}
        <StatisticsLine text={"good: "} value={good}/>
        <StatisticsLine text={"neutral: "} value={neutral}/>
        <StatisticsLine text={"bad: "} value={bad}/>
        <StatisticsLine text={"average"} value={(good + -bad) / all * 100 + '%'}/>
        <StatisticsLine text={"positive"} value={good / all * 100 + '%'}/>
        </>
      )
    }
  }
}

const StatisticsLine = (props) => {
  const text = props.text;
  const value = props.value;

  return (
    <>
      <p>{text} {value}</p>
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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App