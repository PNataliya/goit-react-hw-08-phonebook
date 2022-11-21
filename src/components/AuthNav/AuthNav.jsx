import { Link, List, Item } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <Item>
        <Link to="/register">Register</Link>
      </Item>
      <Item>
        <Link to="/login">Log In</Link>
      </Item>
    </List>
  );
};
