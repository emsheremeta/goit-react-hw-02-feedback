import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  render() {
    return <p>{this.props.title}</p>;
  }
}

export default Notification;

Notification.prototypes = {
  title: PropTypes.string,
};
