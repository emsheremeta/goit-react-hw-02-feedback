import React from "react";
import css from "./Feedback.css"


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
            <p className="Feedback__text">Please, leave  feedback</p>
            <button type = "button" className="Feedback__button" onClick={this.votePositive}>Good</button>
            <button type = "button" className="Feedback__button" onClick={this.voteNeutral}>Neutral</button>
            <button type = "button" className="Feedback__button" onClick={this.voteNegative}>Bad</button>

            <ul className="Feedback__text">Statistics</ul> 
            <li className="Feedback__list">Good: {this.state.good}</li>
            <li className="Feedback__list">Neutral: {this.state.neutral}</li>
            <li className="Feedback__list">Bad: {this.state.bad}</li>
            <li className="Feedback__list">Total: {countTotalFeedback()}</li>
            <li className="Feedback__list">Positive feedback: {countPositiveFeedbackPercentage()}% </li>
            </div>
        )

      }
    }
    export default Feedback;