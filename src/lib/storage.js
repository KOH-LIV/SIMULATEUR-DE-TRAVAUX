// ─── STORAGE LOCAL ────────────────────────────────────────────────────────
// Abstraction au-dessus de localStorage.
// Utilisé comme fallback hors-ligne ou si Supabase n'est pas configuré.

const SK_PARAMS  = "kohliv_params_v1";
const SK_VISITES = "kohliv_visites_v1";

const local = {
  get: (key, def = null) => {
    try {
      const s = localStorage.getItem(key);
      return s ? JSON.parse(s) : def;
    } catch { return def; }
  },
  set: (key, val) => {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  },
  remove: (key) => {
    try { localStorage.removeItem(key); } catch {}
  },
};

export const localParams  = { get: (def) => local.get(SK_PARAMS,  def), set: (v) => local.set(SK_PARAMS,  v) };
export const localVisites = { get: (def) => local.get(SK_VISITES, def), set: (v) => local.set(SK_VISITES, v) };
