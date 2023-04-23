import { Styleddiv } from 'components/Contacts/ContactsListStyled';
import { StyledInput } from 'components/Form/FormStyled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Styleddiv>
      <h2>Find contacts by name</h2>
      <StyledInput type="text" onChange={onChange} value={value}></StyledInput>
    </Styleddiv>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
