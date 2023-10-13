import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lslrmipibijmwbhftgtq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbHJtaXBpYmlqbXdiaGZ0Z3RxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzE0MDcyNCwiZXhwIjoyMDEyNzE2NzI0fQ.oxzaAx-4CODbPgoODU35_cBcErnu1FQ9SL5mG-4GzM0';

export const supabase = createClient(supabaseUrl, supabaseKey);