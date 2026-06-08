// ─── COMPOSANTS UI ATOMIQUES ───────────────────────────────────────────────
// Tous les composants de base de l'application.
// Modifiez ici pour changer l'apparence globale.

import React from "react";

export const RATING_COLORS = {
  N: "#6B7280", TB: "#16a34a", B: "#65a30d", Moy: "#d97706", Mauv: "#dc2626",
};

// ── Layout ──────────────────────────────────────────────────────────────────

export const Card = ({ title, children, style = {} }) => (
  <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: "14px 18px", marginBottom: 12, ...style }}>
    {title && <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "#94a3b8", marginBottom: 12 }}>{title}</div>}
    {children}
  </div>
);

export const Field = ({ label, children }) => (
  <div>
    {label && <div style={{ fontSize: 11, color: "#64748b", marginBottom: 3 }}>{label}</div>}
    {children}
  </div>
);

export const Grid = ({ cols = 2, gap = 10, style = {}, children }) => (
  <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap, ...style }}>
    {children}
  </div>
);

// ── Inputs ──────────────────────────────────────────────────────────────────

export const TextInput = ({ value, onChange, type = "text", placeholder = "", style = {} }) => (
  <input
    type={type}
    value={value || ""}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    style={{ width: "100%", border: "1px solid #e2e8f0", borderRadius: 7, padding: "7px 10px", fontSize: 12, background: "#f9fafb", outline: "none", fontFamily: "inherit", ...style }}
  />
);

export const NumInput = ({ value, onChange, min = 0, placeholder = "0", style = {} }) => (
  <input
    type="number"
    min={min}
    value={value ?? ""}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    style={{ width: "100%", border: "1px solid #e2e8f0", borderRadius: 7, padding: "6px 9px", fontSize: 13, background: "#fff", outline: "none", touchAction: "manipulation", ...style }}
  />
);

// ── Boutons ─────────────────────────────────────────────────────────────────

const BTN_VARIANTS = {
  primary:   { background: "#1d4ed8", color: "#fff",      border: "none" },
  secondary: { background: "#fff",    color: "#374151",   border: "1px solid #e2e8f0" },
  danger:    { background: "#fff",    color: "#dc2626",   border: "1px solid #fee2e2" },
  ghost:     { background: "transparent", color: "#374151", border: "none" },
};

export const Btn = ({ onClick, children, variant = "secondary", style = {}, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: "9px 16px", borderRadius: 9, fontWeight: 600, fontSize: 13,
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? .6 : 1,
      display: "inline-flex", alignItems: "center", gap: 6,
      ...BTN_VARIANTS[variant], ...style,
    }}
  >
    {children}
  </button>
);

// ── Pills / Sélecteurs ───────────────────────────────────────────────────────

export const Pill = ({ label, active, onClick, color }) => (
  <button
    onClick={onClick}
    style={{
      padding: "3px 12px", borderRadius: 20, border: "1.5px solid",
      background: active ? (color || "#1d4ed8") : "transparent",
      borderColor: active ? (color || "#1d4ed8") : "#d1d5db",
      color: active ? "#fff" : "#6b7280",
      fontSize: 12, cursor: "pointer", fontWeight: active ? 600 : 400,
    }}
  >{label}</button>
);

export const MultiPills = ({ options, value = [], onChange }) => (
  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
    {options.map(v => (
      <button
        key={v}
        onClick={() => onChange(v)}
        style={{
          padding: "3px 12px", borderRadius: 20, border: "1.5px solid",
          background: value.includes(v) ? "#1d4ed8" : "transparent",
          borderColor: value.includes(v) ? "#1d4ed8" : "#d1d5db",
          color: value.includes(v) ? "#fff" : "#6b7280",
          fontSize: 12, cursor: "pointer", fontWeight: value.includes(v) ? 600 : 400,
        }}
      >{value.includes(v) ? `✓ ${v}` : v}</button>
    ))}
  </div>
);

export const SinglePills = ({ options, value, onChange, colors }) => (
  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
    {options.map((v, i) => (
      <Pill key={v} label={v} active={value === v} color={colors?.[i]}
        onClick={() => onChange(value === v ? "" : v)} />
    ))}
  </div>
);

export const RatingPills = ({ value, onChange }) => (
  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
    {Object.entries(RATING_COLORS).map(([v, color]) => (
      <button
        key={v}
        onClick={() => onChange(value === v ? "" : v)}
        style={{
          padding: "2px 9px", borderRadius: 20, border: "1.5px solid",
          background: value === v ? color : "transparent",
          borderColor: value === v ? color : "#d1d5db",
          color: value === v ? "#fff" : "#6b7280",
          fontSize: 11, fontWeight: value === v ? 700 : 400, cursor: "pointer",
        }}
      >{v}</button>
    ))}
  </div>
);

// ── Section label ────────────────────────────────────────────────────────────

export const SectionLabel = ({ children }) => (
  <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "#94a3b8", letterSpacing: ".06em", margin: "12px 0 8px" }}>
    {children}
  </div>
);
