import { Link as ReactLink } from 'react-router-dom';
import { Container, Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box p={2}>
      <Container maxW='1100px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box mr="4">
            <Link as={ReactLink} to="/">
              <Heading color="green" mt="3" mb="5">Preserve Post</Heading>
            </Link>
          </Box>
          <Spacer />
          <Link as={ReactLink} to="/">Home</Link>
          <Link as={ReactLink} to="/form">Form</Link>
          <Link as={ReactLink} to="/test">Test</Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;