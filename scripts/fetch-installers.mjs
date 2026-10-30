// Récupère install.sh / uninstall.sh de chaque app et les place dans public/{id}/ :
// le site les sert lui-même, les commandes affichées n'ont donc pas à pointer ailleurs.
// Lancé automatiquement avant `npm run build` et `npm run dev`.
import { mkdirSync, writeFileSync } from 'node:fs';

const ids = ['cut-vidz', 'cut-imgz', 'cut-soundz', 'gen-subz', 'editor-vidz'];

for (const id of ids) {
  mkdirSync(`public/${id}`, { recursive: true });
  for (const file of ['install.sh', 'uninstall.sh']) {
    const url = `https://raw.githubusercontent.com/light-${id}/light-${id}/main/${file}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} : ${res.status}`);
    const text = await res.text();
    if (!text.startsWith('#!')) throw new Error(`${url} : ce n'est pas un script`);
    writeFileSync(`public/${id}/${file}`, text);
  }
}
console.log(`installateurs récupérés pour ${ids.length} apps`);
