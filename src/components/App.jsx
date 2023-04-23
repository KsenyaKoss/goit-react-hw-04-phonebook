import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('contacts_key');
    data?.length && setContacts(JSON.parse(data));
  }, []);

  useEffect(
    (_, prevState) => {
      if (prevState !== contacts.length) {
        localStorage.setItem('contacts_key', JSON.stringify(contacts));
      }
    },
    [contacts]
  );

  const handleAddContact = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );
    if (existingContact) {
      alert(`${name} or ${number} is already in contacts`);
    } else {
      setContacts(prevState => [
        ...prevState,
        {
          id: nanoid(),
          name,
          number,
        },
      ]);
    }
  };

  console.log(contacts);
  console.log(filter);

  const handleFilter = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const onInputChange = ev => {
    setFilter(ev.target.value);
  };

  const deleteUser = id => {
    setContacts(prevState => prevState.filter(user => user.id !== id));
  };

  return (
    <>
      <Form onSubmit={handleAddContact} />
      <Filter value={filter} onChange={onInputChange} />
      <Contacts
        title="Contacts"
        contacts={filter ? handleFilter() : contacts}
        deleteUser={deleteUser}
      ></Contacts>
    </>
  );
};
