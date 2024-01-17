import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rwxuribtgfnbfpsnlphp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3eHVyaWJ0Z2ZuYmZwc25scGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NzU3NzYsImV4cCI6MjAyMTA1MTc3Nn0.30fxMlN9VATw24pKQ7fsQaKEFWD1oNZbinTVcx4bauU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
