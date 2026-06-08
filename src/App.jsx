import React, { useState, useEffect, useMemo } from "react";
import { supabase, hasSupabase } from "./lib/supabase";
import { calcTotaux, buildEffParams, buildPList, KEY, fmt, arrVal, orDash, RATING_COLORS } from "./lib/calcul";
import { localParams } from "./lib/storage";
import { PARAMETRES_BASE } from "./data/parametres";
import { useProjet } from "./hooks/useProjet";
import { Nav, TABS } from "./components/Nav";
import { Toast } from "./components/Toast";
import { Auth } from "./components/Auth";
import { ProjetsTab }   from "./tabs/ProjetsTab";
import { VisiteTab }    from "./tabs/VisiteTab";
import { TravauxTab }   from "./tabs/TravauxTab";
import { ResultatsTab } from "./tabs/ResultatsTab";
import { ParamsTab }    from "./tabs/ParamsTab";

export default function App() {
  const [tab,    setTab]    = useState("projets");
  const [user,   setUser]   = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [toast,  setToast]  = useState("");
  const [params, setParams] = useState(() => localParams.get(PARAMETRES_BASE));

  const showToast = msg => { setToast(msg); setTimeout(() => setToast(""), 3500); };

  // ── Auth Supabase ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!hasSupabase()) { setAuthReady(true); return; }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthReady(true);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase?.auth.signOut();
    setUser(null);
  };

  // ── Projets ───────────────────────────────────────────────────────────────
  const projet = useProjet(user?.id, showToast);

  // ── Paramètres effectifs + pList ─────────────────────────────────────────
  const effParams = useMemo(() => buildEffParams(params, projet.ov), [params, projet.ov]);
  const totaux    = useMemo(() => calcTotaux(params, projet.qty, projet.ov, projet.nbP, effParams), [params, projet.qty, projet.ov, projet.nbP, effParams]);
  const pList     = useMemo(() => buildPList(params), [params]);

  const updateParam = (id, field, val) => {
    const u = params.map(p => p.id === id ? { ...p, [field]: val } : p);
    setParams(u);
    localParams.set(u);
  };

  // ── Export CSV ────────────────────────────────────────────────────────────
  const exportCSV = () => {
    const { fiche, qty, ov, nbP } = projet;
    const lignes = params.filter(p => { const r = calcLigne(p,qty,ov,nbP,effParams); return r.f+r.mo>0; });
    const rows = [
      ["KÔH-LIV — Simulateur travaux"],
      [],
      ["── FICHE DU BIEN ──"],
      ["Adresse", fiche.adresse||""], ["Date de visite", fiche.date||""],
      ["Type de bien", arrVal(fiche.typeBien)], ["Notes", fiche.notes||""],
      [],
      ["── SURFACES ──"],
      ["Nb lots", fiche.nbLots||""], ["Terrain m²", fiche.surfTerrain||""],
      ["Au sol m²", fiche.surfSol||""], ["Carrez m²", fiche.surfCarrez||""],
      [],
      ["── DIAGNOSTIC ──"],
      ["Tout-à-l'égout", fiche.egout||""], ["Électricité", fiche.elec||""], ["Plomberie", fiche.plomb||""],
      ["Structure", fiche.etatStruct||""], ["Charpente", fiche.etatCharp||""],
      ["Façade", fiche.etatFac||""], ["Toiture", fiche.etatToit||""],
      ["Menuiseries nb", fiche.nbMenuiseries||""], ["Vitrage", fiche.typeVitrage||""], ["État", fiche.etatMenuiseries||""],
      ["Isolation", arrVal(fiche.isolation)], ["Isolant", fiche.typeIsolant||""], ["DPE", fiche.dpe||""],
      ["Planchers", fiche.typePlanchers||""], ["État planchers", fiche.etatPlanchers||""],
      ["Sols", arrVal(fiche.typeSols)], ["État sols", fiche.etatSols||""],
      ["Murs", arrVal(fiche.typeMurs)], ["État murs", fiche.etatMurs||""],
      ["Plafonds", arrVal(fiche.typePlafonds)], ["État plafonds", fiche.etatPlafonds||""],
      [],
      ["── ESTIMATION ──"],
      ["Estimation normale (€ HT)", Math.round(totaux.normal)],
      ["Estimation haute +"+Math.round(totaux.impPct*100)+"% (€ HT)", Math.round(totaux.haut)],
      ["Fournitures", Math.round(totaux.tF)], ["Main d'œuvre", Math.round(totaux.tMO)], ["MOE", Math.round(totaux.moe)],
      [],
      ["── DÉTAIL PAR POSTE ──"],
      ["Pièce","Nb pièces","Poste","Fourniture","Méthode","Fournisseur","Référence","Coût HT","Prestataire","MO HT","Quantité","Total Fourn.","Total MO","Total HT"],
      ...lignes.map(p => {
        const ep = effParams.find(x=>x.id===p.id)||p;
        const r  = calcLigne(p, qty, ov, nbP, effParams);
        return [p.piece, r.nb, p.poste, p.fourniture, p.methode, ep.fournisseur||"", ep.ref||"",
                ep.coutHT, ep.prestataire||"", ep.moHT, r.q,
                Math.round(r.f), Math.round(r.mo), Math.round(r.f+r.mo)];
      }),
    ];
    const csv = rows.map(r => r.map(c => `"${String(c??'').replace(/"/g,'""')}"`).join(";")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["\ufeff"+csv], {type:"text/csv;charset=utf-8"}));
    a.download = `Simulation_${fiche.adresse||"kohliv"}_${fiche.date}.csv`;
    a.click();
  };

  // ── Export PDF ────────────────────────────────────────────────────────────
  const exportPDF = () => {
    const { fiche, qty, ov, nbP } = projet;
    const w = window.open("","_blank"); if (!w) return;
    const etatBadge = v => v
      ? `<span style="background:${RATING_COLORS[v]||"#94a3b8"};color:#fff;padding:2px 8px;border-radius:12px;font-size:11px">${v}</span>`
      : "<span style='color:#94a3b8'>—</span>";

    const tableRows = params
      .filter(p => { const r=calcLigne(p,qty,ov,nbP,effParams); return r.f+r.mo>0; })
      .map(p => {
        const ep = effParams.find(x=>x.id===p.id)||p;
        const r  = calcLigne(p, qty, ov, nbP, effParams);
        return "<tr><td>"+p.piece+"</td><td>"+r.nb+"</td><td>"+p.poste+"</td><td>"+p.fourniture
          +"</td><td>"+(ep.fournisseur||"—")+"</td><td>"+r.q+" "+p.methode
          +"</td><td>"+fmt(r.f)+"</td><td>"+fmt(r.mo)+"</td><td style='font-weight:700'>"+fmt(r.f+r.mo)+"</td></tr>";
      }).join("");

    w.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
<title>KÔH-LIV — ${fiche.adresse||"Simulation"}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;padding:24px;font-size:12px;color:#111;max-width:900px;margin:0 auto}
h1{font-size:18px;font-weight:800;color:#1d4a6e;margin-bottom:4px}
h2{font-size:13px;font-weight:700;color:#1d4a6e;text-transform:uppercase;letter-spacing:.06em;margin:16px 0 8px;padding-bottom:4px;border-bottom:2px solid #1d4a6e}
h3{font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;margin:10px 0 5px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px}
.g4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:8px}
.f{background:#f8fafc;border-radius:6px;padding:6px 10px}
.fl{font-size:10px;color:#64748b;margin-bottom:2px}
.fv{font-size:12px;font-weight:500}
.totaux{display:flex;gap:12px;margin:10px 0}
.tc{flex:1;padding:12px 16px;border-radius:8px;color:#fff}
.tn{background:linear-gradient(135deg,#1d4ed8,#3b82f6)}
.th{background:linear-gradient(135deg,#d97706,#f59e0b)}
.tl{font-size:10px;opacity:.85;margin-bottom:3px}
.tv{font-size:18px;font-weight:800}
table{width:100%;border-collapse:collapse;font-size:11px}
th{background:#1d4a6e;color:#fff;padding:4px 7px;text-align:left;font-size:10px}
td{padding:3px 7px;border-bottom:1px solid #f0f0f0}
tr:nth-child(even) td{background:#f8fafc}
.notes{background:#fffbeb;border:1px solid #fcd34d;border-radius:6px;padding:7px 10px;font-style:italic;margin:6px 0;font-size:11px}
</style></head><body>
<h1>KÔH-LIV — Simulation travaux</h1>
<p style="color:#64748b;font-size:10px;margin-bottom:14px">Généré le ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}</p>
<h2>Fiche du bien</h2>
<div class="g2"><div class="f"><div class="fl">Adresse</div><div class="fv">${orDash(fiche.adresse)}</div></div><div class="f"><div class="fl">Date</div><div class="fv">${orDash(fiche.date)}</div></div></div>
<div class="f" style="margin-bottom:8px"><div class="fl">Type</div><div class="fv">${arrVal(fiche.typeBien)}</div></div>
${fiche.notes?`<div class="notes">${fiche.notes}</div>`:""}
<h2>Surfaces & configuration</h2>
<div class="g4">
<div class="f"><div class="fl">Lots</div><div class="fv">${orDash(fiche.nbLots)}</div></div>
<div class="f"><div class="fl">Terrain m²</div><div class="fv">${orDash(fiche.surfTerrain)}</div></div>
<div class="f"><div class="fl">Au sol m²</div><div class="fv">${orDash(fiche.surfSol)}</div></div>
<div class="f"><div class="fl">Carrez m²</div><div class="fv">${orDash(fiche.surfCarrez)}</div></div>
</div>
<h2>Diagnostic général</h2>
<h3>Réseaux & structure</h3>
<div class="g4">
<div class="f"><div class="fl">Tout-à-l'égout</div><div class="fv">${orDash(fiche.egout)}</div></div>
<div class="f"><div class="fl">Électricité</div><div class="fv">${orDash(fiche.elec)}</div></div>
<div class="f"><div class="fl">Plomberie</div><div class="fv">${orDash(fiche.plomb)}</div></div>
<div class="f"><div class="fl">DPE</div><div class="fv">${orDash(fiche.dpe)}</div></div>
</div>
<div class="g4">
<div class="f"><div class="fl">Structure</div><div class="fv">${etatBadge(fiche.etatStruct)}</div></div>
<div class="f"><div class="fl">Charpente</div><div class="fv">${etatBadge(fiche.etatCharp)}</div></div>
<div class="f"><div class="fl">Façade</div><div class="fv">${etatBadge(fiche.etatFac)}</div></div>
<div class="f"><div class="fl">Toiture</div><div class="fv">${etatBadge(fiche.etatToit)}</div></div>
</div>
<h3>Menuiseries</h3>
<div class="g3">
<div class="f"><div class="fl">Nombre</div><div class="fv">${orDash(fiche.nbMenuiseries)}</div></div>
<div class="f"><div class="fl">Vitrage</div><div class="fv">${orDash(fiche.typeVitrage)}</div></div>
<div class="f"><div class="fl">État</div><div class="fv">${etatBadge(fiche.etatMenuiseries)}</div></div>
</div>
<h3>Isolation & énergie</h3>
<div class="g4">
<div class="f"><div class="fl">Isolation</div><div class="fv">${arrVal(fiche.isolation)}</div></div>
<div class="f"><div class="fl">Isolant</div><div class="fv">${orDash(fiche.typeIsolant)}</div></div>
<div class="f"><div class="fl">État</div><div class="fv">${etatBadge(fiche.etatIsolation)}</div></div>
</div>
<h3>Revêtements intérieurs</h3>
<div class="g2">
<div class="f"><div class="fl">Planchers / état</div><div class="fv">${orDash(fiche.typePlanchers)} / ${etatBadge(fiche.etatPlanchers)}</div></div>
<div class="f"><div class="fl">Sols / état</div><div class="fv">${arrVal(fiche.typeSols)} / ${etatBadge(fiche.etatSols)}</div></div>
<div class="f"><div class="fl">Murs / état</div><div class="fv">${arrVal(fiche.typeMurs)} / ${etatBadge(fiche.etatMurs)}</div></div>
<div class="f"><div class="fl">Plafonds / état</div><div class="fv">${arrVal(fiche.typePlafonds)} / ${etatBadge(fiche.etatPlafonds)}</div></div>
</div>
<h2>Estimation travaux</h2>
<div class="totaux">
<div class="tc tn"><div class="tl">✓ Estimation normale</div><div class="tv">${fmt(totaux.normal)}</div></div>
<div class="tc th"><div class="tl">⚠ Estimation haute (+${Math.round(totaux.impPct*100)}%)</div><div class="tv">${fmt(totaux.haut)}</div></div>
</div>
<div class="g3">
<div class="f"><div class="fl">Fournitures</div><div class="fv">${fmt(totaux.tF)}</div></div>
<div class="f"><div class="fl">Main d'œuvre</div><div class="fv">${fmt(totaux.tMO)}</div></div>
<div class="f"><div class="fl">Honoraires MOE</div><div class="fv">${fmt(totaux.moe)}</div></div>
</div>
<h2>Détail par poste</h2>
<table><thead><tr><th>Pièce</th><th>Nb</th><th>Poste</th><th>Fourniture</th><th>Fournisseur</th><th>Qté</th><th>Fourn. HT</th><th>MO HT</th><th>Total HT</th></tr></thead>
<tbody>${tableRows}</tbody></table>
<p style="margin-top:20px;color:#94a3b8;font-size:10px;text-align:right">KÔH-LIV — Easy • Cosy • Community</p>
</body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 400);
  };

  // ── Affichage conditionnel Auth ───────────────────────────────────────────
  if (!authReady) return <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",color:"#94a3b8"}}>Chargement…</div>;

  // Si Supabase est configuré mais pas connecté → écran de connexion
  if (hasSupabase() && !user) return <Auth />;

  // ── Render principal ─────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily:"system-ui,-apple-system,sans-serif", background:"#f8fafc", minHeight:"100vh" }}>
      <Nav
        tab={tab} setTab={setTab}
        fiche={projet.fiche} totaux={totaux}
        projetId={projet.projetId} qty={projet.qty}
        onLogout={hasSupabase() && user ? handleLogout : null}
        syncing={projet.syncing}
      />

      <div style={{ maxWidth:900, margin:"0 auto", padding:16 }}>
        {tab==="projets"    && <ProjetsTab visites={projet.visites} onLoad={projet.chargerProjet} onDelete={projet.supprimerProjet} onNew={projet.nouveauProjet} onExportJSON={projet.exportJSON} onImportJSON={projet.importJSON} syncing={projet.syncing}/>}
        {tab==="visite"     && <VisiteTab fiche={projet.fiche} onUpdate={projet.updateFiche} onToggle={projet.toggleFiche}/>}
        {tab==="travaux"    && <TravauxTab params={params} pList={pList} qty={projet.qty} setQty={projet.setQty} ov={projet.ov} setOv={projet.setOv} nbP={projet.nbP} setNbP={projet.setNbP} effParams={effParams} totaux={totaux}/>}
        {tab==="resultats"  && <ResultatsTab params={params} qty={projet.qty} ov={projet.ov} nbP={projet.nbP} effParams={effParams} totaux={totaux} fiche={projet.fiche} onSave={() => projet.sauvegarder(totaux)} onExportCSV={exportCSV} onExportPDF={exportPDF}/>}
        {tab==="parametres" && <ParamsTab params={params} onUpdate={updateParam} pList={pList}/>}
      </div>

      <Toast msg={toast} onClose={() => setToast("")}/>
    </div>
  );
}

// Import manquant dans App — doit être disponible globalement depuis calcul.js
import { calcLigne } from "./lib/calcul";
