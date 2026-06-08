import React from "react";

export const Toast = ({ msg, onClose }) => {
  if (!msg) return null;
  return (
    <div style={{
      position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
      background: "#1d4a6e", color: "#fff", padding: "11px 20px", borderRadius: 10,
      fontSize: 13, fontWeight: 600, zIndex: 9999,
      boxShadow: "0 4px 16px rgba(0,0,0,.25)",
      display: "flex", alignItems: "center", gap: 12,
      maxWidth: "90vw", whiteSpace: "nowrap",
    }}>
      <span>{msg}</span>
      <button onClick={onClose}
        style={{ background: "none", border: "none", color: "rgba(255,255,255,.7)", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
        ×
      </button>
    </div>
  );
};
