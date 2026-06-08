import React from "react";
import { fmt } from "../lib/calcul";
import { Card, Btn } from "../components/ui";

const fmtDate = s => { try { return new Date(s).toLocaleDateString("fr-FR"); } catch { return s||""; } };

export function ProjetsTab({ visites, onLoad, onDelete, onNew, onExportJSON, onImportJSON, syncing }) {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:8}}>
        <div style={{fontSize:15,fontWeight:700}}>Mes projets {syncing && <span style={{fontSize:11,color:"#94a3b8"}}>⟳ Synchronisation…</span>}</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          <Btn onClick={onNew} variant="primary">+ Nouveau</Btn>
          <Btn onClick={onExportJSON}>⬇ Exporter JSON</Btn>
          <label style={{padding:"9px 16px",borderRadius:9,border:"1px solid #e2e8f0",background:"#fff",fontWeight:600,fontSize:13,cursor:"pointer"}}>
            ⬆ Importer JSON
            <input type="file" accept=".json" onChange={onImportJSON} style={{display:"none"}}/>
          </label>
        </div>
      </div>

      {visites.length === 0
        ? <Card>
            <div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}>
              <div style={{fontSize:40,marginBottom:12}}>📁</div>
              <div style={{fontSize:14,marginBottom:8}}>Aucun projet sauvegardé</div>
              <div style={{fontSize:12,marginBottom:16,lineHeight:1.6}}>
                Remplissez la fiche Visite et les Travaux,<br/>
                puis sauvegardez depuis l'onglet Résultats.
              </div>
              <Btn onClick={onNew} variant="primary">Démarrer un projet</Btn>
            </div>
          </Card>
        : [...visites].reverse().map(v => (
            <div key={v.id} style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",padding:"14px 18px",marginBottom:10,display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
              <div style={{flex:1,minWidth:180}}>
                <div style={{fontWeight:700,fontSize:14,marginBottom:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  {v.fiche?.adresse || "Projet sans adresse"}
                </div>
                <div style={{fontSize:11,color:"#64748b",display:"flex",gap:12,flexWrap:"wrap"}}>
                  <span>📅 {fmtDate(v.fiche?.date)}</span>
                  <span>💾 {fmtDate(v.dateModif)}</span>
                  {v.fiche?.surfCarrez && <span>📐 {v.fiche.surfCarrez} m²</span>}
                  {v.fiche?.nbLots    && <span>🚪 {v.fiche.nbLots} lots</span>}
                </div>
              </div>
              <div style={{textAlign:"right",flexShrink:0}}>
                <div style={{fontSize:13,fontWeight:700,color:"#1d4ed8"}}>{fmt(v.normal)}</div>
                <div style={{fontSize:11,color:"#d97706"}}>Haut : {fmt(v.haut)}</div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <Btn onClick={() => onLoad(v)}>Ouvrir</Btn>
                <Btn onClick={() => onDelete(v.id)} variant="danger">🗑</Btn>
              </div>
            </div>
          ))
      }
    </div>
  );
}
