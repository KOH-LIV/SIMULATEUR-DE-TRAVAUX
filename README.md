# 🏗️ KÔH-LIV — Simulateur de travaux

**Application web pour estimer les coûts de rénovation de coliving.**

🌐 **Site live :** https://www.simulateur-travaux.koh-liv.fr/

---

## 🚀 Démarrage rapide (Développement local)

### Installation

```bash
# Cloner le repo
git clone https://github.com/KOH-LIV/SIMULATEUR-DE-TRAVAUX.git
cd SIMULATEUR-DE-TRAVAUX

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur local (http://localhost:5173)
npm run dev
```

### Build pour production

```bash
# Compiler en fichier HTML static
npm run build

# Un fichier simulateur-travaux.html sera généré
# → À uploader sur O2switch via CPanel
```

---

## 📦 Déploiement sur O2switch

### Étapes :

1. **Compiler localement :**
   ```bash
   npm run build
   ```

2. **Accéder au CPanel O2switch**
   - URL : https://www.simulateur-travaux.koh-liv.fr:2083
   - Identifiants : (fournis par O2switch)

3. **Uploader le fichier HTML**
   - Gestionnaire de fichiers → `/public_html/` ou dossier du domaine
   - Déposer `simulateur-travaux.html`

4. **C'est live !**
   - https://www.simulateur-travaux.koh-liv.fr/

---

## 🏗️ Structure du projet

```
src/
├── data/
│   └── parametres.js          ← Tous les postes rénovation (~400 items)
│                                Source unique vérité
│
├── lib/
│   ├── calculations.js         ← Logique calcul devis
│   ├── exports.js              ← Générateurs PDF/CSV/JSON
│   └── storage.js              ← Helpers localStorage
│
├── hooks/
│   └── useProjet.js            ← State management projets
│
├── components/                 ← Composants UI atomiques
│   ├── Card.jsx
│   ├── Field.jsx
│   ├── Btn.jsx
│   ├── Pill.jsx
│   ├── Toast.jsx
│   └── ...
│
├── tabs/                       ← 5 onglets principaux
│   ├── VisiteTab.jsx           Saisie infos chantier
│   ├── TravauxTab.jsx          Multiselect items rénovation
│   ├── ResultatsTab.jsx        Affichage devis calculé
│   ├── ProjetsTab.jsx          Gestion projets (save/load/delete)
│   └── SettingsTab.jsx         (optionnel)
│
├── styles/
│   └── App.css                 ← CSS + responsive mobile
│
└── App.jsx                     ← App principale + router tabs
```

---

## ⚙️ Configuration

**Aucune configuration requise !**

- ✅ Pas de Supabase
- ✅ Pas de variables d'environnement
- ✅ Pas d'API externe
- ✅ Stockage 100% **localStorage** (navigateur)

---

## 💾 Données & Sauvegarde

### Projets stockés localement

Chaque navigateur stocke les projets dans `localStorage` :
- Limite : ~5-10 MB (navigateur dépendant)
- Persiste après fermeture
- Fonctionne offline

### Transfert multi-device

**Export / Import JSON :**
- Onglet Projets → **Exporter JSON** (sauvegarde fichier)
- Onglet Projets → **Importer JSON** (restaure sur autre appareil)

---

## 🎯 Utilisation courante

### Ajouter une ligne de travaux

**Fichier :** `src/data/parametres.js`

```javascript
const PIECES = {
  'sdb': {
    label: 'Salle de bain',
    items: [
      {
        id: 'carrelage_murs_sdb',
        label: 'Carrelage murs SDB',
        prix_unitaire: 28,
        unite: 'm²',
        trade: 'carreleur'
      }
    ]
  }
}
```

L'item apparaît automatiquement dans tous les onglets. ✅

### Ajouter une nouvelle pièce (room type)

⚠️ **3 fichiers à modifier :**

1. **`src/data/parametres.js`** → Ajouter `PIECES.nouvelle_piece`
2. **`src/tabs/TravauxTab.jsx`** → Ajouter à `PIECES_ORDRE` et `ICONES`
3. **`src/tabs/ResultatsTab.jsx`** → Ajouter à `PIECES_ORDRE` et `ICONES` (identique)

Oubli = crash ou affichage vide. Voir `PROJECT_MEMORY.md` pour détails.

---

## 📚 Documentation

- **[PROJECT_MEMORY.md](PROJECT_MEMORY.md)** — Architecture complète + contexte projet
- **[README_CONTEXT.md](README_CONTEXT.md)** — Cheat sheet actions courantes
- **[DECISIONS_LOG.md](DECISIONS_LOG.md)** — Historique bugs + décisions architecturales
- **[CHANGELOG.md](CHANGELOG.md)** — Releases & versions

---

## 🔧 Tech Stack

- **Frontend :** React 18 + Vite
- **Styling :** CSS vanilla (responsive mobile-first)
- **State :** React hooks + localStorage
- **Export :** jspdf + html2canvas (lazy-loaded)
- **Bundling :** Vite → Single HTML file
- **Hosting :** O2switch CPanel

---

## 📊 Domaine métier (Coliving)

- **Benchmark coûts :** 1,800–2,500 €/m² (vs 1,500 €/m² standard)
- **Premium :** +20% pour isolation acoustique, wet rooms, finishes hauts
- **Contingency :** +15-20% toujours recommandée
- **Terminologie FR :** SHAB, ERP, VMC, gros œuvre, maîtrise d'œuvre

---

## 🚀 Roadmap

### Phase 1 — Optimisations données
- [ ] Compression localStorage (pako)
- [ ] Lazy-load jspdf complet
- [ ] Service Worker offline

### Phase 2 — Performance
- [ ] React.lazy() tabs
- [ ] Minifier parametres.js
- [ ] Code splitting

### Phase 3 — Avancé
- [ ] Virtualiser liste 400 items
- [ ] Auto-générer PIECES_ORDRE
- [ ] TypeScript

---

## 👤 Auteur

**Ugo** — KÔH-LIV Toulouse

---

## 📄 Licence

À définir

---

## ❓ Support

Pour questions / bugs :
- Ouvrir une issue sur GitHub
- Consulter PROJECT_MEMORY.md

