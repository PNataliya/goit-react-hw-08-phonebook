import { useDispatch } from 'react-redux';
import { FaTrash, FaUserTie } from 'react-icons/fa';

import {
  ContactData,
  ContactName,
  ContactNumber,
  Button,
  Icon,
} from './Contacts.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  console.log('contactID', id);
  return (
    <>
      <ContactData>
        <Icon>
          <FaUserTie />
        </Icon>
        <ContactName>{name}</ContactName>
      </ContactData>
      <ContactData>
        <ContactNumber>{number}</ContactNumber>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          <Icon>
            <FaTrash />
          </Icon>
        </Button>
      </ContactData>
    </>
  );
};

// Contact.prototype = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
