# Light App Suite : site

Site marketing de la suite (LightCutVidz, LightCutImgz, LightCutSoundz, LightGenSubz, LightEditorVidz). Astro, export statique, servi par GitHub Pages sous `/site`.

```
npm install
npm run dev      # http://localhost:4321/site/
npm test         # build + vérifications (pages, liens, FR/EN, ScrapVidz absent)
```

- Contenu et textes FR/EN : `src/data/content.ts` (une entrée par app : présentation, fonctionnement pas à pas, fonctionnalités, exemples, notes), `src/data/apps.ts` (commandes d'installation / désinstallation), `src/data/ui.ts` (interface).
- Les scripts `install.sh` / `uninstall.sh` de chaque app sont récupérés au build (`scripts/fetch-installers.mjs`) et servis par le site ; un déploiement hebdomadaire les rafraîchit.
- Logos : `public/logos/` (SVG + PNG 256/512/1024). Le logo `scrap-vidz` est fourni mais l'app n'apparaît pas sur le site.
- Captures d'écran (apps en thème sombre) : `public/screenshots/{id}/{nom}-{fr|en}.webp`, dimensions dans `src/data/shots.json`.
- Si le dépôt est renommé `light-app-suite.github.io` (ou un domaine perso est configuré), retirer `base: '/site'` de `astro.config.mjs` et `BASE` de `scripts/check.mjs`.
