import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jnumhzphgpfsqjrmhzxw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudW1oenBoZ3Bmc3Fqcm1oenh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMzM0NzEsImV4cCI6MjAwMTgwOTQ3MX0.iIznuuRZMrZhIOvEzpKHETMlrtKaWprf_hw1VvUIYN4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;