import React from 'react';
import {
  Text,
  Box,
  Flex,
  Badge,
  Divider,
  Button,
  Link,
  Image,
} from '@chakra-ui/react';

function Tweet({ tweet }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Flex align="center" justify="space-between">
        <Text>{tweet.detail}</Text>
        <Badge variant="subtle" colorScheme="teal" mx={1}>
          {tweet.tags[0]}
        </Badge>
      </Flex>
      {tweet?.imageurl && <Image src={tweet.imageurl} width={100} />}
      <Link href={tweet?.tweeturl} color="teal.500" isExternal>
        {tweet?.tweeturl}
      </Link>
      <Divider my={2} />
      <Flex align="center" justify="space-between">
        <Text fontSize="sm" color="gray.500">Posted on {new Date(tweet.created_at).toLocaleDateString()}</Text>
        <Button>View</Button>
      </Flex>
    </Box>
  )
}

export default Tweet;