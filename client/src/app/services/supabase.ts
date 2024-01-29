import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uopxogerepelbzvxlvye.supabase.co'
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcHhvZ2VyZXBlbGJ6dnhsdnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NDk5MzQsImV4cCI6MjAyMjEyNTkzNH0.Bpvov__q4u0tVlo6Yf6cDG5_PetSFZMMxxU7BQup5x4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase