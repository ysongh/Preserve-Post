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
  console.log(Tweets, error);
  if (error) return [];
  return Tweets;
}

export const getTweetsByTag = async (search) => {
  let { data: Tweets, error } = await supabase
    .from('tweet')
    .select('*')
    .containedBy('tags', [search.toLocaleLowerCase()]);
  console.log(Tweets);
  console.log(error);
  if (error) return [];
  return Tweets;
}