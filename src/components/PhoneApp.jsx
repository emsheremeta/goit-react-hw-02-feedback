import React from "react";
import ContactFilter from "./phonebook/ContactFilter";
import Form from "./phonebook/Form"
import {nanoid} from "nanoid"


import ContactList from "./phonebook/ContactList";

class PhoneApp extends React.Component { 
  
  state = {
    contacts: [
       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  };

  onSubmit = (data) => {
    console.log(data);
    const {name, number} = data;
    const id = nanoid();
    const contact = {
      id: id,
      name: name,
      number: number
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
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
      <Form
      onSubmit = {this.onSubmit}>

      </Form>
      <ContactFilter
      filter = {this.state.filter}
      onChange = {this.onChange}
      ></ContactFilter>
      <ContactList
      contacts = {this.state.contacts}
      filter={this.state.filter}>

      </ContactList>
           
                 
    </div>
    
  );
    }

};
export default PhoneApp;