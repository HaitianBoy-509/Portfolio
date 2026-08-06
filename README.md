# Portfolio étudiant

Portfolio personnel en **HTML / CSS / JavaScript pur** — style professionnel, responsive, sans dépendances.

## Aperçu

Sections incluses :

- **Hero** — présentation rapide avec appel à l'action
- **À propos** — biographie + carte d'informations
- **Expérience & Parcours** — timeline verticale
- **Projets** — grille de cartes
- **Compétences** — barres de progression animées
- **Contact** — bloc CTA + liens sociaux

## Démarrage rapide

Aucune installation requise. Ouvrir simplement `index.html` dans un navigateur :

```bash
# Option 1 : double-cliquer sur index.html

# Option 2 : serveur local (Python)
python -m http.server 8000
# puis ouvrir http://localhost:8000

# Option 3 : avec Node (http-server)
npx http-server -p 8000
```

## Personnalisation

Tout est édité dans `index.html` :

1. **Nom & initiales** — chercher `Votre Nom` et `VN`
2. **Filière / école** — chercher `[votre filière]` / `[votre école]`
3. **Email** — chercher `votre.email@exemple.com`
4. **Projets** — modifier les `<article class="project-card">`
5. **Expérience** — modifier les `<li class="timeline-item">`
6. **Compétences** — ajuster les valeurs `--lvl:XX%`

### Couleurs

Le thème est centralisé dans `styles.css`, en haut du fichier (`:root`) :

```css
--primary: #11294d;   /* bleu marine principal */
--accent:  #c8a45d;   /* doré / accent */
--bg:      #ffffff;   /* fond clair */
```

Changer ces 3 variables suffit à modifier toute la palette.

### Polices

Importées depuis Google Fonts :

- **Inter** — texte courant
- **Playfair Display** — titres (touche élégante / corporate)

## Hébergement gratuit

Recommandations :

- **GitHub Pages** : pousser le dossier sur un repo, activer Pages → branche `main` / dossier `/`
- **Netlify** : glisser-déposer le dossier sur https://app.netlify.com/drop
- **Vercel** : `vercel deploy` à la racine

## Structure

```
portfolio/
├── index.html       Structure de la page
├── styles.css       Tout le style (variables CSS en haut)
├── script.js        Navigation + animations au scroll
└── README.md        Ce fichier
```

## Licence

Libre d'usage pour un usage personnel.
