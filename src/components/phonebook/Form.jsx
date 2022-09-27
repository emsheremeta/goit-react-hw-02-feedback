import React from "react";


class Form extends React.Component { 
  state = {
    name: '',
    number: '',
  }

  
  onChange = (event) => {
    console.log(event);
    const {name, value} = event.target;
    this.setState ({[name] : value});
    event.target.value = value;
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }

  
  
  reset = () => {
    this.setState({name: '', number: ''})
  }
  render() {
    
    return (
        <div>
    <form
    onSubmit = {this.onSubmit}> 
        <label htmlFor="" >Name
        <input
           onChange={this.onChange}
  type="text"
  name="name"
  value={this.state.name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>

        </label>
        <label> Number
        <input
        onChange = {this.onChange}
  type="tel"
  name="number"
  value={this.state.number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        </label>
        <button onClick={this.onSubmit}>Add Contact</button>
      </form>
        </div>
    );
  }
}

export default Form;