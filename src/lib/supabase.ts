import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lslrmipibijmwbhftgtq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbHJtaXBpYmlqbXdiaGZ0Z3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxNDA3MjQsImV4cCI6MjAxMjcxNjcyNH0.NfkuMx9_3uo5J0UTepTbqUxMzy9zxfouS4xAbqtflDA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});