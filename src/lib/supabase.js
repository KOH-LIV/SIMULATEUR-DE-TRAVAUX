// ─── CLIENT SUPABASE ──────────────────────────────────────────────────────
// Les variables VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY
// doivent être renseignées dans .env.local (voir .env.example)

import { createClient } from "@supabase/supabase-js";

const url  = import.meta.env.VITE_SUPABASE_URL;
const key  = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.warn("⚠ Variables Supabase manquantes. Mode local uniquement.");
}

export const supabase = url && key ? createClient(url, key) : null;

/** Indique si Supabase est configuré */
export const hasSupabase = () => !!supabase;
