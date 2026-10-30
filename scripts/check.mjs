// Vérifie le site construit (dist/) : pages présentes, liens internes valides, LightScrapVidz absent, FR/EN complets.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = '/site';
const dist = 'dist';
const ids = ['cut-vidz', 'cut-imgz', 'cut-soundz', 'gen-subz', 'editor-vidz'];
const errors = [];
const fail = (m) => errors.push(m);

const pages = ['index.html', '404.html', 'apps/index.html', 'install/index.html', ...ids.map((i) => `${i}/index.html`)];
for (const p of pages) if (!existsSync(join(dist, p))) fail(`page manquante : ${p}`);

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
for (const f of walk(dist).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(f, 'utf8');
  if (/scrap/i.test(html)) fail(`${f} : mention de ScrapVidz`);
  if (/github(?!\.io)/i.test(html)) fail(`${f} : référence à GitHub`);
  const fr = (html.match(/lang="fr"/g) ?? []).length - 1;
  const en = (html.match(/lang="en"/g) ?? []).length;
  if (fr !== en) fail(`${f} : ${fr} textes FR pour ${en} textes EN`);
  for (const [, href] of html.matchAll(/(?:href|src)="(\/site\/[^"#?]*)/g)) {
    const rel = href.slice(BASE.length);
    const ok = existsSync(join(dist, rel)) || existsSync(join(dist, rel, 'index.html'));
    if (!ok) fail(`${f} : lien cassé ${href}`);
  }
}
for (const id of ids) {
  const html = readFileSync(join(dist, id, 'index.html'), 'utf8');
  for (const t of ['overview', 'how', 'features', 'examples', 'install', 'uninstall']) if (!html.includes(`id="panel-${t}"`)) fail(`${id} : onglet ${t} manquant`);
  if (!html.includes(`/site/${id}/install.sh | bash`)) fail(`${id} : commande d'installation absente`);
  for (const f of ['install.sh', 'uninstall.sh']) if (!existsSync(join(dist, id, f))) fail(`${id}/${f} absent du site`);
  const imgs = [...html.matchAll(/src="(\/site\/screenshots\/[^"]+)"/g)].length;
  if (imgs < 4) fail(`${id} : ${imgs} captures seulement`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`ok : ${pages.length} pages vérifiées`);
