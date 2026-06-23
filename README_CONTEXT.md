# 📖 README_CONTEXT.md — Cheat Sheet rapide

**Usage :** Lis ça avant d'ouvrir un ticket de dev. 2-3 min max.

---

## 🚀 ACTIONS COURANTES

### ➕ Ajouter une nouvelle ligne de travaux (item)

```javascript
// 1. Fichier: src/data/parametres.js
const PIECES = {
  'sdb': {
    label: 'Salle de bain',
    items: [
      // ⬇️ Ajoute l'item ici
      {
        id: 'carrelage_murs_sdb',          // Unique + snake_case
        label: 'Carrelage murs SDB',       // Affiché utilisateur (FR)
        prix_unitaire: 28,                 // € par unité
        unite: 'm²',                       // m², forfait, ml, etc.
        trade: 'carreleur',                // Catégorie (peintre, menuisier, etc.)
        // optionnel:
        // byProject: true,                 // Forfaitaire (pas multiplié par room count)
        // bySqm: true                      // Multiplié par SHAB, pas room count
      }
    ]
  }
}

// 2. TravauxTab.jsx : Aucune modification (auto-généré depuis parametres.js)
// 3. ResultatsTab.jsx : Aucune modification (auto-généré depuis parametres.js)
```

**C'est tout !** ✅ L'item apparaît automagiquement dans Travaux + Résultats.

---

### 🏠 Ajouter une nouvelle pièce (room type)

**⚠️ TROIS FICHIERS À MODIFIER (sinon tab crash) ⚠️**

```javascript
// 1. src/data/parametres.js
const PIECES = {
  // ... existants ...
  'salle_sport': {
    label: 'Salle de sport',
    items: [
      { id: 'isolation_salle_sport', label: 'Isolation acoustique renforcée', prix_unitaire: 60, unite: 'm²', trade: 'plaquiste' },
      { id: 'revêtement_salle_sport', label: 'Revêtement sol sport', prix_unitaire: 50, unite: 'm²', trade: 'menuisier' },
    ]
  }
}

// 2. src/tabs/TravauxTab.jsx (ligne ~50)
const PIECES_ORDRE = ['chambre', 'sdb', 'cuisine', 'salle_sport', ...];  // ⬅️ Ajoute 'salle_sport'
const ICONES = {
  'chambre': '🛏️',
  'sdb': '🚿',
  'cuisine': '🍳',
  'salle_sport': '🏋️',  // ⬅️ Ajoute icon
  ...
};

// 3. src/tabs/ResultatsTab.jsx (ligne ~50, IDENTIQUE à TravauxTab.jsx)
const PIECES_ORDRE = ['chambre', 'sdb', 'cuisine', 'salle_sport', ...];  // ⬅️ MÊME liste
const ICONES = {
  'chambre': '🛏️',
  'sdb': '🚿',
  'cuisine': '🍳',
  'salle_sport': '🏋️',  // ⬅️ MÊME icon
  ...
};
```

**Vérification :**
- [ ] `parametres.js` contient `salle_sport` dans PIECES
- [ ] `TravauxTab.jsx` PIECES_ORDRE = [..., 'salle_sport']
- [ ] `TravauxTab.jsx` ICONES = { ..., 'salle_sport': '🏋️' }
- [ ] `ResultatsTab.jsx` PIECES_ORDRE = [..., 'salle_sport'] (IDENTIQUE)
- [ ] `ResultatsTab.jsx` ICONES = { ..., 'salle_sport': '🏋️' } (IDENTIQUE)
- [ ] Redémarrer dev server (`npm run dev`)
- [ ] Tester : Tab Travaux → Résultats doit afficher nouvelle pièce ✅

---

### 📄 Exporter en PDF / CSV

**Code existant :** `src/lib/exports.js`

**Générer PDF :**
```javascript
import { generatePDF } from '@/lib/exports';

// Dans un bouton onClick
const handleExportPDF = async () => {
  const pdf = await generatePDF(currentProjet);  // Lazy-loads jspdf
  pdf.download('devis_koh_liv.pdf');
};
```

**Générer CSV :**
```javascript
import { generateCSV } from '@/lib/exports';

const handleExportCSV = () => {
  const csv = generateCSV(currentProjet);
  downloadFile(csv, 'devis.csv', 'text/csv');
};
```

**⚠️ Piège PDF :** Pas de backticks imbriquées dans template
```javascript
// ❌ WRONG
const tpl = `
  Coût: ${`Valeur: ${x}`}  // Nested backticks = ERREUR
`;

// ✅ RIGHT
const label = `Valeur: ${x}`;
const tpl = `Coût: ${label}`;
```

---

### 💾 Sauvegarder / Charger un projet

**C'est automatique avec `useProjet` :**
```javascript
import useProjet from '@/hooks/useProjet';

const MyComponent = () => {
  const { projet, saveProjet, loadProjet, deleteProjet } = useProjet();
  
  // Sauvegarde auto au changement
  const handleNameChange = (newName) => {
    saveProjet({ ...projet, name: newName });  // localStorage updated
  };
  
  // Charger depuis localStorage
  const handleLoad = (projectId) => {
    loadProjet(projectId);
  };
};
```

**localStorage clé :** `koh-liv-projects-v1` (version-locked)

---

## 🐛 DÉPANNAGE RAPIDE

### Tab Résultats vide ?
**Cause :** PIECES_ORDRE pas à jour dans ResultatsTab.jsx  
**Fix :** Vérifier PIECES_ORDRE dans ResultatsTab.jsx == PIECES_ORDRE dans TravauxTab.jsx  
**Test :** F12 → Console, chercher erreur

### Focus input perdu après tab switch ?
**Cause :** Composant réactif défini inside fonction parent  
**Fix :** Extraire composant hors parent (avant le return)

### PDF ne génère pas ?
**Cause :** Backticks imbriquées dans template literal  
**Fix :** Pré-construire string variables avant template

### localStorage plein (quota exceeded) ?
**Cause :** Trop de projets stockés  
**Fix :** Archiver anciens projets (JSON export → delete)  
**Futur :** Phase 1 compress pako

---

## 🔧 DÉVELOPPEMENT LOCAL

```bash
# Install
npm install

# Démarrer dev server (http://localhost:5173)
npm run dev

# Build production
npm run build

# Preview production build
npm run preview

# Deploy (auto sur Vercel via GitHub)
git push origin main
```

---

## 📁 FICHIERS CRITIQUES À CONNAÎTRE

| Fichier | Purpose | Modifie | Lis |
|---|---|---|---|
| `parametres.js` | Source unique vérité | ✅ | ✅ Chaque feature |
| `TravauxTab.jsx` | UI multiselect | ✅ (room type + ICONES) | ✅ |
| `ResultatsTab.jsx` | Affichage devis | ✅ (room type + ICONES identique) | ✅ |
| `useProjet.js` | State management | ⚠️ (avec soin) | ✅ |
| `exports.js` | PDF/CSV builders | ✅ (nouvelles colonnes) | ✅ |

---

## 🎯 TYPES DE TRAVAUX (Trade) PRINCIPAUX

Valeurs pour champ `trade` dans parametres.js :

- `peintre` — Peinture, revêtements muraux
- `carreleur` — Carrelage, faïence
- `plombier` — Tuyauterie, sanitaires
- `électricien` — Électricité, éclairage
- `menuisier` — Bois, portes, parquet
- `plaquiste` — Cloisons, isolation
- `maçon` — Béton, démolition
- `couvreur` — Toitures
- `chauffagiste` — Chauffage, VMC
- `forfait` — Services non-matière (coordination, etc.)

---

## 📊 STRUCTURE PROJET localStorage

```javascript
{
  "id": "proj_abc123",
  "name": "Reno Rue Lapeyrouse - Toulouse",
  "lastModified": 1719129600000,
  
  "visite": {
    "adresse": "31 Rue Lapeyrouse, 31000 Toulouse",
    "shab": 250,           // m² habitables
    "erp": false,          // Établissement Recevant du Public
    "notes": "..."
  },
  
  "rooms": {
    "chambre": {
      "count": 3,                    // 3 chambres
      "selectedItems": [
        "peinture_chambre",
        "parquet_chambre",
        ...
      ]
    },
    "sdb": {
      "count": 3,                    // 1 SDB par chambre
      "selectedItems": [
        "carrelage_murs_sdb",
        "baignoire_sdb",
        ...
      ]
    },
    ...
  }
}
```

---

## 🧮 CALCUL DEVIS (Logique)

```
Pour chaque room type :
  - Nombre = room.count (user input)
  - Pour chaque item sélectionné :
    - Si byProject=true : Qté = 1 (forfait)
    - Si bySqm=true : Qté = SHAB (visitTab.shab)
    - Sinon : Qté = room.count
    - Sous-total = Qté × prix_unitaire
  - Sous-total pièce = Σ items
  - Sous-total trade = Σ items du même trade
  
TOTAL = Σ tous sous-totaux
```

---

## 🌍 URLS

- **Prod :** https://simulateur-koh-liv.vercel.app
- **GitHub :** https://github.com/KOH-LIV/SIMULATEUR-DE-TRAVAUX
- **Vercel dashboard :** Lien auto-généré après push `main`

---

**⏱️ Prêt à coder en 2 min ?** Continue avec `PROJECT_MEMORY.md` pour contexte complet. Bug = Check `DECISIONS_LOG.md`.

