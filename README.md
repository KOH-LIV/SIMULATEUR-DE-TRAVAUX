# KÔH-LIV — Simulateur travaux

Simulateur d'estimation de travaux pour logements en coliving.
Accessible sur PC et smartphone, projets synchronisés dans le cloud.

---

## Déploiement en 4 étapes

### Étape 1 — GitHub

1. Créez un compte sur [github.com](https://github.com) si vous n'en avez pas
2. Cliquez **New repository**, nommez-le `kohliv-simulateur`, mettez-le en **Private**
3. Sur votre ordinateur, ouvrez un terminal dans ce dossier et exécutez :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/kohliv-simulateur.git
git push -u origin main
```

---

### Étape 2 — Supabase (base de données + auth)

1. Créez un compte sur [supabase.com](https://supabase.com)
2. Cliquez **New project**, choisissez un nom et un mot de passe (conservez-le)
3. Une fois le projet créé, allez dans **SQL Editor → New query**
4. Copiez-collez le contenu de `supabase/schema.sql` et cliquez **Run**
5. Allez dans **Settings → API** et notez :
   - **Project URL** (ex: `https://abc123.supabase.co`)
   - **anon public** key

6. Dans **Authentication → Email**, activez **Enable email confirmations** = OFF et **Magic Link** = ON

---

### Étape 3 — Vercel (hébergement)

1. Créez un compte sur [vercel.com](https://vercel.com) avec votre compte GitHub
2. Cliquez **Add New Project**, sélectionnez `kohliv-simulateur`
3. Dans **Environment Variables**, ajoutez :
   - `VITE_SUPABASE_URL` → votre Project URL Supabase
   - `VITE_SUPABASE_ANON_KEY` → votre anon key Supabase
4. Cliquez **Deploy** — votre URL sera du type `kohliv-simulateur.vercel.app`

---

### Étape 4 — Utilisation

- Ouvrez l'URL Vercel sur votre PC et smartphone
- Entrez votre email → recevez un lien de connexion
- Cliquez le lien → vous êtes connecté
- Vos projets sont automatiquement synchronisés entre tous vos appareils

---

## Développement local

```bash
# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local
# Renseignez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans .env.local

# Lancer en développement
npm run dev
# → http://localhost:5173

# Build de production
npm run build
```

---

## Structure du projet

```
src/
├── data/parametres.js     ← Tous les postes de travaux et coûts par défaut
├── lib/
│   ├── calcul.js          ← Logique de calcul (calcLigne, calcTotaux, KEY…)
│   ├── supabase.js        ← Client Supabase
│   └── storage.js         ← Fallback localStorage
├── hooks/useProjet.js     ← Gestion des projets (save/load/sync)
├── components/            ← Composants UI réutilisables
└── tabs/                  ← Onglets de l'application
```

**Pour ajouter un poste de travaux :** éditez `src/data/parametres.js`
**Pour modifier un coût par défaut :** utilisez l'onglet Paramètres de l'app
**Pour modifier l'interface :** éditez le composant correspondant dans `src/tabs/`

---

## Mode hors-ligne

Si Supabase n'est pas configuré ou inaccessible, l'application fonctionne
entièrement en local (localStorage). Les projets sont sauvegardés dans le
navigateur et restent accessibles hors connexion.

Pour transférer des projets entre appareils sans cloud : utilisez
**⬇ Exporter JSON** / **⬆ Importer JSON** dans l'onglet Projets.
