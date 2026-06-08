-- ─── SCHEMA SUPABASE — KÔH-LIV ───────────────────────────────────────────
-- Exécutez ce script dans votre dashboard Supabase : SQL Editor → New query

-- Table des projets
CREATE TABLE IF NOT EXISTS projets (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  adresse      TEXT DEFAULT '',
  date_visite  DATE,
  fiche        JSONB DEFAULT '{}',
  qty          JSONB DEFAULT '{}',
  ov           JSONB DEFAULT '{}',
  nb_pieces    JSONB DEFAULT '{}',
  normal       NUMERIC DEFAULT 0,
  haut         NUMERIC DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Table des paramètres utilisateur (coûts personnalisés)
CREATE TABLE IF NOT EXISTS params_utilisateur (
  user_id      UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  params       JSONB DEFAULT '[]',
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_projets_user_id    ON projets(user_id);
CREATE INDEX IF NOT EXISTS idx_projets_updated_at ON projets(updated_at DESC);

-- ─── ROW LEVEL SECURITY (RLS) ────────────────────────────────────────────
-- Chaque utilisateur ne voit que SES projets

ALTER TABLE projets            ENABLE ROW LEVEL SECURITY;
ALTER TABLE params_utilisateur ENABLE ROW LEVEL SECURITY;

-- Projets : lecture
CREATE POLICY "projets_select" ON projets
  FOR SELECT USING (auth.uid() = user_id);

-- Projets : insertion
CREATE POLICY "projets_insert" ON projets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Projets : mise à jour
CREATE POLICY "projets_update" ON projets
  FOR UPDATE USING (auth.uid() = user_id);

-- Projets : suppression
CREATE POLICY "projets_delete" ON projets
  FOR DELETE USING (auth.uid() = user_id);

-- Params : lecture
CREATE POLICY "params_select" ON params_utilisateur
  FOR SELECT USING (auth.uid() = user_id);

-- Params : upsert
CREATE POLICY "params_upsert" ON params_utilisateur
  FOR ALL USING (auth.uid() = user_id);

-- ─── TRIGGER updated_at ──────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER projets_updated_at
  BEFORE UPDATE ON projets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER params_updated_at
  BEFORE UPDATE ON params_utilisateur
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
