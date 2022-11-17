import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <div>
        {this.props.total === 0 && (
          <Notification title="There is no feedback"></Notification>
        )}

        {this.props.total !== 0 && (
          <div>
            <li className={styles.list}>Good: {this.props.good}</li>
            <li className={styles.list}>Neutral: {this.props.neutral}</li>
            <li className={styles.list}>Bad: {this.props.bad}</li>
            <li className={styles.list}>Total: {this.props.total}</li>
            <li className={styles.list}>
              Positive feedback: {this.props.positivePercentage}%{' '}
            </li>
          </div>
        )}
      </div>
    );
  }
}
export default Statistics;

Statistics.propTypes = {
  total: PropTypes.number,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
