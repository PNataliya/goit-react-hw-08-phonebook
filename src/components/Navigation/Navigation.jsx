import { useAuth } from '../hooks/useAuth';
import { NavWrapper, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/tasks">Contacts</StyledNavLink>}
    </NavWrapper>
  );
};
