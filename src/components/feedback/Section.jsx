import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

class Section extends React.Component {
  render() {
    return (
      <div>
        <ul className={styles.text}>{this.props.title}</ul>
        {this.props.children}
      </div>
    );
  }
}
export default Section;

Section.prototypes = {
  title: PropTypes.string.isRequired,
};
