import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Text } from '@chakra-ui/react';

import Navbar from './components/layout/Navbar';
import SaveTweet from './pages/SaveTweet';
import TweetForm from './pages/TweetForm';
import ListofTweet from './pages/ListofTweet';

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
            path="/form"
            element={
              <TweetForm /> } />
          <Route
            path="/"
            element={
              <ListofTweet /> } />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App;
