import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

import { addTweet } from '../supabase';

const TweetForm = () => {
  const [detail, setDetail] = useState("");
  const [tags, setTags] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [tweeturl, setTweeturl] = useState("");
  const [message, setMessage] = useState("")

  const createTweet = async () => {
    await addTweet(detail, [tags.toLocaleLowerCase()], imageurl, tweeturl);
    setMessage("Added");
    setDetail("");
    setTags("");
    setImageurl("");
    setTweeturl("");
  }

  return (
    <Container>
      <Box p={8} bg="teal.100" mt="3" rounded="5px">
        <Heading as="h2" size="lg" mb={4}>
          Enter Tweet Data
        </Heading>
        <form>
          <VStack spacing={4}>
            <FormControl isRequired>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Detail</FormLabel>
              <Textarea
                name="detail"
                rows={7}
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                bg="white"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Tags</FormLabel>
              <Input
                type="text"
                name="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                bg="white"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                name="imageurl"
                value={imageurl}
                onChange={(e) => setImageurl(e.target.value)}
                bg="white"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tweet URL</FormLabel>
              <Input
                type="text"
                name="tweeturl"
                value={tweeturl}
                onChange={(e) => setTweeturl(e.target.value)}
                bg="white"
              />
            </FormControl>
            <Button colorScheme="blue" onClick={createTweet}>
              Add
            </Button>
            {message && <Text>{message}</Text>}
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default TweetForm;