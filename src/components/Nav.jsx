import React from "react";
import { fmt } from "../lib/calcul";
import LOGO from "../assets/logo.png";

export const TABS = [
  { id: "projets",    label: "Projets",     icon: "📁" },
  { id: "visite",     label: "Visite",      icon: "🏠" },
  { id: "travaux",    label: "Travaux",     icon: "🔨" },
  { id: "resultats",  label: "Résultats",   icon: "📊" },
  { id: "parametres", label: "Paramètres",  icon: "⚙️" },
];

export function Nav({ tab, setTab, fiche, totaux, projetId, qty, onLogout, syncing }) {
  const hasWork = Object.keys(qty).length > 0;

  return (
    <nav style={{
      background: "#1d4a6e", borderBottom: "1px solid #163a57",
      padding: "0 16px", position: "sticky", top: 0, zIndex: 100,
      boxShadow: "0 2px 8px rgba(0,0,0,.15)",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", height: 64 }}>
        {/* Logo */}
        <img src={LOGO} alt="KÔH-LIV"
          style={{ height: 52, width: "auto", marginRight: 12, objectFit: "contain", maxWidth: 200 }} />

        {/* Onglets */}
        <div style={{ flex: 1, display: "flex", gap: 2 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "6px 10px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 12,
              fontWeight: tab === t.id ? 700 : 400,
              background: tab === t.id ? "rgba(255,255,255,0.15)" : "transparent",
              color: tab === t.id ? "#fff" : "rgba(255,255,255,0.65)",
            }}>
              <span className="tab-icon" style={{ display: "none" }}>{t.icon}</span>
              <span className="tab-label">{t.icon} {t.label}</span>
            </button>
          ))}
        </div>

        {/* Infos projet + sync */}
        <div className="nav-totaux" style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", display: "flex", gap: 10, whiteSpace: "nowrap", alignItems: "center" }}>
          {syncing && <span style={{ fontSize: 10, color: "rgba(255,255,255,.6)" }}>⟳ Sync…</span>}
          {fiche.adresse && (
            <span style={{ maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
              {fiche.adresse}
            </span>
          )}
          {projetId
            ? <span style={{ background: "#dcfce7", color: "#166534", padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 600 }}>● Sauvegardé</span>
            : hasWork && <span style={{ background: "#fef9c3", color: "#854d0e", padding: "2px 8px", borderRadius: 20, fontSize: 10, fontWeight: 600 }}>● Non sauvegardé</span>
          }
          <span>Normal : <b style={{ color: "#a5f3fc" }}>{fmt(totaux.normal)}</b></span>
          <span>Haut : <b style={{ color: "#fde68a" }}>{fmt(totaux.haut)}</b></span>
          {onLogout && (
            <button onClick={onLogout} style={{ background: "none", border: "none", color: "rgba(255,255,255,.5)", cursor: "pointer", fontSize: 11, padding: "2px 6px" }}>
              Déconnexion
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
