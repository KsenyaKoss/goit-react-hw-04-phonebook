import { Component } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem('contacts_key');
    data?.length && this.setState({ contacts: JSON.parse(data) });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts_key', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );
    if (existingContact) {
      alert(`${name} or ${number} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              id: nanoid(),
              name,
              number,
            },
          ],
        };
      });
    }
  };

  handleFilter = string => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase(string));
    });
  };

  onInputChange = ev => {
    this.setState({ filter: ev.target.value });
  };

  deleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(user => user.id !== id) };
    });
  };

  render() {
    const renderContacts = this.handleFilter();
    return (
      <>
        <Form onSubmit={this.handleAddContact} />
        <Filter value={this.state.filter} onChange={this.onInputChange} />
        <Contacts
          title="Contacts"
          contacts={renderContacts}
          deleteUser={this.deleteUser}
        ></Contacts>
      </>
    );
  }
}
