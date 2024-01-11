import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
} from '@chakra-ui/react';

import { addTweet } from '../supabase';

const TweetForm = () => {
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [tags, setTags] = useState();
  const [imageurl, setImageurl] = useState();

  const createTweet = async () => {
    await addTweet(title, detail, [tags], imageurl);
  }

  return (
    <Container>
      <Box p={8}>
        <Heading as="h2" size="lg" mb={4}>
          Enter Tweet Data
        </Heading>
        <form>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Detail</FormLabel>
              <Input
                type="text"
                name="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Tags</FormLabel>
              <Input
                type="text"
                name="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                name="imageurl"
                value={imageurl}
                onChange={(e) => setImageurl(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue" onClick={createTweet}>
              Add
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default TweetForm;