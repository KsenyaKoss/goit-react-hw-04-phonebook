import { Component } from 'react';
import { Button } from './Button';
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledTitle,
} from './FormStyled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledTitle>Phonebook</StyledTitle>
        <StyledLabel htmlFor="">
          Name
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </StyledLabel>
        <StyledLabel htmlFor="">
          Number
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </StyledLabel>
        <Button title="Add contact" />
      </StyledForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
