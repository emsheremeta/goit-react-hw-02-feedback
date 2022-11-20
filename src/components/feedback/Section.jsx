import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function Section({ title, children }) {
  return (
    <div>
      <ul className={styles.text}>{title}</ul>
      {children}
    </div>
  );
}

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
