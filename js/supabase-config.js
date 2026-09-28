/**
 * ====================================================================
 * SUPABASE CONFIGURATION (የሱፓቤዝ ማስተካከያ)
 * ====================================================================
 * መመሪያ፦
 * 1. በ Supabase.com ላይ ፕሮጀክት ይፍጠሩ
 * 2. Project Settings -> API የሚለውን ይክፈቱ
 * 3. Project URL እና 'anon' 'public' Key ን ከታች ባለው ቦታ ይለጥፉ
 * ====================================================================
 */

// PASTE YOUR SUPABASE PROJECT URL AND ANON KEY HERE:
const SUPABASE_URL = "https://alwendubzywclmodgaoh.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsd2VuZHVienl3Y2xtb2RnYW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyNTE1NzgsImV4cCI6MjEwNTgyNzU3OH0.KpnIhh6dggUAttI9WetWugb91LPfyMOnnf2eXT3ifVw";

// Check if configured
const isSupabaseConfigured = () => {
  return (
    SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.startsWith("https://")
  );
};

// Initialize Supabase Client
let supabaseClient = null;

if (
  typeof window !== "undefined" &&
  window.supabase &&
  isSupabaseConfigured()
) {
  try {
    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY,
    );
    console.log("✅ Supabase በተሳካ ሁኔታ ተገናኝቷል (Connected to Supabase)");
  } catch (err) {
    console.error("❌ Supabase connection error:", err);
  }
} else {
  console.info(
    "ℹ️ Supabase አልተዋቀረም (Not yet configured). እባክዎ በ js/supabase-config.js ውስጥ SUPABASE_URL እና SUPABASE_ANON_KEY ን ያስገቡ።",
  );
}

// Export to global scope
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
window.supabaseClient = supabaseClient;
window.isSupabaseConfigured = isSupabaseConfigured;
