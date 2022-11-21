import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import { Header, Container } from './AppBar.styled';

export const AppBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Navigation />
        {/* <UserMenu />
        <AuthNav /> */}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <IconButton
          ml={8}
          mr="20px"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Container>
    </Header>
  );
};
