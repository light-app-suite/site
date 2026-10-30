# Light App Suite : site

Site marketing de la suite (LightCutVidz, LightCutImgz, LightCutSoundz, LightGenSubz, LightEditorVidz). Astro, export statique, servi par GitHub Pages sous `/site`.

```
npm install
npm run dev      # http://localhost:4321/site/
npm test         # build + vérifications (pages, liens, FR/EN, ScrapVidz absent)
```

- Contenu et textes FR/EN : `src/data/raw.mjs` (fiches d'apps), `src/data/apps.ts` (commandes d'installation / désinstallation), `src/data/ui.ts` (interface).
- Logos : `public/logos/` (SVG + PNG 256/512/1024). Le logo `scrap-vidz` est fourni mais l'app n'apparaît pas sur le site.
- Captures d'écran : déposer `public/screenshots/{id}.png` (ex. `cut-vidz.png`), elles s'affichent dans l'onglet Présentation.
- Si le dépôt est renommé `light-app-suite.github.io` (ou un domaine perso est configuré), retirer `base: '/site'` de `astro.config.mjs` et `BASE` de `scripts/check.mjs`.
