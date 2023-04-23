import { StyledList, Styleddiv } from './ContactsListStyled';
import { StyledTitle } from '../Form/FormStyled';
import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export const Contacts = ({ title, contacts, deleteUser }) => {
  return (
    <Styleddiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              deleteUser={deleteUser}
              contactData={contact}
            ></ContactItem>
          );
        })}
      </StyledList>
    </Styleddiv>
  );
};

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteUser: PropTypes.func,
};
