import Feedback from "./feedback/Feedback"
import React from "react";


class App extends React.Component { 
  state = { 
    good: 0,
    neutral: 0,
    bad: 0
  };
   votePositive = (event) => {
    console.log(event);
    this.setState(prevState => ({
        good: prevState.good + 1
    }))
}
 voteNeutral = (event) => {
    console.log(event);
    this.setState(prevState => ({
        neutral: prevState.neutral + 1
    }))
}
 voteNegative = (event) => {
    console.log(event);
    this.setState(prevState => ({
        bad: prevState.bad + 1
    }))
  }

  countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
  }   
    countPositiveFeedbackPercentage = () => {
      return this.countTotalFeedback() === 0 ? '0.00' : (100 * this.state.good / this.countTotalFeedback()).toFixed(2);
   }
      
  

  render () {
   return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

<div>
            <p className="Feedback__text">Please, leave  feedback</p>
            <button type = "button" className="Feedback__button" onClick={this.votePositive}>Good</button>
            <button type = "button" className="Feedback__button" onClick={this.voteNeutral}>Neutral</button>
            <button type = "button" className="Feedback__button" onClick={this.voteNegative}>Bad</button>

            <ul className="Feedback__text">Statistics</ul> 
            <li className="Feedback__list">Good: {this.state.good}</li>
            <li className="Feedback__list">Neutral: {this.state.neutral}</li>
            <li className="Feedback__list">Bad: {this.state.bad}</li>
            <li className="Feedback__list">Total: {this.countTotalFeedback()}</li>
            <li className="Feedback__list">Positive feedback: {this.countPositiveFeedbackPercentage()}% </li>
            </div>
      {/* < Feedback>
       
       </Feedback> */}
    </div>
    
  );
    }

};
export default App;