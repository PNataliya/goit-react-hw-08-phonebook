import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import {
  Wrapper,
  Form,
  Label,
  Span,
  Input,
  Button,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <Span>Username</Span>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <Span>Email</Span>
          <Input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </Label>

        <Label>
          <Span>Password</Span>
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  );
};
