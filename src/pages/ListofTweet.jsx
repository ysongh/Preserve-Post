import { useEffect } from 'react';
import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Flex,
  Badge,
  Divider,
} from '@chakra-ui/react';

import { getTweets } from '../supabase';

const tweets = [
  {
    id: "0",
    text: "Test",
    author: "Bob",
    likes: 1
  }
];

function ListofTweet() {
  useEffect(() => {
    getTweets();
  }, [])

  return (
    <Container maxW='1100px'>
      <VStack spacing={4} align="stretch">
        <Heading size="lg">Tweet List</Heading>
        {tweets.map(tweet => (
          <Box key={tweet.id} p={4} borderWidth="1px" borderRadius="md">
            <Flex align="center" justify="space-between">
              <Text>{tweet.text}</Text>
              <Badge variant="subtle" colorScheme="teal" mx={1}>
                Tesst
              </Badge>
            </Flex>
            <Divider my={2} />
            <Flex align="center" justify="space-between">
              <Text fontSize="sm" color="gray.500">Posted by {tweet.author} on {new Date(tweet.createdAt).toLocaleDateString()}</Text>
              <Text fontSize="sm" color="gray.500">{tweet.likes} Likes</Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default ListofTweet;
