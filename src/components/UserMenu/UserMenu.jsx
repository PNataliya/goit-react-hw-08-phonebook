import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useAuth } from '../hooks/useAuth';
import { List, Item, Text, ButtonLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <List>
      <Item>
        <Text>Welcome, {user.name}</Text>
      </Item>
      <Item>
        <ButtonLogout type="button" onClick={() => dispatch(logOut())}>
          Logout
        </ButtonLogout>
      </Item>
    </List>
  );
};
