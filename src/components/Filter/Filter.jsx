import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';

import { Label, Text, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(setFilter(form.value.toLowerCase()));
  };

  return (
    <Label>
      <Text>Input search query</Text>
      <Input
        type="text"
        onChange={handleChange}
        name="fiter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func,
  QueryInputId: PropTypes.func,
};
