import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => {
      return (
        <button
          type="button"
          className="Feedback__button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      );
    })}
    {/* <button type = "button" className="Feedback__button" name="good" onClick={onLeaveFeedback}>Good</button>
            <button type = "button" className="Feedback__button" name="neutral" onClick={onLeaveFeedback}>Neutral</button>
            <button type = "button" className="Feedback__button" name="bad" onClick={onLeaveFeedback}>Bad</button> */}
  </div>
);
export default FeedbackOptions;
