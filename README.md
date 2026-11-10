# Portfolio de Jérémy-Morgan Patole

Site Next.js déployé sur Vercel. Le dépôt GitHub est **la seule source de vérité** : Vercel déploie ce qui est sur GitHub, rien d'autre.

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Un texte, une expérience, une formation, un projet, la stack, les coordonnées | `content/fr.ts` (français) **et** `content/en.ts` (anglais) |
| Un CV | `public/cv-jeremy-morgan-patole-projet.pdf` et `public/cv-jeremy-morgan-patole-data.pdf` |
| Les CV proposés sur la version anglaise | `cvs` dans `content/en.ts` (pour l'instant, les CV français) |
| La photo | `public/hero-jeremy.jpeg` |
| L'image de partage (LinkedIn, Slack…) | générée automatiquement pour chaque langue par `app/[lang]/opengraph-image.tsx` |
| Le titre et la description pour Google | `site.seo` dans `content/fr.ts` et `content/en.ts` |

Pour une mise à jour de contenu simple, **ne touchez qu'à `content/fr.ts`, `content/en.ts` et `public/`**. Les composants (`components/`) n'ont pas à bouger.

### Deux langues

Le site existe en français (à la racine : `/`, `/use-cases/...`) et en anglais (sous `/en` : `/en`, `/en/use-cases/...`). Le bouton FR/EN du ruban ouvre la même page dans l'autre langue.

`content/en.ts` a exactement la même structure que `content/fr.ts`. Si une clé manque ou change de forme d'un côté, `npm run build` échoue : c'est voulu, pour qu'aucune page ne reste à moitié traduite.

Règles de rédaction :

- pas de tiret long (— ou –) dans les textes : utiliser `-`, une virgule, deux-points ou un point ;
- TMRC FX : ne jamais nommer le client, ne pas ajouter de chiffres en dehors de `tmrcStats` ;
- une nouvelle expérience s'ajoute **en haut** du tableau `experiences` ;
- un nouveau projet s'ajoute dans `projects` avec un `slug` unique : sa page `/use-cases/<slug>` est créée automatiquement. `featured: true` l'affiche sur l'accueil.

### Remplacer un CV

1. Exporter le nouveau PDF.
2. Le renommer **exactement** `cv-jeremy-morgan-patole-projet.pdf` ou `cv-jeremy-morgan-patole-data.pdf`.
3. Remplacer le fichier dans `public/`.

Garder le même nom évite de casser les liens déjà partagés.

### Remplacer la photo

Remplacer `public/hero-jeremy.jpeg` par une image portrait (environ 1000 × 1500 px), sous le même nom.

## Circuit de mise à jour

Toute modification, petite ou grande, suit ce circuit :

1. **Créer une branche** depuis `main`, nommée selon le type de changement : `contenu/...`, `design/...` ou `fix/...`.

   ```bash
   git switch main && git pull
   git switch -c contenu/nouvelle-experience
   ```

2. **Modifier, vérifier en local** (voir plus bas), puis committer et pousser la branche.

   ```bash
   git add -A && git commit -m "Ajoute l'expérience X"
   git push -u origin contenu/nouvelle-experience
   ```

3. **Ouvrir une pull request** sur GitHub vers `main`, avec un résumé clair. Vercel publie automatiquement une **preview** et ajoute son lien dans la pull request.
4. **Relire la preview.** Si tout est bon, fusionner la pull request dans `main` : la production se met à jour toute seule.

Jamais de `vercel deploy` ni de glisser-déposer dans Vercel : tout passe par GitHub.

## Lancer le site en local

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

Avant de pousser, vérifier que le site se construit sans erreur :

```bash
npm run build
```

## Vercel

- Le projet Vercel doit être relié à ce dépôt GitHub (Settings → Git).
- La branche de production est `main`.
- Chaque branche et chaque pull request génèrent une preview (activé par défaut).
- Aucune variable d'environnement n'est nécessaire. Si un jour il en faut une, la configurer dans Vercel (Settings → Environment Variables) et la documenter ici, **sans sa valeur**. Aucun secret ni clé d'API dans le dépôt.

## Structure technique

```
content/fr.ts            tous les textes en français
content/en.ts            tous les textes en anglais (même structure)
content/index.ts         choix de la langue, liens hreflang
app/[lang]/page.tsx      page d'accueil
app/[lang]/use-cases/    étude de cas TMRC FX et pages des projets data
app/[lang]/opengraph-image.tsx  image de partage 1200×630, une par langue
app/sitemap.ts           sitemap.xml (les deux langues)
next.config.ts           sert le français à la racine (réécriture vers /fr)
components/              sections et composants
public/                  photo et CV
```

Pile : Next.js, TypeScript, Tailwind CSS, polices Geist (auto-hébergées via `next/font`), icônes Phosphor.
