/**
 * Browser Supabase client (optional). Flask still uses Postgres via DATABASE_URL in app.py.
 * This module is safe to load when SUPABASE_URL + SUPABASE_ANON_KEY are set in .env.local.
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function readMeta(name) {
  const el = document.querySelector(`meta[name="${name}"]`);
  const v = el?.getAttribute("content");
  return v ? v.trim() : "";
}

const url = readMeta("supabase-url");
const anonKey = readMeta("supabase-anon-key");

/** @type {import('@supabase/supabase-js').SupabaseClient | null} */
export const supabase =
  url && anonKey ? createClient(url, anonKey) : null;

if (typeof window !== "undefined") {
  window.__supabase = supabase;
}
