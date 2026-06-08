import React, { useState, useMemo } from "react";
import { calcTotaux, calcLigne, buildEffParams, buildPList, fmt, arrVal, orDash, RATING_COLORS } from "./lib/calcul";
import { localParams, localVisites } from "./lib/storage";
import { PARAMETRES_BASE } from "./data/parametres";
import { Nav } from "./components/Nav";
import { Toast } from "./components/Toast";
import { ProjetsTab }   from "./tabs/ProjetsTab";
import { VisiteTab }    from "./tabs/VisiteTab";
import { TravauxTab }   from "./tabs/TravauxTab";
import { ResultatsTab } from "./tabs/ResultatsTab";
import { ParamsTab }    from "./tabs/ParamsTab";

const FICHE_VIDE = {
  adresse:"", date:new Date().toISOString().slice(0,10),
  typeBien:[], notes:"", nbLots:"", surfTerrain:"", surfSol:"", surfCarrez:"",
  egout:"", elec:"", plomb:"",
  etatStruct:"", etatCharp:"", etatFac:"", etatToit:"",
  nbMenuiseries:"", typeVitrage:"", etatMenuiseries:"",
  isolation:[], typeIsolant:"", etatIsolation:"", dpe:"",
  typePlanchers:"", etatPlanchers:"",
  typeSols:[], etatSols:"",
  typeMurs:[], etatMurs:"",
  typePlafonds:[], etatPlafonds:"",
};

export default function App() {
  const [tab,     setTab]     = useState("projets");
  const [toast,   setToast]   = useState("");
  const [params,  setParams]  = useState(() => localParams.get(PARAMETRES_BASE));
  const [visites, setVisites] = useState(() => localVisites.get([]));
  const [projetId,setProjetId]= useState(null);
  const [fiche,   setFiche]   = useState({...FICHE_VIDE});
  const [qty,     setQtyState]= useState({});
  const [ov,      setOvState] = useState({});
  const [nbP,     setNbPState]= useState({});

  const showToast = msg => { setToast(msg); setTimeout(() => setToast(""), 3500); };

  // ── Setters atomiques ────────────────────────────────────────────────────
  const setQty      = (k, v)        => setQtyState(m => ({...m, [k]: v}));
  const setOv       = (k, field, v) => setOvState(m => ({...m, [k]: {...m[k], [field]: v}}));
  const setNbP      = (pn, v)       => setNbPState(m => ({...m, [pn]: v}));
  const updateFiche = (k, v)        => setFiche(f => ({...f, [k]: v}));
  const toggleFiche = (k, v)        => setFiche(f => ({
    ...f,
    [k]: Array.isArray(f[k])
      ? (f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v])
      : [v],
  }));

  // ── Calculs dérivés ──────────────────────────────────────────────────────
  const effParams = useMemo(() => buildEffParams(params, ov),                              [params, ov]);
  const totaux    = useMemo(() => calcTotaux(params, qty, ov, nbP, effParams),             [params, qty, ov, nbP, effParams]);
  const pList     = useMemo(() => buildPList(params),                                      [params]);

  // ── Gestion des projets ──────────────────────────────────────────────────
  const nouveauProjet = () => {
    setFiche({...FICHE_VIDE, date: new Date().toISOString().slice(0,10)});
    setQtyState({}); setOvState({}); setNbPState({});
    setProjetId(null); setTab("visite");
  };

  const sauvegarder = () => {
    const id = projetId || Date.now();
    const v  = { id, fiche, qty, ov, nbP, dateModif: new Date().toISOString(), normal: totaux.normal, haut: totaux.haut };
    const updated = projetId
      ? visites.map(x => x.id === projetId ? v : x)
      : [...visites, v];
    setVisites(updated);
    localVisites.set(updated);
    setProjetId(id);
    showToast("✅ Projet sauvegardé");
  };

  const chargerProjet = v => {
    setFiche(v.fiche || {...FICHE_VIDE});
    setQtyState(v.qty  || {});
    setOvState(v.ov    || {});
    setNbPState(v.nbP  || {});
    setProjetId(v.id);
    setTab("visite");
  };

  const supprimerProjet = id => {
    if (!window.confirm("Supprimer ce projet définitivement ?")) return;
    const updated = visites.filter(x => x.id !== id);
    setVisites(updated);
    localVisites.set(updated);
    if (projetId === id) nouveauProjet();
    showToast("🗑 Projet supprimé");
  };

  const updateParam = (id, field, val) => {
    const u = params.map(p => p.id === id ? {...p, [field]: val} : p);
    setParams(u);
    localParams.set(u);
  };

  // ── Export / Import JSON ─────────────────────────────────────────────────
  const exportJSON = () => {
    const data = { visites, exportedAt: new Date().toISOString(), version: 2 };
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {type:"application/json"}));
    a.download = `kohliv_projets_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
  };

  const importJSON = e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const data = JSON.parse(evt.target.result);
        const imported = data.visites || [];
        if (!Array.isArray(imported) || !imported.length) { showToast("⚠ Fichier invalide"); return; }
        const existingIds = new Set(visites.map(v => String(v.id)));
        const toAdd = imported.filter(v => !existingIds.has(String(v.id)));
        const merged = [...visites, ...toAdd];
        setVisites(merged);
        localVisites.set(merged);
        showToast(`✅ ${toAdd.length} projet(s) importé(s)`);
      } catch(err) { showToast("⚠ Erreur : " + err.message); }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  // ── Export CSV ────────────────────────────────────────────────────────────
  const exportCSV = () => {
    const lignes = params.filter(p => { const r = calcLigne(p,qty,ov,nbP,effParams); return r.f+r.mo>0; });
    const rows = [
      ["KÔH-LIV — Simulateur travaux"], [],
      ["── FICHE DU BIEN ──"],
      ["Adresse", fiche.adresse||""], ["Date de visite", fiche.date||""],
      ["Type de bien", arrVal(fiche.typeBien)], ["Notes", fiche.notes||""], [],
      ["── SURFACES ──"],
      ["Nb lots", fiche.nbLots||""], ["Terrain m²", fiche.surfTerrain||""],
      ["Au sol m²", fiche.surfSol||""], ["Carrez m²", fiche.surfCarrez||""], [],
      ["── DIAGNOSTIC ──"],
      ["Tout-à-l'égout", fiche.egout||""], ["Électricité", fiche.elec||""], ["Plomberie", fiche.plomb||""],
      ["Structure", fiche.etatStruct||""], ["Charpente", fiche.etatCharp||""],
      ["Façade", fiche.etatFac||""], ["Toiture", fiche.etatToit||""],
      ["Menuiseries nb", fiche.nbMenuiseries||""], ["Vitrage", fiche.typeVitrage||""], ["État", fiche.etatMenuiseries||""],
      ["Isolation", arrVal(fiche.isolation)], ["Isolant", fiche.typeIsolant||""], ["DPE", fiche.dpe||""],
      ["Planchers", fiche.typePlanchers||""], ["État planchers", fiche.etatPlanchers||""],
      ["Sols", arrVal(fiche.typeSols)], ["État sols", fiche.etatSols||""],
      ["Murs", arrVal(fiche.typeMurs)], ["État murs", fiche.etatMurs||""],
      ["Plafonds", arrVal(fiche.typePlafonds)], ["État plafonds", fiche.etatPlafonds||""], [],
      ["── ESTIMATION ──"],
      ["Estimation normale (€ HT)", Math.round(totaux.normal)],
      ["Estimation haute +"+Math.round(totaux.impPct*100)+"% (€ HT)", Math.round(totaux.haut)],
      ["Fournitures", Math.round(totaux.tF)], ["Main d'œuvre", Math.round(totaux.tMO)], ["MOE", Math.round(totaux.moe)], [],
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

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily:"system-ui,-apple-system,sans-serif", background:"#f8fafc", minHeight:"100vh" }}>
      <Nav
        tab={tab} setTab={setTab}
        fiche={fiche} totaux={totaux}
        projetId={projetId} qty={qty}
      />
      <div style={{ maxWidth:900, margin:"0 auto", padding:16 }}>
        {tab==="projets"    && <ProjetsTab visites={visites} onLoad={chargerProjet} onDelete={supprimerProjet} onNew={nouveauProjet} onExportJSON={exportJSON} onImportJSON={importJSON}/>}
        {tab==="visite"     && <VisiteTab fiche={fiche} onUpdate={updateFiche} onToggle={toggleFiche}/>}
        {tab==="travaux"    && <TravauxTab params={params} pList={pList} qty={qty} setQty={setQty} ov={ov} setOv={setOv} nbP={nbP} setNbP={setNbP} effParams={effParams} totaux={totaux}/>}
        {tab==="resultats"  && <ResultatsTab params={params} qty={qty} ov={ov} nbP={nbP} effParams={effParams} totaux={totaux} fiche={fiche} onSave={sauvegarder} onExportCSV={exportCSV} onExportPDF={exportPDF}/>}
        {tab==="parametres" && <ParamsTab params={params} onUpdate={updateParam} pList={pList}/>}
      </div>
      <Toast msg={toast} onClose={() => setToast("")}/>
    </div>
  );
}
