import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from './keys';

const supabaseUrl = 'https://jzqlyxrofcillkrurhus.supabase.co';
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const connect = () => {
  console.log(supabase);
}

export const addTweet = async (detail, tags, imageurl, tweeturl) => {
  const { data, error } = await supabase
    .from('tweet')
    .insert([
      { detail, tags, imageurl, tweeturl},
    ])
    .select()
  console.log(data);
}

export const getTweets = async () => {
  let { data: Tweets, error } = await supabase
    .from('tweet')
    .select('*');
  console.log(Tweets);
  return Tweets;
}