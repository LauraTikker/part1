import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return <h1> {props.text}</h1>

}

const Content = (props) => {
  return  (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  )

}
const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.number}</p>
    </div>
  )
}
const App = () => {
    
  
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

    return (
      <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Total number={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));


