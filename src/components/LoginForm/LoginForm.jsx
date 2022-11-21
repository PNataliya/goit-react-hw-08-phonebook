import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import {
  Wrapper,
  FormLogin,
  FormLabel,
  FormInput,
  ButtonSubmit,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <FormLogin onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <FormInput type="email" name="email" />
        </FormLabel>
        <FormLabel>
          Password
          <FormInput type="password" name="password" />
        </FormLabel>
        <ButtonSubmit type="submit">Log In</ButtonSubmit>
      </FormLogin>
    </Wrapper>
  );
};
