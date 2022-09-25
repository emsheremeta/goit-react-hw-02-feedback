import React from "react";


const Statistics =({good, neutral, bad, total, positivePercentage}) => (

            <div>
            <li className="Feedback__list">Good: {good}</li>
            <li className="Feedback__list">Neutral: {neutral}</li>
            <li className="Feedback__list">Bad: {bad}</li>
            <li className="Feedback__list">Total: {total}</li>
            <li className="Feedback__list">Positive feedback: {positivePercentage}% </li>
            </div>
           
      
    );
    export default Statistics;