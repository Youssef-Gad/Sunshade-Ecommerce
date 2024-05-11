import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://acsiwxkzzpxnzwnjctqo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjc2l3eGt6enB4bnp3bmpjdHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjU5MjAsImV4cCI6MjAzMDAwMTkyMH0.D8LYCEE0E_tlZBclq_fEvUPr9NztPk-GNGcSoC7_2rQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
