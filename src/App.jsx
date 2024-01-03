import { ChakraProvider, Text } from '@chakra-ui/react';

import './App.css';

function App() {

  return (
    <ChakraProvider>
      <Text textColor="blue">Preserve Post</Text>
    </ChakraProvider>
  )
}

export default App;
