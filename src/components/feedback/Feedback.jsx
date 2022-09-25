import React from "react";


class Feedback extends React.Component {
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
    state = { 
        good: 0,
        neutral: 0,
        bad: 0
      };
      render () {
        let countTotal;
        const countTotalFeedback = () => {
            return this.state.good + this.state.neutral + this.state.bad;
        }   
        const countPositiveFeedbackPercentage = () => {
            return countTotalFeedback() === 0 ? '0.00' : (100 * this.state.good / countTotalFeedback()).toFixed(2);
            
        }
        return (
            
            <div>
            <p>Please, leave  feedback</p>
            <button type = "button" onClick={this.votePositive}>Good</button>
            <button type = "button" onClick={this.voteNeutral}>Neutral</button>
            <button type = "button" onClick={this.voteNegative}>Bad</button>

            <ul>Statistics</ul> 
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {countTotalFeedback()}</li>
            <li>Positive feedback: {countPositiveFeedbackPercentage()}% </li>
            </div>
        )

      }
    }
    export default Feedback;