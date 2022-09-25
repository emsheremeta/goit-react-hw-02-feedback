import React from "react";

class PhoneApp extends React.Component { 
  state = {
    contacts: [],
    name: ''
  };

  onChange = (event) => {
    console.log(event);
    this.setState(prevState => ({
      name: event.target.value
  }))
  }

  onSubmit = (event) => {
    console.log(event);
    console.log(this.state.contacts);
    this.setState(prevState => ({
      contacts: [this.state.name].concat(prevState.contacts)
  }))
  }
  
  render () {
   return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
           <input
           onChange={this.onChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>

    <button onClick={this.onSubmit}>Add Contact</button>
                 
    </div>
    
  );
    }

};
export default PhoneApp;