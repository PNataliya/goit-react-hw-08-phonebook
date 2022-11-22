import { useSelector } from 'react-redux';
import { Contact } from '../Contacts/Contacts';
// import { selectItems } from '../../redux/contacts/selectors';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { List } from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    contacts && (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <List key={id}>
            <Contact name={name} number={number} contactID={id} />
          </List>
        ))}
      </ul>
    )
  );
};
