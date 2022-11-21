import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ title }) {
  return <p>{title}</p>;
}

Notification.prototypes = {
  title: PropTypes.string.isRequired,
};
