import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { Card, Btn, TextInput, Field } from "./ui";

export function Auth({ onAuthChange }) {
  const [email,   setEmail]   = useState("");
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  const handleSend = async () => {
    if (!email) { setError("Entrez votre adresse email."); return; }
    setLoading(true); setError("");
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: "https://simulateur-de-travaux-naxe2e701-kohliv.vercel.app" },
      });
      if (error) throw error;
      setSent(true);
    } catch (err) {
      setError(err.message || "Erreur lors de l'envoi du lien.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc", padding: 24 }}>
      <Card style={{ maxWidth: 420, width: "100%", textAlign: "center", padding: "40px 32px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#1d4a6e" }}>Vérifiez votre boîte mail</div>
        <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
          Un lien de connexion a été envoyé à<br/>
          <strong>{email}</strong><br/><br/>
          Cliquez sur le lien pour vous connecter.<br/>
          Vous pouvez fermer cet onglet.
        </div>
        <button onClick={() => setSent(false)}
          style={{ marginTop: 20, background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 12 }}>
          ← Renvoyer avec un autre email
        </button>
      </Card>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1d4a6e", padding: 24 }}>
      <div style={{ maxWidth: 380, width: "100%", textAlign: "center" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 40, fontWeight: 900, color: "#fff", letterSpacing: -1 }}>KÔH-LIV</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)", marginTop: 4 }}>Easy · Cosy · Community</div>
        </div>

        <Card style={{ textAlign: "left" }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, color: "#1d4a6e" }}>Simulateur travaux</div>
          <div style={{ fontSize: 12, color: "#64748b", marginBottom: 20 }}>
            Connexion sans mot de passe — un lien vous est envoyé par email.
            Vos projets sont synchronisés entre tous vos appareils.
          </div>

          <Field label="Adresse email">
            <TextInput
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="vous@example.com"
            />
          </Field>

          {error && <div style={{ fontSize: 12, color: "#dc2626", marginTop: 8 }}>{error}</div>}

          <Btn
            onClick={handleSend}
            variant="primary"
            disabled={loading}
            style={{ width: "100%", justifyContent: "center", marginTop: 14 }}
          >
            {loading ? "Envoi…" : "Recevoir mon lien de connexion →"}
          </Btn>
        </Card>

        <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)", marginTop: 20 }}>
          Aucun mot de passe. Aucune donnée partagée.
        </div>
      </div>
    </div>
  );
}
