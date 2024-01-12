import { useEffect, useState } from 'react';
import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Flex,
  Badge,
  Divider,
  Button,
  Image,
} from '@chakra-ui/react';

import { getTweets } from '../supabase';

function ListofTweet() {
  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const newTweets = await getTweets();
    settweets(newTweets);
  }

  const [tweets, settweets] = useState([]);

  return (
    <Container maxW='1100px'>
      <VStack spacing={4} align="stretch">
        <Heading size="lg">Tweet List</Heading>
        {tweets.map(tweet => (
          <Box key={tweet.id} p={4} borderWidth="1px" borderRadius="md">
            <Flex align="center" justify="space-between">
              <Text>{tweet.detail}</Text>
              <Badge variant="subtle" colorScheme="teal" mx={1}>
                {tweet.tags[0]}
              </Badge>
            </Flex>
            {tweet?.imageurl && <Image src={tweet.imageurl} width={100} />}
            <Divider my={2} />
            <Flex align="center" justify="space-between">
              <Text fontSize="sm" color="gray.500">Posted on {new Date(tweet.created_at).toLocaleDateString()}</Text>
              <Button>View</Button>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default ListofTweet;
