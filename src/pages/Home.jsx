import { Circle } from '@chakra-ui/layout';
import { SkeletonCircle, Heading } from '@chakra-ui/react';
import { Container, Box } from './Home.styled';

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Circle
            position="absolute"
            bg="blue.500"
            opacity="0.1"
            w="400px"
            h="400px"
            alignSelf="flex-end"
            top="7px"
            right="257px"
          />
          <SkeletonCircle
            position="absolute"
            size="300"
            top="5px"
            right="160px"
            startColor="pink.500"
            endColor="blue.500"
          />
          <Heading
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400,  purple.600)"
            bgClip="text"
          >
            Phonebook, welcome page{' '}
          </Heading>
          {/* <Title>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Title> */}
        </Box>
      </Container>
    </main>
  );
}
