import React from "react";
import Notification from "./Notification";


 class Statistics extends React.Component {
    render() {
        return (

            <div> 
             {this.props.total === 0 && 
               <Notification 
                title= "There is no feedback"> 
                </Notification>}
                
            {this.props.total !== 0 && <div><li className="Feedback__list">Good: {this.props.good}</li>
            <li className="Feedback__list">Neutral: {this.props.neutral}</li>
            <li className="Feedback__list">Bad: {this.props.bad}</li>
            <li className="Feedback__list">Total: {this.props.total}</li>
            <li className="Feedback__list">Positive feedback: {this.props.positivePercentage}% </li></div>}
            </div>
        )
    }
 } 
    export default Statistics;