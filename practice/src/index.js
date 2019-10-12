import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const name = 'Peter'
    const age = 10    

    console.log('Hello from component')

    return ( 
    <div>
        <h2> Greetings</h2>  
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />   
        </div>
    )
}

const Hello = (props) => {
    return ( 
        <div>
        <p> Hello world {props.name}, you are {props.age} years old</p>  
        </div>
    )
}

ReactDOM.render( < App /> , document.getElementById('root'))