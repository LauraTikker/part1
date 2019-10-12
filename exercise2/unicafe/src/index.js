import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const PrintTitles = (props) =>  {
    return (
        <h1>{props.text}</h1>
    )
}

const Button = ({onClick, text}) =>   {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = ({text, stats}) => {
    if (text ==='average') {
        let sum = 0
    
        stats.forEach(element => {
            sum += element
        });
        const average = sum/stats.length
    
        return <tr><th>{'average'}</th><th>{average.toFixed(1)}</th></tr>
    }

    if (text === 'positive')   {
        let positiveReviews = 0

        stats.forEach(element =>  {
            if (element === 1)  {
                positiveReviews++
            }
        });
        const PositiveReviewsPercentage = positiveReviews / stats.length * 100

        return <tr><th>{'positive'}</th><th> {PositiveReviewsPercentage.toFixed(1)} %</th></tr>
    }
    
    return (
        <tr><th>{text}</th><th>{stats}</th></tr>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allReviews, setAll] = useState([])
  
    const countGood = () => {
        setGood(good + 1)
        setAll(allReviews.concat(1))
    }
    
    const countNeutral = () => {
        setNeutral(neutral + 1)
        setAll(allReviews.concat(0))
    }
       
    const countBad = () => {
        setBad(bad + 1)
        setAll(allReviews.concat(-1))
    }

    if (allReviews.length === 0)   {
        return (
        <div> 
            <PrintTitles text={'give feedback'}/>        
            <Button onClick={countGood} text={'good'}/>
            <Button onClick={countNeutral} text={'neutral'}/>
            <Button onClick={countBad} text={'bad'}/>
            <PrintTitles text={'statistics'}/>
            <div>No feedback given</div>
        </div>
        )
    }

    return (
      <div>
        <PrintTitles text={'give feedback'}/>        
        <Button onClick={countGood} text={'good'}/>
        <Button onClick={countNeutral} text={'neutral'}/>
        <Button onClick={countBad} text={'bad'}/>

        <PrintTitles text={'statistics'}/>
        <table>
            <tbody>
                <Statistics text={'good'} stats={good}/>
                <Statistics text={'neutral'} stats={neutral}/>
                <Statistics text={'bad'} stats={bad}/>
                <Statistics text={'all'} stats={allReviews.length}/>
                <Statistics text={'average'} stats={allReviews}/>
                <Statistics text={'positive'} stats={allReviews}/>
            </tbody>
        </table>
    
      </div>
    )
  }
  
  ReactDOM.render(<App />, 
    document.getElementById('root')
  )

ReactDOM.render(<App />, document.getElementById('root'));

