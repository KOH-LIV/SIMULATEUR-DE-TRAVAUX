// ─── UTILITAIRES DE CALCUL ────────────────────────────────────────────────
// Toute la logique métier est ici. Aucun calcul ne doit être dupliqué ailleurs.

/** Clé unique d'identification d'un poste */
export const KEY = p => `${p.piece}|${p.poste}|${p.fourniture}`;

/** Formate un montant en euros */
export const fmt = n => n ? Math.round(n).toLocaleString("fr-FR") + " €" : "0 €";

/** Formate une date ISO en date française */
export const fmtDate = s => {
  try { return new Date(s).toLocaleDateString("fr-FR"); } catch { return s || ""; }
};

/** Valeur ou "—" */
export const orDash = v => v || "—";

/** Tableau → chaîne lisible */
export const arrVal = a => Array.isArray(a) && a.length ? a.join(", ") : "—";

/**
 * Calcule le coût d'une ligne de poste pour un projet donné.
 * @returns {{ f: number, mo: number, nb: number, q: number }}
 */
export const calcLigne = (p, qty, ov, nbP, effParams) => {
  if (p.methode === "%") return { f: 0, mo: 0, nb: 0, q: 0 };

  const ep = effParams.find(x => x.id === p.id) || p;
  const q = parseFloat(qty[KEY(p)] ?? 0) || 0;
  const nbRaw = nbP?.[p.piece];
  const nb = (nbRaw === undefined || nbRaw === "") ? 1 : (parseFloat(nbRaw) || 0);

  if (!q || !nb) return { f: 0, mo: 0, nb, q };

  return {
    f:  (parseFloat(ep.coutHT) || 0) * q * nb,
    mo: (parseFloat(ep.moHT)   || 0) * q * nb,
    nb,
    q,
  };
};

/**
 * Calcule les totaux globaux d'un projet.
 */
export const calcTotaux = (params, qty, ov, nbP, effParams) => {
  let tF = 0, tMO = 0;
  params.forEach(p => {
    const r = calcLigne(p, qty, ov, nbP, effParams);
    tF += r.f;
    tMO += r.mo;
  });

  const base    = tF + tMO;
  const moePct  = (parseFloat(effParams.find(p => p.fourniture === "Honoraires MOE (%)")?.coutHT ?? 10)) / 100;
  const impPct  = (parseFloat(effParams.find(p => p.fourniture === "Imprévus (%)"       )?.coutHT ?? 15)) / 100;
  const moe     = base * moePct;
  const normal  = base + moe;
  const haut    = normal * (1 + impPct);

  return { tF, tMO, base, moe, normal, haut, moePct, impPct };
};

/** Calcule les paramètres effectifs en appliquant les overrides projet */
export const buildEffParams = (params, ov) =>
  params.map(p => {
    const o = ov[KEY(p)];
    return { ...p, coutHT: o?.cout ?? p.coutHT, moHT: o?.mo ?? p.moHT };
  });

/** Groupe les params par pièce → poste → lignes */
export const buildPList = params => {
  const g = {};
  params.forEach(p => {
    if (!g[p.piece]) g[p.piece] = {};
    if (!g[p.piece][p.poste]) g[p.piece][p.poste] = [];
    g[p.piece][p.poste].push(p);
  });
  return g;
};
