import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Text } from '@chakra-ui/react';

import './App.css';
import Navbar from './components/layout/Navbar';
import SaveTweet from './pages/SaveTweet';

function App() {

  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/test"
            element={
              <>
                <SaveTweet />
              </>} />
          <Route
            path="/"
            element={
              <Text>Home</Text>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App;
