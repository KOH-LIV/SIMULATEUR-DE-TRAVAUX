// ─── HOOK useProjet ────────────────────────────────────────────────────────
// Centralise toute la logique de gestion des projets :
// sauvegarde, chargement, suppression, sync Supabase ↔ localStorage.

import { useState, useEffect, useCallback } from "react";
import { supabase, hasSupabase } from "../lib/supabase";
import { localVisites } from "../lib/storage";

const FICHE_VIDE = {
  adresse: "", date: new Date().toISOString().slice(0, 10),
  typeBien: [], notes: "", nbLots: "", surfTerrain: "", surfSol: "", surfCarrez: "",
  egout: "", elec: "", plomb: "",
  etatStruct: "", etatCharp: "", etatFac: "", etatToit: "",
  nbMenuiseries: "", typeVitrage: "", etatMenuiseries: "",
  isolation: [], typeIsolant: "", etatIsolation: "", dpe: "",
  typePlanchers: "", etatPlanchers: "",
  typeSols: [], etatSols: "",
  typeMurs: [], etatMurs: "",
  typePlafonds: [], etatPlafonds: "",
};

export { FICHE_VIDE };

export function useProjet(userId, showToast) {
  const [visites,   setVisites]   = useState([]);
  const [projetId,  setProjetId]  = useState(null);
  const [fiche,     setFicheState] = useState({ ...FICHE_VIDE });
  const [qty,       setQtyState]  = useState({});
  const [ov,        setOvState]   = useState({});
  const [nbP,       setNbPState]  = useState({});
  const [syncing,   setSyncing]   = useState(false);

  // ── Chargement initial ──────────────────────────────────────────────────
  useEffect(() => {
    if (userId && hasSupabase()) {
      loadFromSupabase();
    } else {
      setVisites(localVisites.get([]));
    }
  }, [userId]);

  // ── Supabase : lecture ──────────────────────────────────────────────────
  const loadFromSupabase = async () => {
    setSyncing(true);
    try {
      const { data, error } = await supabase
        .from("projets")
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false });

      if (error) throw error;

      const visitesMapped = data.map(row => ({
        id:          row.id,
        fiche:       row.fiche,
        qty:         row.qty,
        ov:          row.ov,
        nbP:         row.nb_pieces,
        dateModif:   row.updated_at,
        normal:      row.normal,
        haut:        row.haut,
      }));

      setVisites(visitesMapped);
      localVisites.set(visitesMapped); // cache local
    } catch (err) {
      console.error("Erreur chargement Supabase:", err);
      // Fallback local
      setVisites(localVisites.get([]));
    } finally {
      setSyncing(false);
    }
  };

  // ── Sauvegarde ──────────────────────────────────────────────────────────
  const sauvegarder = useCallback(async (totaux) => {
    const now = new Date().toISOString();
    const payload = {
      fiche, qty, ov, nbP,
      dateModif: now,
      normal: totaux.normal,
      haut:   totaux.haut,
    };

    if (userId && hasSupabase()) {
      setSyncing(true);
      try {
        const row = {
          user_id:    userId,
          adresse:    fiche.adresse || "",
          date_visite:fiche.date   || null,
          fiche,
          qty,
          ov,
          nb_pieces:  nbP,
          normal:     totaux.normal,
          haut:       totaux.haut,
          updated_at: now,
        };

        let savedId = projetId;

        if (projetId) {
          // Mise à jour
          const { error } = await supabase
            .from("projets")
            .update(row)
            .eq("id", projetId)
            .eq("user_id", userId);
          if (error) throw error;
        } else {
          // Création
          const { data, error } = await supabase
            .from("projets")
            .insert({ ...row })
            .select("id")
            .single();
          if (error) throw error;
          savedId = data.id;
        }

        setProjetId(savedId);
        await loadFromSupabase();
        showToast("✅ Projet sauvegardé dans le cloud");
      } catch (err) {
        console.error("Erreur sauvegarde Supabase:", err);
        _saveLocal({ ...payload, id: projetId || Date.now() });
        showToast("⚠ Sauvegardé localement (sync cloud échouée)");
      } finally {
        setSyncing(false);
      }
    } else {
      // Mode local pur
      const id = projetId || Date.now();
      _saveLocal({ ...payload, id });
      setProjetId(id);
      showToast("✅ Projet sauvegardé");
    }
  }, [fiche, qty, ov, nbP, projetId, userId]);

  const _saveLocal = (v) => {
    const current = localVisites.get([]);
    const updated = v.id && current.find(x => x.id === v.id)
      ? current.map(x => x.id === v.id ? v : x)
      : [...current, v];
    setVisites(updated);
    localVisites.set(updated);
    setProjetId(v.id);
  };

  // ── Chargement d'un projet ───────────────────────────────────────────────
  const chargerProjet = useCallback((v) => {
    setFicheState(v.fiche || { ...FICHE_VIDE });
    setQtyState(v.qty  || {});
    setOvState(v.ov    || {});
    setNbPState(v.nbP  || {});
    setProjetId(v.id);
  }, []);

  // ── Suppression ─────────────────────────────────────────────────────────
  const supprimerProjet = useCallback(async (id) => {
    if (!window.confirm("Supprimer ce projet définitivement ?")) return;

    if (userId && hasSupabase()) {
      try {
        const { error } = await supabase
          .from("projets")
          .delete()
          .eq("id", id)
          .eq("user_id", userId);
        if (error) throw error;
        await loadFromSupabase();
      } catch (err) {
        console.error("Erreur suppression:", err);
      }
    } else {
      const updated = visites.filter(x => x.id !== id);
      setVisites(updated);
      localVisites.set(updated);
    }

    if (projetId === id) nouveauProjet();
    showToast("🗑 Projet supprimé");
  }, [visites, projetId, userId]);

  // ── Nouveau projet ───────────────────────────────────────────────────────
  const nouveauProjet = useCallback(() => {
    setFicheState({ ...FICHE_VIDE, date: new Date().toISOString().slice(0, 10) });
    setQtyState({});
    setOvState({});
    setNbPState({});
    setProjetId(null);
  }, []);

  // ── Setters atomiques ────────────────────────────────────────────────────
  const updateFiche  = (k, v)        => setFicheState(f => ({ ...f, [k]: v }));
  const toggleFiche  = (k, v)        => setFicheState(f => ({
    ...f,
    [k]: Array.isArray(f[k])
      ? (f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v])
      : [v],
  }));
  const setQty       = (k, v)        => setQtyState(m => ({ ...m, [k]: v }));
  const setOv        = (k, field, v) => setOvState(m => ({ ...m, [k]: { ...m[k], [field]: v } }));
  const setNbP       = (pn, v)       => setNbPState(m => ({ ...m, [pn]: v }));

  // ── Export / Import JSON ─────────────────────────────────────────────────
  const exportJSON = () => {
    const data = { visites, exportedAt: new Date().toISOString(), version: 2 };
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    a.download = `kohliv_projets_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  const importJSON = async (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const data = JSON.parse(evt.target.result);
        const imported = data.visites || [];
        if (!Array.isArray(imported) || !imported.length) {
          showToast("⚠ Fichier invalide"); return;
        }
        const existingIds = new Set(visites.map(v => String(v.id)));
        const toAdd = imported.filter(v => !existingIds.has(String(v.id)));

        if (userId && hasSupabase()) {
          // Insérer dans Supabase
          for (const v of toAdd) {
            await supabase.from("projets").insert({
              user_id: userId, adresse: v.fiche?.adresse || "",
              date_visite: v.fiche?.date || null,
              fiche: v.fiche, qty: v.qty, ov: v.ov, nb_pieces: v.nbP,
              normal: v.normal, haut: v.haut,
              updated_at: v.dateModif || new Date().toISOString(),
            });
          }
          await loadFromSupabase();
        } else {
          const merged = [...visites, ...toAdd];
          setVisites(merged);
          localVisites.set(merged);
        }
        showToast(`✅ ${toAdd.length} projet(s) importé(s)`);
      } catch (err) { showToast("⚠ Erreur : " + err.message); }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return {
    // État projet
    visites, projetId, fiche, qty, ov, nbP, syncing,
    // Actions
    sauvegarder, chargerProjet, supprimerProjet, nouveauProjet,
    // Setters
    updateFiche, toggleFiche, setQty, setOv, setNbP,
    // Import/Export
    exportJSON, importJSON,
  };
}
