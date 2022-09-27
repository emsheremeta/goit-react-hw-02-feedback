import React from "react";

class Contact extends React.Component { 
  render() {
    const {id, name, number} = this.props.contact;

    return (
        <li id={id}>{name}: {number}</li>
    );
  }
}

export default Contact;