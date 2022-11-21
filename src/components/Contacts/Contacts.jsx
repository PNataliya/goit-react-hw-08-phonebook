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

export const Contact = ({ contactID, name, number }) => {
  const dispatch = useDispatch();
  console.log('contactID', contactID);
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
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contactID))}
        >
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
