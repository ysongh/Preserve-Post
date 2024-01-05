import React from 'react';

import { TWITTER_APIKEY } from '../keys';

function SaveTweet() {
  const fetchTweetData = async (tweetId) => {
    const apiKey = TWITTER_APIKEY;
    const apiUrl = `https://api.twitter.com/2/tweets/${tweetId}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Tweet Data:', data);
  
    } catch (error) {
      console.error('Error fetching tweet data:', error);
    }
  }
  
  return (
    <div>
      <button onClick={() => fetchTweetData('1234567890123456789')}>Get Data</button>
    </div>
  )
}

export default SaveTweet;