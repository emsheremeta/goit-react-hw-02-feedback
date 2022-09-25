import React from "react";


const FeedbackOptions =({ onLeaveFeedback}) => (

            <div>
            <button type = "button" className="Feedback__button" name="good" onClick={onLeaveFeedback}>Good</button>
            <button type = "button" className="Feedback__button" name="neutral" onClick={onLeaveFeedback}>Neutral</button>
            <button type = "button" className="Feedback__button" name="bad" onClick={onLeaveFeedback}>Bad</button>

            </div>
      
    );
    export default FeedbackOptions;