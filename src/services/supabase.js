import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://irysieikmdokryzefmtr.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeXNpZWlrbWRva3J5emVmbXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4OTU2MzMsImV4cCI6MjAyMDQ3MTYzM30.lz3fED8O65h9J8kOSKAQlX7YUXAiyZvKNmByf2bKlaY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
