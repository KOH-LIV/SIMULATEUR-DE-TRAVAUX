import React, { useState } from "react";

const PIECES_ORDRE = ["Chambre","Salle d'eau","Salon","Salle TV","Salle à manger","Cuisine","Buanderie","WC commun","Dégagements","Entrée","Garage","Postes transversaux"];
const ICONES = {"Chambre":"🛏","Salle d'eau":"🚿","Salon":"🛋","Salle TV":"📺","Salle à manger":"🍽","Cuisine":"🍳","Buanderie":"🧺","WC commun":"🚽","Dégagements":"🚪","Entrée":"🏠","Garage":"🔧","Postes transversaux":"⚙️"};

export function ParamsTab({ params, onUpdate, pList }) {
  const [open, setOpen] = useState("Chambre");

  return (
    <div>
      <div style={{background:"#fffbeb",border:"1px solid #fcd34d",borderRadius:10,padding:"10px 14px",marginBottom:12,fontSize:12,color:"#92400e"}}>
        ✏️ Les valeurs modifiées ici deviennent les <b>nouvelles valeurs par défaut</b> pour tous les projets futurs.
      </div>

      {PIECES_ORDRE.filter(pn => pList[pn]).map(pn => {
        const isOpen = open === pn;
        return (
          <div key={pn} style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",marginBottom:8,overflow:"hidden"}}>
            <div onClick={() => setOpen(isOpen ? null : pn)}
              style={{padding:"12px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:10,background:isOpen?"#eff6ff":"#fff",userSelect:"none"}}>
              <span style={{fontSize:18}}>{ICONES[pn]||"📦"}</span>
              <span style={{fontWeight:600,fontSize:14,flex:1}}>{pn}</span>
              <span style={{color:"#94a3b8"}}>{isOpen?"▲":"▼"}</span>
            </div>

            {isOpen && (
              <div style={{padding:"0 18px 14px",overflowX:"auto"}}>
                {Object.entries(pList[pn]).map(([poste, lignes]) => (
                  <div key={poste}>
                    <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",color:"#94a3b8",margin:"12px 0 6px",paddingTop:10,borderTop:"1px solid #f1f5f9"}}>{poste}</div>
                    <div style={{display:"grid",gridTemplateColumns:"2fr 80px 110px 110px 70px 70px",gap:5,marginBottom:4}}>
                      {["Fourniture","Méthode","Fournisseur","Référence","Fourn. HT","MO HT"].map(h=>
                        <div key={h} style={{fontSize:10,color:"#94a3b8",fontWeight:600}}>{h}</div>
                      )}
                    </div>
                    {lignes.map(p => (
                      <div key={p.id} style={{display:"grid",gridTemplateColumns:"2fr 80px 110px 110px 70px 70px",gap:5,marginBottom:3,alignItems:"center"}}>
                        <div style={{fontSize:12,fontWeight:500}}>{p.fourniture}</div>
                        <select value={p.methode} onChange={e=>onUpdate(p.id,"methode",e.target.value)}
                          style={{border:"1px solid #e2e8f0",borderRadius:5,padding:"3px 5px",fontSize:11,background:"#f9fafb",width:"100%"}}>
                          {["forfait","m²","m","%"].map(m=><option key={m}>{m}</option>)}
                        </select>
                        {["fournisseur","ref"].map(field=>(
                          <input key={field} type="text" value={p[field]||""} onChange={e=>onUpdate(p.id,field,e.target.value)}
                            placeholder={field==="fournisseur"?"Fournisseur":"Réf."}
                            style={{border:"1px solid #e2e8f0",borderRadius:5,padding:"3px 7px",fontSize:11,background:"#f9fafb",width:"100%",outline:"none"}}/>
                        ))}
                        {["coutHT","moHT"].map(field=>(
                          <input key={field} type="number" min="0" value={p[field]??""} onChange={e=>onUpdate(p.id,field,parseFloat(e.target.value)||0)}
                            style={{border:"1px solid #e2e8f0",borderRadius:5,padding:"3px 7px",fontSize:11,background:"#f9fafb",width:"100%",outline:"none"}}/>
                        ))}
                      </div>
                    ))}
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
