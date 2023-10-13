import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lslrmipibijmwbhftgtq.supabase.co';
const supabaseKey = process.env.EXPO_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);