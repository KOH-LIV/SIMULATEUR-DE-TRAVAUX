import React, { useState, useMemo } from "react";
import { calcLigne, KEY, fmt } from "../lib/calcul";

const PIECES_ORDRE = ["Chambre","Salle d'eau","Salon","Salle TV","Salle à manger","Cuisine","Buanderie","WC commun","Dégagements","Garage","Salle spéciale","Postes transversaux"];
const ICONES = {"Chambre":"🛏","Salle d'eau":"🚿","Salon":"🛋","Salle TV":"📺","Salle à manger":"🍽","Cuisine":"🍳","Buanderie":"🧺","WC commun":"🚽","Dégagements":"🚪","Garage":"🔧","Salle spéciale":"🎯","Postes transversaux":"⚙️"};

export function TravauxTab({ params, pList, qty, setQty, ov, setOv, nbP, setNbP, effParams, totaux }) {
  const [open, setOpen] = useState(null);

  const pieceTotaux = useMemo(() => {
    const m = {};
    params.forEach(p => {
      const r = calcLigne(p, qty, ov, nbP, effParams);
      m[p.piece] = (m[p.piece] || 0) + r.f + r.mo;
    });
    return m;
  }, [params, qty, ov, nbP, effParams]);

  return (
    <div>
      <div style={{background:"#1d4a6e",borderRadius:12,padding:"12px 18px",marginBottom:12,display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}>
        <div><div style={{fontSize:11,color:"rgba(255,255,255,.7)"}}>Estimation normale</div><div style={{fontSize:22,fontWeight:800,color:"#fff"}}>{fmt(totaux.normal)}</div></div>
        <div style={{background:"rgba(255,255,255,.2)",width:1,height:36}}/>
        <div><div style={{fontSize:11,color:"rgba(255,255,255,.7)"}}>Estimation haute (+{Math.round(totaux.impPct*100)}%)</div><div style={{fontSize:22,fontWeight:800,color:"#fde68a"}}>{fmt(totaux.haut)}</div></div>
      </div>

      {PIECES_ORDRE.filter(pn => pList[pn]).map(pn => {
        const isOpen = open === pn;
        const postes = pList[pn];
        const total = pieceTotaux[pn] || 0;

        return (
          <div key={pn} style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",marginBottom:8,overflow:"hidden"}}>
            <div onClick={() => setOpen(isOpen ? null : pn)}
              style={{padding:"12px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:10,background:isOpen?"#eff6ff":"#fff",userSelect:"none"}}>
              <span style={{fontSize:18}}>{ICONES[pn]||"📦"}</span>
              <span style={{fontWeight:600,fontSize:14,flex:1}}>{pn}</span>
              <div onClick={e => e.stopPropagation()}
                style={{display:"flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #e2e8f0",borderRadius:8,padding:"3px 10px"}}>
                <span style={{fontSize:11,color:"#64748b",whiteSpace:"nowrap"}}>Nb de pièces</span>
                <input type="number" min="0" value={nbP[pn]??""} placeholder="1"
                  onChange={e => setNbP(pn, e.target.value)}
                  style={{width:48,border:"none",outline:"none",fontSize:15,fontWeight:700,color:"#1d4ed8",textAlign:"center",background:"transparent",touchAction:"manipulation"}}/>
              </div>
              {total > 0 && <span style={{fontSize:13,fontWeight:700,color:"#1d4ed8"}}>{fmt(total)}</span>}
              <span style={{color:"#94a3b8",fontSize:13}}>{isOpen?"▲":"▼"}</span>
            </div>

            {isOpen && (
              <div style={{padding:"0 18px 14px"}}>
                {Object.entries(postes).map(([poste, lignes]) => (
                  <div key={poste}>
                    <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",color:"#94a3b8",margin:"10px 0 6px",paddingTop:10,borderTop:"1px solid #f1f5f9"}}>{poste}</div>
                    {lignes.map(p => {
                      const k = KEY(p);
                      const ep = effParams.find(x => x.id === p.id) || p;
                      const q = qty[k] ?? "";
                      const ovC = ov[k]?.cout;
                      const ovM = ov[k]?.mo;
                      const r = calcLigne(p, qty, ov, nbP, effParams);
                      const total = r.f + r.mo;
                      return (
                        <div key={k} style={{display:"grid",gridTemplateColumns:"2fr 80px 90px 90px 80px",gap:6,alignItems:"center",marginBottom:4,padding:"5px 8px",borderRadius:8,background:q?"#f0f9ff":"#fafafa"}}>
                          <div>
                            <div style={{fontSize:12,fontWeight:q?600:400}}>{p.fourniture}</div>
                            {ep.fournisseur && <div style={{fontSize:10,color:"#94a3b8"}}>{ep.fournisseur}</div>}
                          </div>
                          <div>
                            <div style={{fontSize:9,color:"#94a3b8",marginBottom:1}}>Qté/{p.methode}</div>
                            <input type="number" min="0" value={q} onChange={e=>setQty(k,e.target.value)} placeholder="0"
                              style={{width:"100%",border:"1px solid #e2e8f0",borderRadius:6,padding:"6px 8px",fontSize:14,background:"#fff",outline:"none",touchAction:"manipulation"}}/>
                          </div>
                          <div>
                            <div style={{fontSize:9,color:"#94a3b8",marginBottom:1}}>Fourn.{ovC!=null?" ✏":""}</div>
                            <input type="number" min="0" value={ovC??ep.coutHT??""} onChange={e=>setOv(k,"cout",e.target.value)}
                              style={{width:"100%",border:`1px solid ${ovC!=null?"#f59e0b":"#e2e8f0"}`,borderRadius:6,padding:"5px 7px",fontSize:12,background:"#fff",outline:"none"}}/>
                          </div>
                          <div>
                            <div style={{fontSize:9,color:"#94a3b8",marginBottom:1}}>MO{ovM!=null?" ✏":""}</div>
                            <input type="number" min="0" value={ovM??ep.moHT??""} onChange={e=>setOv(k,"mo",e.target.value)}
                              style={{width:"100%",border:`1px solid ${ovM!=null?"#f59e0b":"#e2e8f0"}`,borderRadius:6,padding:"5px 7px",fontSize:12,background:"#fff",outline:"none"}}/>
                          </div>
                          <div style={{fontSize:13,fontWeight:700,textAlign:"right",color:total>0?"#1d4ed8":"#cbd5e1"}}>
                            {total > 0 ? fmt(total) : "—"}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
