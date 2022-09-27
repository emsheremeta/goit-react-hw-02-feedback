import React from "react";

class ContactFilter extends React.Component { 
  render() {
    return (
        <div>
            <ul>Contacts</ul>
      <label> Find by name
        <input
        
  type="text"
  name="filter"
  value={this.props.filter}
  onChange={this.props.onChange}
/>
        </label>
        </div>
    );
  }
}

export default ContactFilter;