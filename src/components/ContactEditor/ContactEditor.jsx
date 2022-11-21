// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contacts/operations';
// import { FormEditor, FormInput, ButtonSubmit } from './ContactEditor.styled';

// export const ContactEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== '') {
//       dispatch(addContact(text));
//       form.reset();
//       return;
//     }
//     alert('The field cannot be empty. Enter something!!');
//   };

//   return (
//     <FormEditor onSubmit={handleSubmit}>
//       <FormInput
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />

//       <ButtonSubmit type="submit">Add contact</ButtonSubmit>
//     </FormEditor>
//   );
// };

// =============
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectItems } from '../../redux/contacts/selectors';
import {
  FormEditor,
  Label,
  Title,
  Input,
  Button,
} from './ContactEditor.styled';
import { Report } from 'notiflix';

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

  const onSubmitForm = e => {
    e.preventDefault();
    const newContact = { name, number };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Report.warning(
        `${name}`,
        'This user is already in the contact list.',
        'OK'
      );
      return;
    }

    dispatch(addContact(newContact));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormEditor onSubmit={onSubmitForm}>
      <Label>
        <Title>Name</Title>
        <Input
          onChange={onChangeName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <Title>Number</Title>
        <Input
          onChange={onChangeNumber}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormEditor>
  );
};
