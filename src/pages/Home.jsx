import { Circle } from '@chakra-ui/layout';
import { SkeletonCircle, Heading } from '@chakra-ui/react';
import { MainContainer, Container, Box } from './Home.styled';

export default function Home() {
  return (
    <MainContainer>
      <Container>
        <Box>
          <Circle
            position="absolute"
            bg="blue.500"
            opacity="0.1"
            w="400px"
            h="400px"
            alignSelf="flex-end"
            top="103px"
            right="74px"
          />
          <SkeletonCircle
            position="absolute"
            size="300"
            top="60px"
            right="-52px"
            startColor="pink.500"
            endColor="blue.500"
          />
          <Heading
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400,  purple.600)"
            bgClip="text"
            pb="100px"
          >
            Phonebook, welcome page{' '}
          </Heading>
          <div></div>
        </Box>
      </Container>
    </MainContainer>
  );
}
