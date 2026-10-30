import { A } from './raw.mjs';

export type Lang = 'fr' | 'en';
export type Bi = { fr: string; en: string };
export type Block = { title: Bi; code: Bi };

const bi = (t: string[], i = 0): Bi => ({ fr: t[i], en: t[i + 1] });
const same = (s: string): Bi => ({ fr: s, en: s });

export const ORG = 'https://github.com/light-app-suite';

export const IDS = ['cut-vidz', 'cut-imgz', 'cut-soundz', 'gen-subz', 'editor-vidz'] as const;
export type AppId = (typeof IDS)[number];

// Logo seul : n'apparaît nulle part sur le site (voir README du handoff).
export const LOGO_IDS = [...IDS, 'scrap-vidz'] as const;

export interface App {
  id: AppId;
  n: string;
  name: string;
  h1: number;
  h2: number;
  kind: Bi;
  tagline: Bi;
  short: Bi;
  paras: { fr: string[]; en: string[] };
  features: { n: string; title: Bi; body: Bi }[];
  examples: { n: string; title: Bi; steps: { fr: string[]; en: string[] } }[];
  platform: Bi;
  reqs: Bi[];
  install: Block[];
  uninstall: Block[];
  command: string;
  repo: string;
}

interface Opts {
  pkg: string;
  apt: string;
  ai: string;
  icon: number;
  rpm?: boolean;
  unScript?: boolean;
  debCode?: string;
  aiCode?: string;
}

function build(id: string, o: Opts) {
  const raw = `https://raw.githubusercontent.com/light-${id}/light-${id}/main`;
  const rel = `https://github.com/light-${id}/light-${id}/releases/latest`;
  const dlDeb: Bi = { fr: 'Télécharger le .deb depuis', en: 'Download the .deb from' };
  const dlAi: Bi = { fr: "Télécharger l'AppImage depuis", en: 'Download the AppImage from' };
  const both = (f: (l: Lang) => string): Bi => ({ fr: f('fr'), en: f('en') });

  const mac: Block = { title: same('macOS (Homebrew)'), code: same(`brew install --cask light-${id}/tap/light-${id}`) };
  const deb: Block = {
    title: same('Linux, Debian / Ubuntu'),
    code: both((l) => `${dlDeb[l]} ${rel}\n${o.debCode ?? `sudo apt install ./${o.pkg}_*_amd64.deb`}`),
  };
  const rpm: Block = { title: same('Linux, Fedora / openSUSE'), code: same(`sudo dnf install ./${o.pkg}-*.x86_64.rpm`) };
  const ai: Block = {
    title: same('Linux, AppImage'),
    code: both((l) => `${dlAi[l]} ${rel}\n${o.aiCode ?? `chmod +x ${o.pkg}_*_amd64.AppImage\n./${o.pkg}_*_amd64.AppImage`}`),
  };
  const install = [mac, deb, ...(o.rpm ? [rpm] : []), ai];

  const uninstall: Block[] = [
    {
      title: same('macOS (Homebrew)'),
      code: both(
        (l) =>
          `brew uninstall --cask light-${id}\nbrew untap light-${id}/tap\n\n# ${
            l === 'fr' ? 'Supprimer aussi réglages et caches' : 'Also remove settings and caches'
          }\nbrew uninstall --zap --cask light-${id}`,
      ),
    },
    { title: same('Linux, Debian / Ubuntu'), code: same(`sudo apt remove ${o.apt}`) },
    ...(o.rpm ? [{ title: same('Linux, Fedora / openSUSE'), code: same(`sudo dnf remove ${o.apt}`) }] : []),
    {
      title: same('Linux, AppImage'),
      code: same(
        `rm ~/.local/bin/${o.ai}.AppImage\nrm ~/.local/share/applications/${o.ai}.desktop\nrm ~/.local/share/icons/hicolor/${o.icon}x${o.icon}/apps/${o.ai}.png\nupdate-desktop-database ~/.local/share/applications`,
      ),
    },
  ];
  if (o.unScript) {
    uninstall.push({
      title: { fr: 'Toutes plateformes, un script', en: 'All platforms, one script' },
      code: both(
        (l) =>
          `curl -fsSL ${raw}/uninstall.sh | bash\n# ${
            l === 'fr' ? 'Ajoutez  -s -- --purge  après bash pour tout effacer' : 'Add  -s -- --purge  after bash to delete everything'
          }`,
      ),
    });
  }
  return { install, uninstall, command: `curl -fsSL ${raw}/install.sh | bash`, repo: `https://github.com/light-${id}/light-${id}` };
}

export const apps: App[] = IDS.map((id, i) => {
  const d = A[id];
  const g = build(id, d.o);
  return {
    id,
    n: '0' + (i + 1),
    name: d.name,
    h1: d.h[0],
    h2: d.h[1],
    kind: bi(d.kind),
    tagline: bi(d.tagline),
    short: bi(d.short),
    paras: { fr: d.paras[0], en: d.paras[1] },
    features: d.feats.map((f: string[], k: number) => ({ n: String(k + 1).padStart(2, '0'), title: bi(f), body: bi(f, 2) })),
    examples: d.ex.map((e: any[], k: number) => ({
      n: '0' + (k + 1),
      title: bi(e),
      steps: { fr: e[2], en: e[3] },
    })),
    platform: bi(d.platform),
    reqs: d.reqs.map((r: string[]) => bi(r)),
    ...g,
  };
});

export const byId = (id: string) => apps.find((a) => a.id === id)!;
