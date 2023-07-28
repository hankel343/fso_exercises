import { useState } from 'react'

const Button = (props) => {
  const text = props.text;
  const handler = props.handler;
  const idx = props.i;
  const votes = props.votes;

  if (text === "vote") {
    return (
      <>
        <button onClick={handler(votes, idx)}>
          {text}
        </button>
      </>
    )
  }
  return (
    <>
      <button onClick={handler(idx + 1)}>
        {text}
      </button>
    </>
  )
}

const Display = (props) => {
  const i = props.i;
  const anecdotes = props.anecdotes;
  const votes = Object.values(props.votes);

  console.log(votes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[i]}</p>
      <p>has {votes[i]} votes</p>

      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(8).fill(0));

  const advanceIterator = (idx) => () => {
    console.log("selected is: ", idx);

    if (idx === anecdotes.length) {
      console.log("setting back to beginning.");
      setSelected(0);
    } else {
      setSelected(idx);
    }
  }

  const handleVote = (newPoints, idx) => () => {
    console.log("incrementing at: ", idx);
    newPoints[idx] += 1;
    setPoints(newPoints);
  }

  return (
    <div>
      <Display i={selected} anecdotes={anecdotes} votes={points}/>
      <Button text={"next anecdote"} handler={advanceIterator} i={selected} votes={{...points}}/>
      <Button text={"vote"} handler={handleVote} i={selected} votes={{...points}}/>
      {/* {anecdotes[selected]} */}
    </div>
  )
}

export default App