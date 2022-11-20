import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <div>
      {total !== 0 && (
        <div>
          <li className={styles.list}>Good: {good}</li>
          <li className={styles.list}>Neutral: {neutral}</li>
          <li className={styles.list}>Bad: {bad}</li>
          <li className={styles.list}>Total: {total}</li>
          <li className={styles.list}>
            Positive feedback: {positivePercentage}%{' '}
          </li>
        </div>
      )}
    </div>
  );
}
Statistics.propTypes = {
  total: PropTypes.number,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
