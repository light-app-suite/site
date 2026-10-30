import type { Bi } from './apps';

const b = (fr: string, en: string): Bi => ({ fr, en });

export const ui = {
  navInstall: b('Installation', 'Installation'),
  navFamily: b('La famille', 'The family'),
  allApps: b('Toutes les apps', 'All apps'),
  kicker: b('suite logicielle de bureau / 05 outils', 'desktop software suite / 05 tools'),
  heroTitle: b('Couper. Éditer. Sous-titrer.', 'Cut. Edit. Subtitle.'),
  heroSub: b(
    'Cinq applications de bureau qui partagent la même interface, les mêmes réglages et le même thème. Open source, sans compte.',
    'Five desktop apps that share the same interface, settings and theme. Open source, no account.',
  ),
  ctaApps: b('Voir les apps', 'See the apps'),
  ctaInstall: b('Installer', 'Install'),
  appsTitle: b('Les applications', 'The apps'),
  appsSub: b('une app, une tâche', 'one app, one job'),
  installIntro: b(
    "Chaque application s'installe avec une commande, identique sur macOS et Linux. Choisissez l'app, copiez la commande.",
    'Each app installs with one command, identical on macOS and Linux. Pick an app and copy the command.',
  ),
  rerun: b(
    'Relancez la même commande pour mettre à jour vers la dernière version.',
    'Run the same command again to upgrade to the latest release.',
  ),
  fullGuide: b('Guide complet :', 'Full guide:'),
  famTitle: b('Une même famille', 'One family'),
  famSub: b(
    "Chaque icône partage le même cadre : un carré noir, une lueur dans deux coins, un pictogramme en trait blanc avec un détail en teinte claire. Seule la teinte change d'une application à l'autre.",
    'Every icon shares one frame: a black square, a glow in two corners, a white stroke pictogram with one detail in a light tint. Only the hue changes from app to app.',
  ),
  installBtn: b('Installer', 'Install'),
  platforms: b('Plateformes', 'Platforms'),
  licenseLabel: b('Licence', 'License'),
  tabs: {
    overview: b('Présentation', 'Overview'),
    features: b('Fonctionnalités', 'Features'),
    examples: b("Exemples d'utilisation", 'Usage examples'),
    install: b('Installation', 'Installation'),
    uninstall: b('Désinstallation', 'Uninstall'),
  },
  oneCmd: b('Une commande · macOS et Linux', 'One command · macOS and Linux'),
  manual: b('Installation manuelle', 'Manual install'),
  req: b('Prérequis', 'Requirements'),
  others: b('Les autres apps', 'Other apps'),
  license: b('licence MIT', 'MIT license'),
  copy: b('Copier', 'Copy'),
  copied: b('Copié', 'Copied'),
  langBtn: b('EN', 'FR'),
  themeDark: b('Clair', 'Light'),
  themeLight: b('Sombre', 'Dark'),
  desc: b(
    'Light App Suite : cinq applications de bureau open source pour couper, éditer et sous-titrer vidéo, image et audio.',
    'Light App Suite: five open source desktop apps to cut, edit and subtitle video, image and audio.',
  ),
  notFound: b('Page introuvable', 'Page not found'),
};
