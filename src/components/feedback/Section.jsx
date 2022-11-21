import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function Section({ title, children }) {
  return (
    <div>
      <h1 className={styles.text}>{title}</h1>
      {children}
    </div>
  );
}

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
