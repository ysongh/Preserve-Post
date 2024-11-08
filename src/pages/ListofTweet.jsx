import { useEffect, useState } from 'react';
import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  VStack,
  Heading,
  Button,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';

import { getTweets, getTweetsByTag } from '../supabase';
import Tweet from '../components/Tweet';

function ListofTweet() {
  const [tweets, settweets] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <Container maxW='1100px'>
      <VStack spacing={4} align="stretch">
        <Heading size="lg" mt='4'>
          Tweet List
        </Heading>
        <InputGroup bg='white' mt='4'>
          <Input placeholder='Search by Tag' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <InputRightElement>
            <SearchIcon cursor="pointer" onClick={fetchTweetsByTag}/>
          </InputRightElement>
        </InputGroup>
        <Button onClick={fetchTweets}>
          Reset
        </Button>
        {tweets.map(tweet => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
        {!tweets.length && <Text fontSize="2xl" color="red">No Tweet...</Text>}
      </VStack>
    </Container>
  );
};

export default ListofTweet;
