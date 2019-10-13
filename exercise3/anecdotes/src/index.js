import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const PrintTitles = (props) =>  {
  return (
      <h2>{props.text}</h2>
  )
}

const MostVotes = ({array, anecdotes}) =>  {
  let biggest = 0
  let index = 0
  
  for (let i = 0; i < 6; i++)  {
    let number = array[i]
    if (number > biggest) {
      biggest = number
      index = i
    }
  }

  return (
    <div>
    <div>{anecdotes[index]}</div>
    <div>has {biggest} votes</div>
    </div>
  )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
    
    const selectAnecdote = () => {
      const number = Math.floor(Math.random() * (props.anecdotes.length))
      setSelected(number)

    }

    const vote = () => {
        var copyPoints = {...points}
        copyPoints[selected] += 1
        setPoints(copyPoints)

    }
    return (
      <div>
        <PrintTitles text={'Anecdote of the day'}/>
        {props.anecdotes[selected]}
        <div>has {points[selected]} votes</div>
        <div><button onClick={vote}>vote</button></div>
        <div><button onClick={selectAnecdote}>next anecdote</button></div>
        <PrintTitles text={'Anecdote with the most votes'}/>
        <MostVotes array={points} anecdotes={props.anecdotes}/>
      </div>
    )
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(
<App anecdotes={anecdotes}/>, 
document.getElementById('root'));



