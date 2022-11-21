import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useAuth } from '../hooks/useAuth';
import { SkeletonCircle } from '@chakra-ui/react';
import { List, Item, Text, UserName, ButtonLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <List>
      <Item>
        <Text>Welcome,</Text>
        <UserName>{user.name}</UserName>
        <SkeletonCircle
          position="absolute"
          width="120px"
          height="80px"
          top="9px"
          right="400px"
          startColor="pink.200"
          endColor="blue.200"
        />
      </Item>
      <Item>
        <ButtonLogout type="button" onClick={() => dispatch(logOut())}>
          Logout
        </ButtonLogout>
      </Item>
    </List>
  );
};
