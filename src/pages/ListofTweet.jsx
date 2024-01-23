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
  InputGroup,
  Input,
  InputRightElement,
  Link,
  Image,
} from '@chakra-ui/react';

import { getTweets, getTweetsByTag } from '../supabase';

function ListofTweet() {
  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    const newTweets = await getTweets();
    settweets(newTweets);
  }

  const fetchTweetsByTag = async () => {
    const newTweets = await getTweetsByTag(search);
    settweets(newTweets);
  }

  const [tweets, settweets] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Container maxW='1100px'>
      <VStack spacing={4} align="stretch">
        <Heading size="lg">Tweet List</Heading>
        <InputGroup bg='white' mt='4'>
          <Input placeholder='Search by Tag' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <InputRightElement>
            <Text mr="2" color="blue" fontWeight="bold" onClick={fetchTweetsByTag}>Find</Text>
          </InputRightElement>
        </InputGroup>
        {tweets.map(tweet => (
          <Box key={tweet.id} p={4} borderWidth="1px" borderRadius="md">
            <Flex align="center" justify="space-between">
              <Text>{tweet.detail}</Text>
              <Badge variant="subtle" colorScheme="teal" mx={1}>
                {tweet.tags[0]}
              </Badge>
            </Flex>
            {tweet?.imageurl && <Image src={tweet.imageurl} width={100} />}
            <Link href={tweet?.tweeturl} isExternal>
              {tweet?.tweeturl}
            </Link>
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
