# 📦 CHANGELOG.md — Historique des versions

**Format :** [Semantic Versioning](https://semver.org/)

---

## [Unreleased]

### Added
- (Rien en cours)

### Changed
- (Rien en cours)

### Fixed
- (Rien en cours)

---

## [1.3.0] — 2025-06-23

### Added
- 📄 Documentation projet complète : PROJECT_MEMORY.md, README_CONTEXT.md, DECISIONS_LOG.md
- 🔍 Memory system pour Claude (optimisation tokens dev)

### Changed
- 🚀 **Migration Vercel → O2switch CPanel**
  - Déploiement simplifié : fichier HTML unique
  - URL : https://www.simulateur-travaux.koh-liv.fr/
- 📝 README.md complètement reécrit (sans Supabase)

### Status
- ✅ En production sur O2switch

---

## [1.2.3] — 2025-06-15

### Added
- 🏋️ Support "Salle spéciale" (sport, jeux, musique, lecture) avec isolation acoustique renforcée
- 📱 CSS responsive improvements (mobile first)
- 🎨 Icons emoji pour chaque pièce

### Fixed
- 🐛 Tab Résultats vide après ajout nouvelle pièce
  - Cause : PIECES_ORDRE out-of-sync entre TravauxTab et ResultatsTab
  - Solution : Sync lists + dépendances useMemo complètes
- 🐛 useMemo stale values (dépendances manquantes)

---

## [1.2.2] — 2025-06-10

### Added
- 📋 Roadmap documentée (Phase 1, 2, 3)
- 📊 Architecture diagram (PROJECT_MEMORY.md)
- 🧮 Détail calcul devis (byProject vs bySqm vs standard)

### Fixed
- 🐛 PDF template erreur (backticks imbriquées)
  - Cause : Template literal avec backticks nested
  - Solution : Pré-construire variables avant template
- 🐛 Caractères spéciaux en PDF (encoding UTF-8)

---

## [1.2.1] — 2025-06-01

### Added
- ✅ Toast notifications système (success/error/warning)
- 📄 Export PDF avec logo KÔH-LIV + formatage professionnel
- 💾 JSON import/export pour backup et cross-device transfer
- 📊 CSV enrichi (colonnes: Room, Item, Qty, Unit, Price, Total, Trade)

### Fixed
- 🐛 Focus input perdu au changement d'onglet
  - Cause : Composant React défini inside parent function
  - Solution : Extraire composants hors parent
- 🐛 localStorage key non-versionné (structure change breaks old projects)
  - Solution : localStorage key = `koh-liv-projects-v1`

### Changed
- 🔄 useProjet hook restructuré (mieux séparation concerns)
- 🎨 UI components standardisés (Card, Field, Btn, Pill, Toast)

### Removed
- ❌ Supabase authentication (config errors, over-engineered)
  - Remplacement : localStorage uniquement

---

## [1.2.0] — 2025-05-20

### Added
- 🎨 Composants UI atomiques réutilisables
  - Card.jsx — Container styling
  - Field.jsx — Input + label
  - Btn.jsx — Buttons (primary/secondary/danger)
  - Pill.jsx — Item selector (badge)
  - Toast.jsx — Notifications
- 📱 Responsive CSS (mobile/tablet/desktop)
- 🏠 Support multi-pièce (Chambre, SDB, Cuisine, Parties communes)

### Changed
- 🔄 Refactor TravauxTab (composants séparés)
- 🔄 Refactor ResultatsTab (affichage devis)

---

## [1.1.0] — 2025-05-10

### Added
- 🧮 Calcul devis par pièce et par trade
- 📊 Résumé détaillé (sous-total chambre, sous-total trade, total)
- 💰 Affichage prix unitaire + quantité + sous-total

### Fixed
- 🐛 Composants React nested = re-render → focus loss
- 🐛 Input controlled vs uncontrolled (stability)

---

## [1.0.5] — 2025-05-05

### Added
- ⭐ Source unique vérité : `parametres.js`
- 📋 Structure PIECES (room type → items)
- 🔧 Item metadata : id, label, prix_unitaire, unite, trade

### Changed
- ♻️ Centraliser tous items rénovation dans `parametres.js`
- 📊 Éviter duplication/desync

---

## [1.0.4] — 2025-04-25

### Added
- 💾 localStorage helpers
  - saveProjet() — Sauvegarder projet
  - loadProjet() — Charger depuis localStorage
  - deleteProjet() — Supprimer

### Changed
- 🔄 useProjet hook création
- 🔄 State management centralisé

---

## [1.0.3] — 2025-04-20

### Removed
- ❌ Supabase authentication (config errors)
  - Cause : VITE_SUPABASE_URL URL issues
  - Raison : Complexity > benefit pour cas offline-first

### Added
- ✅ localStorage fallback 100%

---

## [1.0.2] — 2025-04-15

### Added
- 🏗️ Vite setup + React configuration
- 🎨 Base CSS + layout structure
- 📱 Mobile-first approach
- 🧭 Router tabs (Visite, Travaux, Résultats, Projets)

---

## [1.0.1] — 2025-04-10

### Added
- ✅ Initial release
- 📝 React boilerplate
- 🚀 Initial deployment setup
- 🐙 GitHub repo creation

---

## Guide pour future contributions

### Format :

```markdown
## [X.Y.Z] — YYYY-MM-DD

### Added
- 📌 Nouvelle feature (emoji + description courte)

### Changed
- ♻️ Refactorings

### Fixed
- 🐛 Bug fix
  - Cause : Explication
  - Solution : Fix

### Removed
- ❌ Feature supprimée
  - Raison : Pourquoi
```

### Avant merger :

- [ ] Tester localement (`npm run dev`)
- [ ] Vérifier export PDF + CSV
- [ ] Test mobile (DevTools)
- [ ] Build (`npm run build`)
- [ ] Updater CHANGELOG.md
- [ ] Git commit avec message clair
- [ ] Push to main
- [ ] Upload .html à O2switch

---

