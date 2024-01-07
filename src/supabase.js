import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from './key';

const supabaseUrl = 'https://zhviitozutfknnmixsyw.supabase.co';
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const connect = () => {
  console.log(supabase);
}