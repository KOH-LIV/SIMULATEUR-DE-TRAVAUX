# 📦 CHANGELOG.md — Historique des versions

**Format :** [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH)

**Note :** À mettre à jour à chaque commit/feature. Inclure chaque changement.

---

## [Unreleased]

### Added
- (Rien en cours)

### Changed
- (Rien en cours)

### Fixed
- (Rien en cours)

### Removed
- (Rien en cours)

---

## [1.2.3] — 2025-06-23

### Added
- 📄 Documentation projet : PROJECT_MEMORY.md, README_CONTEXT.md, DECISIONS_LOG.md
- 🔍 Memory system pour Claude (token optimization)

### Changed
- 📋 Organisation code + documentation

### Status
- ✅ En production sur Vercel

---

## [1.2.2] — 2025-06-15

### Added
- 🏋️ Support "Salle spéciale" (sport, jeux, musique, lecture) avec isolation acoustique renforcée
- 📱 CSS responsive improvements (mobile first)
- 🎨 Icons emoji pour chaque pièce (chambre 🛏️, SDB 🚿, cuisine 🍳, etc.)

### Fixed
- 🐛 Tab Résultats vide après ajout nouvelle pièce
  - Cause : PIECES_ORDRE out-of-sync entre TravauxTab et ResultatsTab
  - Solution : Sync lists + dépendances useMemo complètes
- 🐛 useMemo stale values (dépendances manquantes)

### Changed
- ♻️ Refactor PIECES_ORDRE et ICONES (centralisés par tab)

---

## [1.2.1] — 2025-06-10

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

## [1.2.0] — 2025-06-01

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

## [1.1.0] — 2025-05-20

### Added
- 🎨 Composants UI atomiques réutilisables
  - Card.jsx — Container styling
  - Field.jsx — Input + label
  - Btn.jsx — Buttons (primary/secondary/danger)
  - Pill.jsx — Item selector (badge)
  - Toast.jsx — Notifications
- 📱 Responsive CSS (mobile/tablet/desktop)
- 🏠 Support multi-pièce
  - Chambre (default)
  - Salle de bain
  - Cuisine
  - Parties communes

### Changed
- 🔄 Refactor TravauxTab (composants séparés)
- 🔄 Refactor ResultatsTab (affichage devis)

---

## [1.0.5] — 2025-05-10

### Added
- 🧮 Calcul devis par pièce et par trade
- 📊 Résumé détaillé (sous-total chambre, sous-total trade, total)
- 💰 Affichage prix unitaire + quantité + sous-total

### Fixed
- 🐛 Composants React nested = re-render → focus loss
- 🐛 Input controlled vs uncontrolled (stability)

---

## [1.0.4] — 2025-05-05

### Added
- ⭐ Source unique vérité : `parametres.js`
- 📋 Structure PIECES (room type → items)
- 🔧 Item metadata : id, label, prix_unitaire, unite, trade

### Changed
- ♻️ Centraliser tous items rénovation dans `parametres.js`
- 📊 Éviter duplication/desync

---

## [1.0.3] — 2025-04-25

### Added
- 💾 localStorage helpers
  - saveProjet() — Sauvegarder projet
  - loadProjet() — Charger depuis localStorage
  - deleteProjet() — Supprimer

### Changed
- 🔄 useProjet hook création
- 🔄 State management centralisé

---

## [1.0.2] — 2025-04-20

### Removed
- ❌ Supabase authentication (config errors)
  - Cause : VITE_SUPABASE_URL URL issues
  - Raison : Complexity > benefit pour cas offline-first

### Added
- ✅ localStorage fallback 100%

---

## [1.0.1] — 2025-04-15

### Added
- 🏗️ Vite setup + React configuration
- 🎨 Base CSS + layout structure
- 📱 Mobile-first approach
- 🧭 Router tabs (Visite, Travaux, Résultats, Projets)

### Changed
- Initial project scaffolding

---

## [1.0.0] — 2025-04-10

### Added
- ✅ Initial release
- 📝 React boilerplate
- 🚀 Vercel deployment setup
- 🐙 GitHub repo creation

---

## Guide CHANGELOG pour future contributions

### Format à respecter :

```markdown
## [X.Y.Z] — YYYY-MM-DD

### Added
- 📌 Nouvelle feature (emoji + description courte)
- 🎨 UI changes

### Changed
- ♻️ Refactorings
- 🔄 API changes

### Fixed
- 🐛 Bug fix
  - Cause : Explication root cause
  - Solution : Comment c'est résolu

### Removed
- ❌ Feature supprimée
  - Raison : Pourquoi
  - Remplacement : Quoi à la place
```

### Émojis recommandés :

| Emoji | Usage |
|-------|-------|
| ✨ | New feature |
| 🐛 | Bug fix |
| ♻️ | Refactor |
| 📱 | UI/UX |
| 🔄 | Changed |
| ❌ | Removed |
| 📊 | Data/metrics |
| 🔧 | Config |
| 📄 | Docs |
| 🚀 | Performance |
| 💾 | Storage |
| 🧮 | Calculation |

### Avant de merger/committer :

- [ ] Tester feature localement (`npm run dev`)
- [ ] Vérifier export PDF + CSV
- [ ] Test mobile (DevTools)
- [ ] localStorage test (F12 → Application)
- [ ] Updater CHANGELOG.md avec section [Unreleased]
- [ ] Git commit avec message clair
- [ ] Push to `main` → Auto-deploy Vercel

---

## Roadmap visibilité

### Phase 1 — Optimisations données (Q3 2025)
- [ ] Compression localStorage pako
- [ ] Lazy-load jspdf complètement
- [ ] Service Worker offline

**Gain estimé :** localStorage -70%, bundle -30%

### Phase 2 — Performance React (Q3-Q4 2025)
- [ ] React.lazy() tabs
- [ ] Minifier parametres.js
- [ ] Dédupliquer items

**Gain estimé :** bundle -35%, TTI -40%

### Phase 3 — Avancé (2026)
- [ ] Virtualiser liste 400 items
- [ ] Auto-générer PIECES_ORDRE
- [ ] TypeScript + types

**Gain estimé :** Performance, maintenabilité

---


