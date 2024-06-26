import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ilcbgtlcqveqmxguteye.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsY2JndGxjcXZlcW14Z3V0ZXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyODQyMzUsImV4cCI6MjAzNDg2MDIzNX0.dDRHlwHBTUhBxjSV1eCtaYCZ5-0ChTMteYK_bxxhQRU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
