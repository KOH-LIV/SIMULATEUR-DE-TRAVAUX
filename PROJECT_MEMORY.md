# 🏗️ KÔH-LIV SIMULATEUR — État du projet complet

**Dernière mise à jour :** 2025-06-23  
**Statut :** Déployé en production (Vercel)  
**Langage projet :** Français (métier) + Anglais (code)

---

## 📊 SNAPSHOT ACTUEL

### Identité du projet
- **Nom :** Simulateur de travaux KÔH-LIV
- **URL Vercel :** https://simulateur-koh-liv.vercel.app
- **GitHub :** `KOH-LIV/SIMULATEUR-DE-TRAVAUX`
- **Type :** Web app React/Vite (SPA)
- **Métier :** Gestion de projets de rénovation pour coliving à Toulouse

### Stack technique
- **Frontend :** React 18+ (Vite)
- **State management :** Hooks locaux + useProjet (contexte)
- **Stockage :** localStorage uniquement (Supabase retiré)
- **Deployment :** Vercel (auto-deploy sur main)
- **Assets :** Logo KÔH-LIV en PNG, favicon
- **Dépendances critiques :** jspdf (lazy-loaded), html2canvas

### Features actuellement déployées
✅ **Visite** — Saisie données chantier (adresse, SHAB, ERP)  
✅ **Travaux** — Multiselect items rénovation (~400), par pièce/trade  
✅ **Résultats** — Devis calculé, récapitulatif par pièce/trade  
✅ **Projets** — Créer/charger/supprimer/archiver  
✅ **Exports** — JSON (backup), CSV (enrichi), PDF (avec logo)  
✅ **Responsive** — Mobile/tablet/desktop  
✅ **Offline** — Fonctionne sans connexion (localStorage)  
✅ **Toast notifications** — Feedback utilisateur (success/error/warning)

---

## 🗂️ ARCHITECTURE FICHIERS

```
src/
├── main.jsx                          # Entry point
├── App.jsx                           # Router principal, layout
├── styles/                           # CSS global + responsive
│   └── App.css, mobile.css, etc.
│
├── data/
│   └── parametres.js                 # ⭐ SOURCE UNIQUE DE VÉRITÉ
│       - ~400 items rénovation
│       - Organisé par pièce (PIECES: { chambre, sdb, cuisine, ... })
│       - Chaque item: { id, label, prix_unitaire, unite, trade }
│
├── lib/
│   ├── storage.js                    # localStorage helpers (save/load/delete)
│   ├── calculations.js               # Logique calcul devis
│   ├── exports.js                    # CSV, PDF, JSON builders
│   └── validators.js                 # Validations données
│
├── hooks/
│   └── useProjet.js                  # Context hook state management
│       - Current projet (id, name, rooms)
│       - CRUD projets
│       - Sauvegarde localStorage
│
├── components/                       # Atomique UI
│   ├── Card.jsx, Field.jsx, Btn.jsx
│   ├── Toast.jsx, Pill.jsx
│   ├── ProjectList.jsx
│   └── ...
│
└── tabs/                             # 5 onglets principaux
    ├── VisiteTab.jsx                 # Saisie infos chantier
    ├── TravauxTab.jsx                # Multiselect items
    │   ├── PIECES_ORDRE = [...]      # ⚠️ Doit match parametres.js
    │   └── ICONES = { ... }          # ⚠️ Doit match parametres.js
    ├── ResultatsTab.jsx              # Affichage devis
    │   ├── PIECES_ORDRE = [...]      # ⚠️ DOIT ÊTRE IDENTIQUE à TravauxTab
    │   └── ICONES = { ... }          # ⚠️ DOIT ÊTRE IDENTIQUE à TravauxTab
    ├── ProjetsTab.jsx                # Gestion projets
    └── SettingsTab.jsx               # (optionnel) Paramètres utilisateur
```

---

## 🎯 CONCEPTS CLÉS

### 1. **Structure données projet**
```javascript
{
  id: "proj_1234",
  name: "Reno Toulouse Rue X",
  lastModified: 1719129600000,
  visite: {
    adresse: "Toulouse, 31000",
    shab: 250,              // m²
    erp: false,
    notes: "..."
  },
  rooms: {
    chambre: {
      count: 3,
      selectedItems: ["peinture_chambre", "carrelage_sdb", ...]
    },
    sdb: {
      count: 1,
      selectedItems: [...]
    },
    ...
  }
}
```

### 2. **Structure parametres.js**
```javascript
const PIECES = {
  'chambre': {
    label: 'Chambre',
    items: [
      { id: 'peinture_chambre', label: 'Peinture murs', prix_unitaire: 12, unite: 'm²', trade: 'peintre' },
      { id: 'parquet_chambre', label: 'Parquet', prix_unitaire: 45, unite: 'm²', trade: 'menuisier' },
      ...
    ]
  },
  'sdb': { label: 'Salle de bain', items: [...] },
  ...
}
```

### 3. **Multiplication pièces dans calcul**
- User saisit "Chambre: 3" → Items se multiplient par 3
- Except items marqués `byProject: true` → Forfaitaire, pas multiplié
- Exception items marqués `bySqm: true` → Multiplié par SHAB, pas par room count

---

## 🐛 BUGS CONNUS & SOLUTIONS APPLIQUÉES

| Bug | Symptôme | Cause | Solution |
|---|---|---|---|
| **Focus input perdu au changement tab** | Impossible saisir après tab switch | React re-rend composant parent, enfant avec état local perd focus | Extraire composants hors fonction parent |
| **Nested backticks en PDF** | PDF ne génère pas / erreur template | Template literal avec backticks imbriquées | Pré-construire string avant template, pas de backtick interne |
| **Tab Résultats vide** | Résultats affiche rien après changement | useMemo scope mal géré, props manquantes | Ajouter dépendances complètes useMemo + passer props explicitement |
| **PIECES_ORDRE out-of-sync** | Crash ou pièces manquent dans Résultats | Oubli MAJ PIECES_ORDRE dans TravauxTab.jsx ou ResultatsTab.jsx | Créer étape du workflow: 3 fichiers à MAJ (parametres.js + 2 tabs) |

### ⚠️ GOTCHA CRITIQUE
**Ajouter une room type = 4 modifications obligatoires :**
1. `parametres.js` → Section `PIECES: { 'new_room': { ... } }`
2. `TravauxTab.jsx` → Ajouter à `PIECES_ORDRE` et `ICONES`
3. `ResultatsTab.jsx` → Ajouter à `PIECES_ORDRE` (identique) et `ICONES` (identique)
4. ❌ **OUBLI = Tab vide ou crash**

---

## 📋 DÉCISIONS ARCHITECTURALES

### ❌ Supabase supprimé
- **Raison :** Erreurs URL config persistantes, overhead pour cas simple
- **Décision :** localStorage 100%
- **Trade-off :** Pas de sync cloud, JSON export/import manuel (acceptable pour field use)

### ✅ Source unique vérité = parametres.js
- **Raison :** Éviter desync, maintenance claire, versionning facile
- **Impact :** Ajouter item = 1 endroit seulement (pas copier-coller ailleurs)
- **Todo:** Auto-générer PIECES_ORDRE depuis parametres.js (refactor future)

### ✅ Composants atomiques (Card, Field, Btn, etc.)
- **Raison :** Réutilisabilité, consistent UI/UX, maint plus facile
- **Pattern :** Props explicites, pas de logique métier dans composants

### ✅ jspdf + html2canvas lazy-loaded
- **Raison :** ~200KB bundle, chargé uniquement au clic export
- **Impact :** Bundle initial -200KB

### ✅ localStorage compression (Phase 1 roadmap)
- **Raison :** Lim ~5-10MB, compression → 3-4× plus de projets
- **Outil :** pako (gzip)
- **Status :** Prêt à déployer

---

## 🎓 DOMAINE MÉTIER (Coliving + Rénovation)

### Coûts rénovation Île-de-France (benchmark)
- **Standard résidentiel :** ~1,500 €/m²
- **Coliving KÔH-LIV :** 1,800–2,500 €/m² (+20% premium)
- **Raison premium :** Multiplication SDB, isolation acoustique, finishes hauts

### Terminologie FR construction
- **SHAB** = Surface habitable (m²)
- **ERP** = Établissement Recevant du Public (impact réglementation, normes sécurité)
- **VMC** = Ventilation Mécanique Contrôlée
- **Gros œuvre** = Fondations, murs porteurs
- **Maîtrise d'œuvre** = Suivi chantier, respect délai/budget

### Types pièces KÔH-LIV
- Chambre (standard, avec SDB attenante)
- Cuisine (partagée ou privée)
- Salle de bain (x multiplié, une par chambre parfois)
- Salle spéciale (sport, gaming, lecture, musique) — Isolation acoustique renforcée
- Parties communes (couloir, entrée, etc.)

---

## 🔄 ROADMAP (Non-déployé)

### Phase 1 — Optimisations données (Facile, gain immédiat)
- [ ] Compression localStorage avec pako → -70% espace
- [ ] Lazy-load jspdf au clic export (déjà partiellement fait)
- [ ] Service Worker offline-first (cache assets statiques)
- **Temps :** 2-3h | **Gain :** 50% localStorage, offline fonctionnel

### Phase 2 — Performance bundle (Moyen)
- [ ] React.lazy() 5 tabs → -25% bundle initial
- [ ] Minifier parametres.js (clés courtes) → -20%
- [ ] Supprimer console.log en production
- **Temps :** 4-5h | **Gain :** Bundle -35%, TTI -40%

### Phase 3 — Avancé (Long terme)
- [ ] Virtualiser liste 400 items (react-window) → Scroll smooth
- [ ] Dédupliquer libellés répétitifs → -15% parametres.js
- [ ] Auto-générer PIECES_ORDRE depuis parametres.js
- **Temps :** 6-8h | **Gain :** React perf, maintenance

---

## 💻 OUTILS & WORKFLOW TERRAIN

### Capture floor plan (visites chantier)
1. **MagicPlan** → Capture photo + plan (PNG/JPEG)
2. **FloorPlanner** → Édition, annotations
3. **Sweet Home 3D** → Alternative gratuite

### Outils dev
- **Git/GitHub** → KOH-LIV/SIMULATEUR-DE-TRAVAUX
- **Vercel** → Auto-deploy sur `main`
- **VS Code** → Editor principal
- **npm** → Package manager

### Testing
- Navigateur : Chrome DevTools (mobile emulation)
- localStorage inspection : DevTools → Application → Local Storage
- Erreurs : Console (F12)

---

## 🔐 État authentication
- ❌ Pas d'auth (supprimé)
- ✅ localStorage public (pas de données sensibles stockées)
- ⚠️ Note : JSON export/import = responsabilité utilisateur

---

## 📞 CONTEXTE PERSONNEL

**Ugo**
- Basé : Toulouse
- Rôle : Gestionnaire rénovation KÔH-LIV
- Langage : FR (métier), ENG (code)
- Utilisateur principal : Terrain (visites chantier, capture floor plan MagicPlan)
- Priorité : Simplicité > sophistication, déployabilité

---

## ✅ CHECKLIST D'INTÉGRATION FUTUR CODE

Avant merger une feature :

- [ ] Paramètres.js UP-TO-DATE (source unique vérité)
- [ ] PIECES_ORDRE ajouté dans TravauxTab.jsx
- [ ] PIECES_ORDRE ajouté dans ResultatsTab.jsx (IDENTIQUE)
- [ ] ICONES ajouté dans TravauxTab.jsx
- [ ] ICONES ajouté dans ResultatsTab.jsx (IDENTIQUE)
- [ ] localStorage key versionné si changement structure
- [ ] PDF template sans nested backticks
- [ ] Composants React hors parent function
- [ ] Dépendances useMemo complètes
- [ ] Tests localStorage (DevTools)
- [ ] Tests mobile (DevTools emulation)
- [ ] CHANGELOG.md mis à jour
- [ ] Commit message clair (FR métier OU ENG technique)

---

**À lire ensuite :** `README_CONTEXT.md` (cheat sheet 2-3 pages) + `DECISIONS_LOG.md` (historique)

