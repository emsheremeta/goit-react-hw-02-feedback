import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => {
      return (
        <button
          key={option}
          type="button"
          className={styles.button}
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

FeedbackOptions.prototypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
