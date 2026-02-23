import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://zbujweozhqpfmfrrcsac.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpidWp3ZW96aHFwZm1mcnJjc2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NDI1NjEsImV4cCI6MjA4NzIxODU2MX0.B1LhXwTGZy4ablhFv5zoD5LAYB7zRGFhAAMtF1R4Xog";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
