import React from "react";
import { Card, Field, TextInput, NumInput, MultiPills, SinglePills, RatingPills, SectionLabel, RATING_COLORS } from "../components/ui";

export function VisiteTab({ fiche, onUpdate, onToggle }) {
  const uf = (k, v) => onUpdate(k, v);
  const ta = k => v => onToggle(k, v);

  return (
    <div>
      <Card title="Fiche du bien">
        <div className="grid2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:10 }}>
          <Field label="Adresse"><TextInput value={fiche.adresse} onChange={v=>uf("adresse",v)} placeholder="12 rue des Minimes, Toulouse"/></Field>
          <Field label="Date de visite"><TextInput type="date" value={fiche.date} onChange={v=>uf("date",v)}/></Field>
        </div>
        <Field label="Type de bien">
          <div style={{margin:"6px 0 10px"}}>
            <MultiPills options={["Maison individuelle","Immeuble collectif","Terrain constructible","Autre"]} value={fiche.typeBien} onChange={ta("typeBien")}/>
          </div>
        </Field>
        <Field label="Notes">
          <textarea value={fiche.notes} onChange={e=>uf("notes",e.target.value)} placeholder="Observations générales…"
            style={{width:"100%",border:"1px solid #e2e8f0",borderRadius:7,padding:"7px 10px",fontSize:12,background:"#f9fafb",resize:"vertical",minHeight:50,outline:"none",fontFamily:"inherit"}}/>
        </Field>
      </Card>

      <Card title="Diagnostic général">
        {/* Surfaces */}
        <div className="grid4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:12}}>
          {[["nbLots","Nb lots"],["surfTerrain","Terrain m²"],["surfSol","Au sol m²"],["surfCarrez","Carrez m²"]].map(([k,l])=>
            <Field key={k} label={l}><NumInput value={fiche[k]} onChange={v=>uf(k,v)}/></Field>
          )}
        </div>

        {/* Réseaux & structure */}
        <SectionLabel>Réseaux & structure</SectionLabel>
        <div className="grid3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:10}}>
          <Field label="Tout-à-l'égout"><SinglePills options={["Oui","Non"]} value={fiche.egout} onChange={v=>uf("egout",v)}/></Field>
          <Field label="Électricité"><SinglePills options={["Aux normes","À revoir"]} value={fiche.elec} onChange={v=>uf("elec",v)}/></Field>
          <Field label="Plomberie"><SinglePills options={["Fonctionnelle","À revoir"]} value={fiche.plomb} onChange={v=>uf("plomb",v)}/></Field>
        </div>
        <div className="grid4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:12}}>
          {[["Structure","etatStruct"],["Charpente","etatCharp"],["Façade","etatFac"],["Toiture","etatToit"]].map(([l,k])=>
            <Field key={k} label={l}><RatingPills value={fiche[k]} onChange={v=>uf(k,v)}/></Field>
          )}
        </div>

        {/* Menuiseries */}
        <SectionLabel>Menuiseries</SectionLabel>
        <div className="grid3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:12}}>
          <Field label="Nombre"><NumInput value={fiche.nbMenuiseries} onChange={v=>uf("nbMenuiseries",v)}/></Field>
          <Field label="Vitrage"><SinglePills options={["Simple","Double"]} value={fiche.typeVitrage} onChange={v=>uf("typeVitrage",v)}/></Field>
          <Field label="État"><RatingPills value={fiche.etatMenuiseries} onChange={v=>uf("etatMenuiseries",v)}/></Field>
        </div>

        {/* Isolation & DPE */}
        <SectionLabel>Isolation & énergie</SectionLabel>
        <div className="grid3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:10}}>
          <Field label="Type isolation">
            <MultiPills options={["ITI","ITE","Combles","Vide sanitaire"]} value={fiche.isolation} onChange={ta("isolation")}/>
          </Field>
          <Field label="Type isolant">
            <SinglePills options={["Laine de verre","Laine de roche","PSE","XPS","PUR"]} value={fiche.typeIsolant} onChange={v=>uf("typeIsolant",v)}/>
          </Field>
          <Field label="État"><RatingPills value={fiche.etatIsolation} onChange={v=>uf("etatIsolation",v)}/></Field>
        </div>
        <Field label="DPE" style={{marginBottom:12}}>
          <SinglePills
            options={["A","B","C","D","E","F","G","NC"]}
            colors={["#319834","#51be34","#99cc32","#f0cc00","#f0a000","#e05a00","#cc0000","#94a3b8"]}
            value={fiche.dpe} onChange={v=>uf("dpe",v)}/>
        </Field>

        {/* Revêtements */}
        <SectionLabel>Revêtements intérieurs</SectionLabel>
        <div className="grid2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {[
            {l:"Planchers",tk:"typePlanchers",ek:"etatPlanchers",opts:["Béton","Bois"],multi:false},
            {l:"Sols",tk:"typeSols",ek:"etatSols",opts:["Lino","Flottant","Parquet","Carrelage"],multi:true},
            {l:"Murs",tk:"typeMurs",ek:"etatMurs",opts:["Carreaux de plâtre","Béton cellulaire","Parpaing","Briques","Plaques de plâtre"],multi:true},
            {l:"Plafonds",tk:"typePlafonds",ek:"etatPlafonds",opts:["Plaques de plâtre","Lambris"],multi:true},
          ].map(({l,tk,ek,opts,multi})=>(
            <div key={l}>
              <Field label={`Type ${l.toLowerCase()}`}>
                <div style={{marginBottom:6}}>
                  {multi
                    ? <MultiPills options={opts} value={fiche[tk]} onChange={ta(tk)}/>
                    : <SinglePills options={opts} value={fiche[tk]} onChange={v=>uf(tk,v)}/>
                  }
                </div>
              </Field>
              <Field label={`État ${l.toLowerCase()}`}>
                <RatingPills value={fiche[ek]} onChange={v=>uf(ek,v)}/>
              </Field>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
