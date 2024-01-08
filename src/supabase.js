import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from './keys';

const supabaseUrl = 'https://jzqlyxrofcillkrurhus.supabase.co';
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const connect = () => {
  console.log(supabase);
}

export const addTweet = async (title, detail, tags) => {
  const { data, error } = await supabase
    .from('tweet')
    .insert([
      { title: title, detail: detail, tags },
    ])
    .select()
  console.log(data);
}