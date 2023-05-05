// import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { List, Button, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filterContacts = getFilterContacts();

  return (
    <List>
      {filterContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contacts={contact} />
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ContactList;
