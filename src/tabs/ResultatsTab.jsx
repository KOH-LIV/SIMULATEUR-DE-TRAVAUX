import React, { useMemo } from "react";
import { calcLigne, KEY, fmt, arrVal, orDash, RATING_COLORS } from "../lib/calcul";
import { Card, Btn } from "../components/ui";

const PIECES_ORDRE = ["Chambre","Salle d'eau","Salon","Salle TV","Salle à manger","Cuisine","Buanderie","WC commun","Dégagements","Entrée","Garage","Postes transversaux"];
const ICONES = {"Chambre":"🛏","Salle d'eau":"🚿","Salon":"🛋","Salle TV":"📺","Salle à manger":"🍽","Cuisine":"🍳","Buanderie":"🧺","WC commun":"🚽","Dégagements":"🚪","Entrée":"🏠","Garage":"🔧","Postes transversaux":"⚙️"};

export function ResultatsTab({ params, qty, ov, nbP, effParams, totaux, fiche, onSave, onExportCSV, onExportPDF }) {
  const actives = useMemo(() =>
    params.filter(p => { const r = calcLigne(p,qty,ov,nbP,effParams); return r.f+r.mo > 0; }),
    [params, qty, ov, nbP, effParams]
  );

  const byPiece = useMemo(() => {
    const m = {};
    actives.forEach(p => { if (!m[p.piece]) m[p.piece] = []; m[p.piece].push(p); });
    return m;
  }, [actives]);

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
        <div style={{background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",borderRadius:14,padding:"18px 22px",color:"#fff"}}>
          <div style={{fontSize:11,opacity:.8,marginBottom:4}}>✓ Estimation normale</div>
          <div style={{fontSize:26,fontWeight:800}}>{fmt(totaux.normal)}</div>
          <div style={{fontSize:11,opacity:.7,marginTop:4}}>Travaux + MOE ({Math.round(totaux.moePct*100)}%)</div>
        </div>
        <div style={{background:"linear-gradient(135deg,#d97706,#f59e0b)",borderRadius:14,padding:"18px 22px",color:"#fff"}}>
          <div style={{fontSize:11,opacity:.8,marginBottom:4}}>⚠ Estimation haute (+{Math.round(totaux.impPct*100)}%)</div>
          <div style={{fontSize:26,fontWeight:800}}>{fmt(totaux.haut)}</div>
          <div style={{fontSize:11,opacity:.7,marginTop:4}}>Imprévus inclus</div>
        </div>
      </div>

      <Card>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          {[["Fournitures",totaux.tF],["Main d'œuvre",totaux.tMO],["Honoraires MOE",totaux.moe]].map(([l,v])=>(
            <div key={l} style={{background:"#f8fafc",borderRadius:8,padding:"10px 14px"}}>
              <div style={{fontSize:11,color:"#64748b"}}>{l}</div>
              <div style={{fontSize:16,fontWeight:700}}>{fmt(v)}</div>
            </div>
          ))}
        </div>
      </Card>

      {actives.length === 0
        ? <Card><div style={{textAlign:"center",padding:"32px 0",color:"#94a3b8"}}>
            <div style={{fontSize:36,marginBottom:10}}>🔨</div>
            <div>Aucun poste saisi. Allez dans <b>Travaux</b> pour saisir les quantités.</div>
          </div></Card>
        : PIECES_ORDRE.filter(pn => byPiece[pn]).map(pn => {
            const lignes = byPiece[pn];
            const pTotal = lignes.reduce((s,p) => { const r=calcLigne(p,qty,ov,nbP,effParams); return s+r.f+r.mo; }, 0);
            return (
              <div key={pn} style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",marginBottom:8,overflow:"hidden"}}>
                <div style={{padding:"10px 18px",background:"#f8fafc",display:"flex",alignItems:"center",gap:8}}>
                  <span>{ICONES[pn]||"📦"}</span>
                  <span style={{fontWeight:700,fontSize:13,flex:1}}>{pn}</span>
                  <span style={{fontSize:14,fontWeight:700,color:"#1d4ed8"}}>{fmt(pTotal)}</span>
                </div>
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                    <thead><tr>{["Fourniture","Poste","Fournisseur","Réf.","Qté","Fournitures","MO","Total HT"].map(h=>
                      <th key={h} style={{padding:"5px 10px",textAlign:"left",fontWeight:600,color:"#64748b",fontSize:10,background:"#fafafa",whiteSpace:"nowrap"}}>{h}</th>
                    )}</tr></thead>
                    <tbody>
                      {lignes.map(p => {
                        const ep = effParams.find(x=>x.id===p.id)||p;
                        const r = calcLigne(p,qty,ov,nbP,effParams);
                        return (
                          <tr key={KEY(p)} style={{borderTop:"1px solid #f1f5f9"}}>
                            <td style={{padding:"5px 10px",fontWeight:500}}>{p.fourniture}</td>
                            <td style={{padding:"5px 10px",color:"#64748b"}}>{p.poste}</td>
                            <td style={{padding:"5px 10px",color:"#64748b"}}>{ep.fournisseur||"—"}</td>
                            <td style={{padding:"5px 10px",color:"#64748b"}}>{ep.ref||"—"}</td>
                            <td style={{padding:"5px 10px"}}>{r.q} {p.methode}</td>
                            <td style={{padding:"5px 10px"}}>{fmt(r.f)}</td>
                            <td style={{padding:"5px 10px"}}>{fmt(r.mo)}</td>
                            <td style={{padding:"5px 10px",fontWeight:700,color:"#1d4ed8"}}>{fmt(r.f+r.mo)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
      }

      <div style={{display:"flex",gap:10,marginTop:14,flexWrap:"wrap"}}>
        <Btn onClick={onSave} variant="primary" style={{flex:1}}>💾 Sauvegarder</Btn>
        <Btn onClick={onExportCSV} style={{flex:1}}>📊 Excel / CSV</Btn>
        <Btn onClick={onExportPDF} style={{flex:1}}>📄 Imprimer / PDF</Btn>
      </div>
    </div>
  );
}
