import type { Bi } from './apps';

const b = (fr: string, en: string): Bi => ({ fr, en });

export interface Step {
  shot?: string; // nom du fichier dans public/screenshots/{id}/{shot}-{lang}.webp
  title: Bi;
  body: Bi;
}
export interface Group {
  title: Bi;
  items: { title: Bi; body: Bi }[];
}
export interface Content {
  id: string;
  h: [number, number];
  name: string;
  kind: Bi;
  tagline: Bi;
  short: Bi;
  intro: Bi[];
  hero: string; // capture principale
  how: Step[];
  groups: Group[];
  formats: { label: Bi; value: Bi }[];
  shortcuts: { keys: string; label: Bi }[];
  notes: { title: Bi; body: Bi }[];
  examples: { title: Bi; steps: Bi[] }[];
  platform: Bi;
  reqs: Bi[];
  pkg: { pkg: string; apt: string; ai: string; icon: number; rpm?: boolean; purge?: boolean };
}

export const content: Content[] = [
  // ───────────────────────────── LightCutVidz
  {
    id: 'cut-vidz',
    h: [30, 75],
    name: 'LightCutVidz',
    kind: b('Éditeur vidéo', 'Video editor'),
    tagline: b(
      'Découpez, recadrez, filtrez et sous-titrez vos vidéos, puis exportez-les en un seul passage. FFmpeg est inclus.',
      'Trim, crop, filter and subtitle your videos, then export them in a single pass. FFmpeg is included.',
    ),
    short: b(
      'Découpe multi-segments, recadrage, filtres, sous-titres animés et export prêt pour les réseaux sociaux.',
      'Multi-segment trim, crop, filters, animated subtitles and social-media-ready export.',
    ),
    intro: [
      b(
        "LightCutVidz sert aux retouches rapides : vous ouvrez un fichier, vous marquez ce qu'il faut retirer, vous réglez le cadrage, la vitesse ou les sous-titres, puis vous exportez. Il n'y a ni projet ni bibliothèque à gérer. Rien n'est enregistré, et fermer la fenêtre avec des modifications en cours demande d'abord confirmation.",
        'LightCutVidz is for quick edits: open a file, mark what to remove, set the framing, speed or subtitles, then export. There is no project or library to manage. Nothing is saved, and closing the window with edits in progress asks first.',
      ),
      b(
        "Tout se passe sur votre machine et FFmpeg est embarqué : rien d'autre à installer. Les vidéos H.264/AAC des téléphones et des caméras s'ouvrent instantanément. Les autres formats (HEVC, AVI, FLV, 10 bits) sont d'abord convertis en un aperçu temporaire, mais l'export repart toujours du fichier d'origine.",
        'Everything runs on your machine and FFmpeg ships inside the app: nothing else to install. H.264/AAC videos from phones and cameras open instantly. Other formats (HEVC, AVI, FLV, 10-bit) are first converted to a temporary preview, but the export always starts from your original file.',
      ),
      b(
        "Chaque réglage s'annule avec Ctrl/Cmd+Z. L'interface est en français et en anglais, avec un thème clair et un thème sombre.",
        'Every edit can be undone with Ctrl/Cmd+Z. The interface is in English and French, with a light and a dark theme.',
      ),
    ],
    hero: 'cuts',
    how: [
      {
        shot: 'home',
        title: b('1. Ouvrez une vidéo', '1. Open a video'),
        body: b(
          "Glissez le fichier dans la fenêtre, ou utilisez « Ouvrir une vidéo » (Ctrl/Cmd+O). La lecture, la barre de progression et la pellicule de miniatures apparaissent aussitôt. Les vidéos récentes sont proposées sur l'écran d'accueil et dans Fichier › Ouvrir récent.",
          'Drag the file into the window, or use “Open video” (Ctrl/Cmd+O). Playback, the seek bar and the thumbnail filmstrip appear at once. Recent videos are listed on the home screen and in File › Open recent.',
        ),
      },
      {
        shot: 'cuts',
        title: b('2. Marquez les parties à retirer', '2. Mark the parts to remove'),
        body: b(
          "Faites glisser sur la timeline pour dessiner une zone rouge : tout ce qui est en rouge sera supprimé. Déplacez-la, redimensionnez ses bords, ou tapez les temps exacts (1:23.4 ou 83.5). Les zones qui se chevauchent fusionnent. À la lecture, le lecteur saute les zones retirées à l'image près, vous entendez donc le résultat avant d'exporter.",
          'Drag on the timeline to draw a red zone: everything in red will be removed. Move it, resize its edges, or type exact times (1:23.4 or 83.5). Overlapping zones merge. During playback the player skips removed zones frame-accurately, so you hear the result before exporting.',
        ),
      },
      {
        shot: 'layout',
        title: b('3. Réglez cadrage, rotation et vitesse', '3. Set crop, rotation and speed'),
        body: b(
          "« Recadrer » dessine une sélection à poignées, avec des ratios verrouillables (9:16, 4:5, 1:1, 16:9). « Disposition » fait pivoter par pas de 90°, redresse d'un angle libre (±45°) et corrige la perspective horizontale et verticale. La vitesse va de 0,25× à 4× et s'applique à la lecture comme à l'export. Le recadrage est appliqué avant la rotation et la perspective.",
          '“Crop” draws a selection with handles, with lockable ratios (9:16, 4:5, 1:1, 16:9). “Layout” rotates in 90° steps, straightens by a free angle (±45°) and corrects horizontal and vertical perspective. Speed goes from 0.25× to 4× and applies to playback and export. The crop is applied before rotation and perspective.',
        ),
      },
      {
        shot: 'filters',
        title: b('4. Ajoutez filtres et sous-titres', '4. Add filters and subtitles'),
        body: b(
          "20 traitements de couleur sont prévisualisés sur l'image en cours. Pour les sous-titres, importez un fichier .srt (par exemple généré avec LightGenSubz) : choisissez un style d'animation (mot par mot, rebond, surlignage, arc-en-ciel, machine à écrire, fondu ou glissement par phrase), la police, la taille, les couleurs, le contour, le fond et la position. L'aperçu correspond à ce qui sera incrusté.",
          '20 colour treatments are previewed on the current frame. For subtitles, import an .srt file (for instance generated with LightGenSubz): pick an animation style (word pop, bounce, highlight, rainbow, typewriter, sentence fade or slide), font, size, colours, outline, background and position. The preview matches what gets burned in.',
        ),
      },
      {
        shot: 'export',
        title: b('5. Exportez', '5. Export'),
        body: b(
          "La fenêtre d'export résume la durée finale, la vitesse, l'audio, le recadrage et le nombre de coupes. Choisissez le format (MP4, MOV, WebM, AVI ou GIF), la qualité, la résolution, ou un préréglage réseaux sociaux (TikTok · Reels · Shorts, Instagram, carré, YouTube) avec fond flou ou recadrage. L'encodage se fait en un seul passage, avec une barre de progression et un bouton pour l'arrêter. Vous pouvez aussi ajouter l'export à une file d'attente et continuer à travailler.",
          'The export window summarises the final duration, speed, audio, crop and number of cuts. Pick the format (MP4, MOV, WebM, AVI or GIF), the quality, the resolution, or a social-media preset (TikTok · Reels · Shorts, Instagram, square, YouTube) with a blurred background or crop to fit. Encoding runs in a single pass, with a progress bar and a button to stop it. You can also add the export to a queue and keep working.',
        ),
      },
    ],
    groups: [
      {
        title: b('Montage', 'Editing'),
        items: [
          { title: b('Découpe multi-segments', 'Multi-segment trim'), body: b('Autant de zones à retirer que nécessaire, réglables au dixième de seconde, avec une pellicule de miniatures pour se repérer.', 'As many zones to remove as needed, adjustable to a tenth of a second, with a thumbnail filmstrip for reference.') },
          { title: b('Vitesse', 'Speed'), body: b("De 0,25× à 4×, par préréglages ou curseur. Le son et les sous-titres suivent.", 'From 0.25× to 4×, with presets or a slider. Audio and subtitles follow.') },
          { title: b('Annuler / rétablir', 'Undo / redo'), body: b("Tout est annulable : coupes, recadrage, rotation, filtres, style des sous-titres. Un glissement complet de souris compte pour une seule étape.", 'Everything is undoable: cuts, crop, rotation, filters, subtitle style. A whole mouse drag counts as one step.') },
          { title: b('Son', 'Audio'), body: b("Gardez ou retirez la piste audio d'un clic.", 'Keep or remove the audio track with one click.') },
        ],
      },
      {
        title: b('Image', 'Picture'),
        items: [
          { title: b('Recadrage', 'Crop'), body: b('Sélection à poignées, déplaçable, avec ratios 9:16, 4:5, 1:1 et 16:9 qui se conservent pendant le redimensionnement. Un cadre rouge indique la zone active.', 'Selection with handles, movable, with 9:16, 4:5, 1:1 and 16:9 ratios kept while resizing. A red frame shows the active zone.') },
          { title: b('Géométrie', 'Geometry'), body: b("Rotation par pas de 90°, redressement libre (±45°) et correction de perspective horizontale et verticale.", '90° rotation, free straightening (±45°) and horizontal and vertical perspective correction.') },
          { title: b('20 filtres', '20 filters'), body: b('Niveaux de gris, sépia, vintage, noir, froid, chaud, miroir, contours… prévisualisés sur l’image courante.', 'Grayscale, sepia, vintage, noir, cold, warm, mirror, edges… previewed on the current frame.') },
          { title: b('Stabilisation', 'Stabilization'), body: b("Légère, normale ou forte. L'export ajoute une passe d'analyse puis lisse le mouvement ; l'image est un peu recadrée pour masquer les bords.", 'Light, normal or strong. The export adds an analysis pass then smooths the motion; the picture is cropped slightly to hide the borders.') },
        ],
      },
      {
        title: b('Sous-titres', 'Subtitles'),
        items: [
          { title: b('Import .srt', '.srt import'), body: b("Incrustation d'un fichier de sous-titres standard, aperçu en direct sur la vidéo.", 'Burn in a standard subtitle file, with a live preview over the video.') },
          { title: b("7 styles d'animation", '7 animation styles'), body: b('Apparition mot par mot, rebond, surlignage, arc-en-ciel, machine à écrire, fondu ou glissement par phrase.', 'Word pop, bounce, highlight, rainbow, typewriter, sentence fade or slide.') },
          { title: b('Mise en forme complète', 'Full styling'), body: b('Police, taille, couleurs du texte, du contour et du fond, épaisseur du contour, opacité du fond, position verticale.', 'Font, size, text, outline and background colours, outline width, background opacity, vertical position.') },
        ],
      },
      {
        title: b('Export', 'Export'),
        items: [
          { title: b('Cinq formats', 'Five formats'), body: b('MP4 (H.264), MOV, WebM (VP9), AVI et GIF, en un seul passage d’encodage.', 'MP4 (H.264), MOV, WebM (VP9), AVI and GIF, in a single encoding pass.') },
          { title: b('Qualité et résolution', 'Quality and resolution'), body: b("Haute, équilibrée ou petit fichier ; résolution plafonnée de 4K à 360p sans jamais agrandir une petite vidéo. Vos choix sont retenus.", 'High, balanced or small file; resolution capped from 4K to 360p without ever enlarging a small video. Your choices are remembered.') },
          { title: b('Formats sociaux', 'Social formats'), body: b("TikTok · Reels · Shorts (9:16), Instagram (4:5), carré, YouTube. Fond flou qui garde toute l'image, ou recadrage centré.", 'TikTok · Reels · Shorts (9:16), Instagram (4:5), square, YouTube. A blurred background that keeps the whole picture, or a centred crop.') },
          { title: b('GIF optimisé', 'Optimised GIF'), body: b('Largeur et cadence réglables ; la qualité règle la palette (256 ou 128 couleurs) et le tramage.', 'Adjustable width and frame rate; quality sets the palette (256 or 128 colours) and dithering.') },
          { title: b('Accélération matérielle', 'Hardware acceleration'), body: b("Proposée seulement si l'ordinateur sait réellement l'utiliser (testée par un petit encodage). VideoToolbox sur macOS ; si un encodage matériel échoue, il est repris en logiciel.", 'Offered only when the computer can really do it (tested with a tiny encode). VideoToolbox on macOS; if a hardware encode fails, it is retried in software.') },
          { title: b("File d'attente", 'Export queue'), body: b("« Ajouter à la file » demande le fichier et vous rend la main. Les exports se font un par un ; le bouton Exports liste, annule ou ouvre le dossier d'un fichier terminé.", '“Add to queue” asks for the file and hands control back. Exports run one at a time; the Exports button lists them, cancels one, or shows a finished file in its folder.') },
        ],
      },
      {
        title: b('Confort', 'Comfort'),
        items: [
          { title: b('Bilingue, clair et sombre', 'Bilingual, light and dark'), body: b("Français et anglais (la langue du système au premier lancement), thème clair, sombre ou celui du système.", 'English and French (the system language on first launch), light, dark or system theme.') },
          { title: b('Ouvrir avec…', 'Open with…'), body: b("Passez une vidéo en ligne de commande ou utilisez « Ouvrir avec LightCutVidz » dans votre gestionnaire de fichiers.", 'Pass a video on the command line or use “Open with LightCutVidz” in your file manager.') },
          { title: b('Nouveautés et mises à jour', 'What’s new and updates'), body: b("Les nouveautés s'affichent dans l'application (Aide › Nouveautés), après une mise à jour et dans la fenêtre de mise à jour elle-même. Les téléchargements sont vérifiés par somme SHA-256.", 'What’s new is shown in the app (Help › What’s new), after an update and in the update dialog itself. Downloads are checked with a SHA-256 sum.') },
        ],
      },
    ],
    formats: [
      { label: b('Import', 'Import'), value: b('MP4, MOV, AVI, MKV, WebM, FLV, M4V', 'MP4, MOV, AVI, MKV, WebM, FLV, M4V') },
      { label: b('Export', 'Export'), value: b('MP4 (H.264), MOV, WebM (VP9), AVI, GIF', 'MP4 (H.264), MOV, WebM (VP9), AVI, GIF') },
      { label: b('Qualité', 'Quality'), value: b('Haute (CRF 18) · Équilibrée (22) · Petit fichier (28)', 'High (CRF 18) · Balanced (22) · Small file (28)') },
    ],
    shortcuts: [
      { keys: 'Space / K', label: b('Lecture / pause', 'Play / pause') },
      { keys: '← / →', label: b('Reculer / avancer de 1 s (5 s avec Maj)', 'Seek ±1 s (±5 s with Shift)') },
      { keys: 'J / L', label: b('Reculer / avancer de 5 s', 'Seek ±5 s') },
      { keys: ', / .', label: b('Image précédente / suivante', 'Previous / next frame') },
      { keys: 'Delete', label: b('Supprimer la coupe sélectionnée', 'Delete the selected cut') },
      { keys: 'Ctrl/Cmd+O', label: b('Ouvrir une vidéo', 'Open a video') },
      { keys: 'Ctrl/Cmd+Z', label: b('Annuler', 'Undo') },
      { keys: 'Ctrl+Y / Cmd+Shift+Z', label: b('Rétablir', 'Redo') },
      { keys: 'F11', label: b('Plein écran (Échap pour quitter)', 'Full screen (Escape to exit)') },
    ],
    notes: [
      { title: b('Votre fichier reste intact', 'Your file stays untouched'), body: b("LightCutVidz n'écrit jamais dans la vidéo d'origine : l'export crée un nouveau fichier, et la boîte d'enregistrement n'accepte que le format choisi.", 'LightCutVidz never writes to the original video: the export creates a new file, and the save dialog only offers the chosen format.') },
      { title: b('Pourquoi un aperçu converti ?', 'Why a converted preview?'), body: b("Le lecteur intégré lit nativement le H.264/AAC. Pour HEVC, AVI, FLV ou le 10 bits, une barre de progression montre la conversion en WebM temporaire (annulable). Elle ne sert qu'à l'affichage.", 'The built-in player natively plays H.264/AAC. For HEVC, AVI, FLV or 10-bit, a progress bar shows the conversion to a temporary WebM (cancellable). It is only used for display.') },
      { title: b('Accélération GPU sous Linux', 'GPU acceleration on Linux'), body: b("Le FFmpeg embarqué n'a pas d'encodeur GPU sous Linux. Pour NVENC, VAAPI ou Quick Sync, lancez l'application avec LIGHTCUTVIDZ_FFMPEG=/usr/bin/ffmpeg (un FFmpeg système compilé avec ces encodeurs).", 'The bundled FFmpeg has no GPU encoder on Linux. For NVENC, VAAPI or Quick Sync, run the app with LIGHTCUTVIDZ_FFMPEG=/usr/bin/ffmpeg (a system FFmpeg built with them).') },
      { title: b('Résolution avec un ratio', 'Resolution with a ratio'), body: b("Quand un ratio est imposé, la résolution s'applique au petit côté : 1080 donne 1080×1920 en 9:16.", 'When a ratio is set, the resolution applies to the shorter side: 1080 gives 1080×1920 in 9:16.') },
    ],
    examples: [
      { title: b('Un clip vertical pour les réseaux', 'A vertical clip for social media'), steps: [b('Ouvrez la vidéo par glisser-déposer.', 'Open the video by drag and drop.'), b('Dessinez sur la timeline les passages à retirer.', 'Draw the passages to remove on the timeline.'), b('Dans Exporter, choisissez le préréglage TikTok · Reels · Shorts avec fond flou.', 'In Export, pick the TikTok · Reels · Shorts preset with a blurred background.'), b('Exportez en MP4.', 'Export as MP4.')] },
      { title: b('Sous-titres incrustés', 'Burned-in subtitles'), steps: [b('Générez un fichier .srt avec LightGenSubz.', 'Generate an .srt file with LightGenSubz.'), b('Dans Sous-titres, importez le .srt.', 'In Subtitles, import the .srt.'), b("Choisissez un style d'animation, la police et la position.", 'Pick an animation style, font and position.'), b("Exportez : les sous-titres sont incrustés dans l'image.", 'Export: the subtitles are burned into the picture.')] },
      { title: b('Un GIF léger', 'A light GIF'), steps: [b('Découpez le passage voulu.', 'Trim the passage you want.'), b('Choisissez GIF dans Exporter.', 'Pick GIF in Export.'), b('Réglez la largeur et la fréquence d’images.', 'Set the width and frame rate.'), b('Exportez.', 'Export.')] },
      { title: b('Redresser une vidéo filmée de travers', 'Straighten a tilted video'), steps: [b('Ouvrez la vidéo, puis « Disposition ».', 'Open the video, then “Layout”.'), b("Réglez l'angle de redressement et la perspective jusqu'à ce que l'horizon soit droit.", 'Adjust the straightening angle and perspective until the horizon is level.'), b('Activez la stabilisation si le plan tremble.', 'Turn on stabilization if the shot shakes.'), b('Exportez.', 'Export.')] },
    ],
    platform: b('Apple Silicon (M1 et suivants) sur macOS, x86_64 sur Linux.', 'Apple Silicon (M1 and later) on macOS, x86_64 on Linux.'),
    reqs: [b("FFmpeg est inclus dans l'application, rien d'autre à installer.", 'FFmpeg ships inside the app, nothing else to install.'), b('Les téléchargements sont vérifiés avec le fichier SHA256SUMS de la version publiée.', 'Downloads are checked against the release’s SHA256SUMS.')],
    pkg: { pkg: 'LightCutVidz', apt: 'lightcutvidz', ai: 'lightcutvidz', icon: 512 },
  },

  // ───────────────────────────── LightCutImgz
  {
    id: 'cut-imgz',
    h: [165, 215],
    name: 'LightCutImgz',
    kind: b('Éditeur image', 'Image editor'),
    tagline: b(
      "Recadrez, retouchez, corrigez les couleurs et exportez vos images, en local, sans cloud ni compte.",
      'Crop, retouch, colour-correct and export your images, locally, no cloud, no account.',
    ),
    short: b(
      'Recadrage, rotation, correction des couleurs, filtres, gomme d’objets et export PNG, JPEG, WebP, BMP, TIFF.',
      'Crop, rotate, colour correction, filters, object removal and export to PNG, JPEG, WebP, BMP, TIFF.',
    ),
    intro: [
      b(
        "LightCutImgz recadre, redresse, retouche et convertit des images. Chaque image s'ouvre dans son onglet, avec une barre d'outils à droite : recadrage, rotation, retournement, redimensionnement, extension du canevas, pipette, gomme d'objets, réglages de couleur et filtres.",
        'LightCutImgz crops, straightens, retouches and converts images. Each image opens in its own tab, with a tool sidebar on the right: crop, rotate, flip, resize, extend canvas, colour picker, object removal, colour adjustments and filters.',
      ),
      b(
        "Les modifications sont non destructives. Le programme garde l'image d'origine et rejoue la liste des étapes : l'aperçu est calculé par le même code que le résultat exporté, et un nouveau réglage remplace l'étape précédente au lieu de s'empiler. Chaque outil a son bouton Réinitialiser, et l'historique visuel permet de revenir à n'importe quelle étape d'un clic.",
        'Edits are non-destructive. The app keeps the original image and replays the list of steps: the preview is computed by the same code as the exported result, and a new adjustment replaces the previous step instead of stacking on it. Each tool has its Reset button, and the visual history lets you go back to any step with one click.',
      ),
      b(
        "Rien ne quitte votre machine : aucune image n'est envoyée, il n'y a pas de compte.",
        'Nothing leaves your machine: no image is uploaded, there is no account.',
      ),
    ],
    hero: 'filters',
    how: [
      {
        shot: 'main',
        title: b('1. Ouvrez une ou plusieurs images', '1. Open one or more images'),
        body: b(
          "Glissez des fichiers dans la fenêtre ou utilisez « Ouvrir une image ». Chaque image a son onglet ; la barre du haut affiche son nom, ses dimensions et son format, avec Annuler, Rétablir et Exporter. La barre d'état permet de zoomer (molette, Ajuster, 1:1) et d'afficher une grille.",
          'Drag files into the window or use “Open an image”. Each image has its own tab; the top bar shows its name, size and format, with Undo, Redo and Export. The status bar lets you zoom (wheel, Fit, 1:1) and show a grid.',
        ),
      },
      {
        shot: 'crop',
        title: b('2. Recadrez et redressez', '2. Crop and straighten'),
        body: b(
          "Le recadrage a huit poignées, une grille des tiers, des ratios fixes (ou libre) et une saisie numérique ; les flèches du clavier déplacent la sélection. La rotation offre −90°/+90° et un angle libre : l'image tourne en direct et le canevas s'agrandit à la boîte englobante. Le retournement et le redimensionnement (avec ou sans ratio) complètent la géométrie ; « Étendre le canevas » agrandit le cadre sans toucher à l'image.",
          'Crop has eight handles, a rule-of-thirds grid, fixed ratios (or free) and numeric entry; the arrow keys nudge the selection. Rotate offers −90°/+90° and a free angle: the image turns live and the canvas grows to the bounding box. Flip and Resize (with or without ratio) complete the geometry; “Extend canvas” enlarges the frame without touching the image.',
        ),
      },
      {
        shot: 'adjust',
        title: b('3. Corrigez les couleurs', '3. Correct the colours'),
        body: b(
          "« Ajuster » regroupe luminosité/contraste, exposition, teinte/saturation, vibrance, niveaux, courbes, balance des blancs, netteté et débruitage. Chaque réglage est prévisualisé en direct par le même moteur que l'export.",
          '“Adjust” groups brightness/contrast, exposure, hue/saturation, vibrance, levels, curves, white balance, sharpen and denoise. Every adjustment is previewed live by the same engine as the export.',
        ),
      },
      {
        shot: 'filters',
        title: b('4. Appliquez un filtre', '4. Apply a filter'),
        body: b(
          "Onze effets prêts à l'emploi (N&B, sépia, négatif, lomo, vintage, froid, chaud, fondu, drame, cross-process, crayon) sont prévisualisés en vignettes sur votre image, avec un curseur d'intensité pour la plupart. Dessous, des effets réglables : mélangeur N&B, vignette, grain de film, pixelisation, postérisation, flou (gaussien, de mouvement, radial).",
          'Eleven ready-made looks (B&W, sepia, invert, lomo, vintage, cool, warm, fade, drama, cross-process, sketch) are previewed as thumbnails on your own image, most with an intensity slider. Below, adjustable effects: B&W mixer, vignette, film grain, pixelate, posterize, blur (gaussian, motion, radial).',
        ),
      },
      {
        shot: 'remove',
        title: b("5. Effacez un objet, puis exportez", '5. Remove an object, then export'),
        body: b(
          "Avec « Supprimer un objet », peignez sur ce qu'il faut retirer (la taille du pinceau se règle) puis validez : la zone est reconstruite à partir de ce qui l'entoure. Pour finir, « Exporter » propose PNG, JPEG (qualité réglable), WebP sans perte, BMP et TIFF ; le profil colorimétrique ICC d'origine est conservé. Le panneau EXIF affiche les métadonnées de la photo et permet d'enregistrer une copie sans EXIF, XMP ni IPTC.",
          'With “Remove an object”, paint over what to remove (brush size is adjustable) then confirm: the area is rebuilt from its surroundings. To finish, “Export” offers PNG, JPEG (adjustable quality), lossless WebP, BMP and TIFF; the original ICC colour profile is kept. The EXIF panel shows the photo’s metadata and can save a copy without EXIF, XMP or IPTC.',
        ),
      },
    ],
    groups: [
      {
        title: b('Géométrie', 'Geometry'),
        items: [
          { title: b('Recadrage', 'Crop'), body: b('Huit poignées, grille des tiers, ratios fixes ou libre, saisie numérique de la taille, déplacement aux flèches.', 'Eight handles, rule-of-thirds grid, fixed or free ratios, numeric size entry, arrow-key nudging.') },
          { title: b('Rotation', 'Rotate'), body: b("Boutons ±90° et angle libre ; l'image tourne en direct pendant le glissement du curseur et le canevas s'agrandit.", '±90° buttons and a free angle; the image turns live while you drag the slider and the canvas grows.') },
          { title: b('Retournement', 'Flip'), body: b('Horizontal ou vertical.', 'Horizontal or vertical.') },
          { title: b('Redimensionnement', 'Resize'), body: b('Avec ou sans contrainte de ratio.', 'With or without a ratio lock.') },
          { title: b('Étendre le canevas', 'Extend canvas'), body: b("Agrandit le cadre autour de l'image sans toucher à l'image elle-même.", 'Enlarges the frame around the image without touching the image itself.') },
        ],
      },
      {
        title: b('Couleurs', 'Colour'),
        items: [
          { title: b('Luminosité, contraste, exposition', 'Brightness, contrast, exposure'), body: b("Les corrections de base, prévisualisées en direct.", 'The basic corrections, previewed live.') },
          { title: b('Teinte, saturation, vibrance', 'Hue, saturation, vibrance'), body: b('La vibrance renforce les couleurs ternes sans saturer les couleurs déjà vives.', 'Vibrance boosts dull colours without oversaturating already vivid ones.') },
          { title: b('Niveaux et courbes', 'Levels and curves'), body: b('Points noir, blanc et gris ; courbes pour un contrôle fin des tons.', 'Black, white and gray points; curves for fine control of tones.') },
          { title: b('Balance des blancs', 'White balance'), body: b('Température de couleur pour neutraliser une dominante.', 'Colour temperature to neutralise a colour cast.') },
          { title: b('Netteté et débruitage', 'Sharpen and denoise'), body: b('Masque flou pour la netteté, réduction du bruit.', 'Unsharp mask for sharpness, noise reduction.') },
          { title: b('Pipette', 'Colour picker'), body: b('Affiche la valeur de la couleur sous le curseur (HEX, RVB…).', 'Shows the colour value under the cursor (HEX, RGB…).') },
        ],
      },
      {
        title: b('Filtres et effets', 'Filters and effects'),
        items: [
          { title: b('Filtres en un clic', 'One-click filters'), body: b('N&B, sépia, négatif, lomo, vintage, froid, chaud, fondu, drame, cross-process, crayon, avec curseur d’intensité.', 'B&W, sepia, invert, lomo, vintage, cool, warm, fade, drama, cross-process, sketch, with an intensity slider.') },
          { title: b('Flous', 'Blurs'), body: b('Gaussien, de mouvement (angle et distance) et radial (zoom).', 'Gaussian, motion (angle and distance) and radial (zoom).') },
          { title: b('Vignette, grain, pixelisation, postérisation', 'Vignette, grain, pixelate, posterize'), body: b('Effets paramétrables, empilables avec le reste.', 'Adjustable effects that stack with the rest.') },
          { title: b('Mélangeur N&B', 'B&W mixer'), body: b('Noir et blanc avec dosage des canaux de couleur.', 'Black and white with per-channel colour mixing.') },
          { title: b("Supprimer un objet", 'Remove an object'), body: b("Peignez sur l'élément à effacer ; la zone est reconstruite à partir de son voisinage.", 'Paint over the element to erase; the area is rebuilt from its surroundings.') },
        ],
      },
      {
        title: b('Flux de travail', 'Workflow'),
        items: [
          { title: b('Onglets multi-images', 'Multi-image tabs'), body: b('Ouvrez plusieurs images à la fois ; un point indique les modifications non exportées.', 'Open several images at once; a dot flags unexported changes.') },
          { title: b('Historique visuel', 'Visual history'), body: b("Annuler/rétablir, et un panneau d'historique où un clic ramène à n'importe quelle étape.", 'Undo/redo, and a history panel where one click goes back to any step.') },
          { title: b('Réinitialisation par outil', 'Per-tool reset'), body: b("Chaque outil a un bouton Réinitialiser qui n'annule que lui et rejoue les autres étapes depuis l'original.", 'Each tool has a Reset button that only undoes it and replays the other steps from the original.') },
          { title: b('Zoom, grille, récents', 'Zoom, grid, recents'), body: b("Zoom (molette, Ajuster, 1:1), grille réglable (Affichage › Taille de la grille), fichiers récents sur l'écran d'accueil.", 'Zoom (wheel, Fit, 1:1), adjustable grid (View › Grid size), recent files on the home screen.') },
          { title: b('Copier l’image', 'Copy image'), body: b("Place l'image retouchée dans le presse-papiers.", 'Puts the edited image on the clipboard.') },
        ],
      },
      {
        title: b('Export et confidentialité', 'Export and privacy'),
        items: [
          { title: b('Cinq formats', 'Five formats'), body: b('PNG, JPEG (qualité réglable), WebP sans perte, BMP et TIFF.', 'PNG, JPEG (adjustable quality), lossless WebP, BMP and TIFF.') },
          { title: b('Profil ICC conservé', 'ICC profile kept'), body: b("Les couleurs de l'original sont préservées à l'export.", 'The original’s colours are preserved on export.') },
          { title: b('Métadonnées', 'Metadata'), body: b("Panneau EXIF (date, appareil, GPS, ISO…) et bouton « Enregistrer sans EXIF » : une copie sans EXIF, XMP ni IPTC.", 'EXIF panel (date, camera, GPS, ISO…) and a “Save without EXIF” button: a copy without EXIF, XMP or IPTC.') },
          { title: b('100 % local', '100% local'), body: b("Aucune image n'est envoyée, aucun compte n'est demandé.", 'No image is ever uploaded, no account is required.') },
        ],
      },
    ],
    formats: [
      { label: b('Import', 'Import'), value: b('PNG, JPEG, WebP, BMP, TIFF', 'PNG, JPEG, WebP, BMP, TIFF') },
      { label: b('Export', 'Export'), value: b('PNG, JPEG, WebP (sans perte), BMP, TIFF', 'PNG, JPEG, WebP (lossless), BMP, TIFF') },
    ],
    shortcuts: [],
    notes: [
      { title: b("Pourquoi c'est non destructif", 'Why it is non-destructive'), body: b("L'application ne modifie jamais le pixel d'origine : elle garde l'image source et la liste ordonnée des étapes (recadrage, rotation, réglages, filtres…), et recalcule le résultat à chaque changement. C'est ce qui permet de réinitialiser un seul outil ou de remonter dans l'historique.", 'The app never alters the original pixels: it keeps the source image and the ordered list of steps (crop, rotation, adjustments, filters…) and recomputes the result after each change. That is what makes it possible to reset a single tool or go back in the history.') },
      { title: b("Bien utiliser « Supprimer un objet »", 'Getting the most from “Remove an object”'), body: b("Peignez au plus près de l'élément à retirer, avec un pinceau adapté à sa taille. Si le résultat ne vous convient pas, annulez (Ctrl/Cmd+Z) et recommencez avec un tracé plus fin : l'opération est une étape de l'historique comme les autres.", 'Paint close to the element to remove, with a brush sized to match. If you are not happy with the result, undo (Ctrl/Cmd+Z) and try again with a finer stroke: the operation is a history step like any other.') },
      { title: b('Couleurs fidèles', 'Faithful colours'), body: b("Le profil ICC de l'image est conservé à l'export, pour que les couleurs s'affichent comme sur l'original dans les autres logiciels.", 'The image’s ICC profile is kept on export, so colours look like the original in other software.') },
    ],
    examples: [
      { title: b('Recadrer à un format précis', 'Crop to an exact ratio'), steps: [b("Ouvrez l'image.", 'Open the image.'), b('Dans Recadrer, choisissez un ratio fixe.', 'In Crop, pick a fixed ratio.'), b('Placez la sélection avec la grille des tiers, affinez aux flèches.', 'Place the selection using the thirds grid, nudge with the arrow keys.'), b('Validez, puis exportez.', 'Confirm, then export.')] },
      { title: b('Redresser une photo', 'Straighten a photo'), steps: [b('Ouvrez la photo.', 'Open the photo.'), b("Dans Rotation, réglez l'angle : l'aperçu suit en direct.", 'In Rotate, set the angle: the preview follows live.'), b('Recadrez les bords vides.', 'Crop the empty edges.'), b('Exportez en JPEG.', 'Export as JPEG.')] },
      { title: b('Donner une ambiance à une photo', 'Give a photo a mood'), steps: [b('Ouvrez la photo et passez par « Ajuster » : exposition, vibrance, balance des blancs.', 'Open the photo and go through “Adjust”: exposure, vibrance, white balance.'), b('Essayez un filtre (Lomo, Fondu, Drame) et réglez son intensité.', 'Try a filter (Lomo, Fade, Drama) and set its intensity.'), b('Ajoutez une vignette ou du grain de film.', 'Add a vignette or film grain.'), b('Comparez avec l’historique, puis exportez.', 'Compare using the history, then export.')] },
      { title: b('Retirer un élément gênant', 'Remove an unwanted element'), steps: [b("Ouvrez l'image et choisissez « Supprimer un objet ».", 'Open the image and pick “Remove an object”.'), b('Peignez sur ce qu’il faut retirer.', 'Paint over what to remove.'), b('Validez ; annulez si le résultat ne convient pas.', 'Confirm; undo if the result is not right.')] },
      { title: b('Convertir et nettoyer avant de publier', 'Convert and clean before publishing'), steps: [b("Ouvrez l'image.", 'Open the image.'), b('Ouvrez le panneau EXIF pour voir ce que la photo révèle (position GPS, appareil…).', 'Open the EXIF panel to see what the photo reveals (GPS position, camera…).'), b('Cliquez sur « Enregistrer sans EXIF » pour obtenir une copie nettoyée.', 'Click “Save without EXIF” to get a cleaned copy.'), b('Ou exportez directement en WebP ou JPEG depuis Exporter.', 'Or export straight to WebP or JPEG from Export.')] },
    ],
    platform: b('macOS (Apple Silicon et Intel) et Linux (.deb, .rpm, AppImage).', 'macOS (Apple Silicon and Intel) and Linux (.deb, .rpm, AppImage).'),
    reqs: [b('Rien à installer en plus.', 'Nothing else to install.'), b('Les téléchargements sont vérifiés avec le fichier SHA256SUMS de la version publiée.', 'Downloads are checked against the release’s SHA256SUMS.')],
    pkg: { pkg: 'LightCutImgz', apt: 'light-cut-imgz', ai: 'light-cut-imgz', icon: 256, rpm: true },
  },

  // ───────────────────────────── LightCutSoundz
  {
    id: 'cut-soundz',
    h: [225, 275],
    name: 'LightCutSoundz',
    kind: b('Éditeur audio', 'Audio editor'),
    tagline: b(
      'Coupez, fondez, normalisez et filtrez votre audio, puis exportez-le, en local, sans abonnement.',
      'Trim, fade, normalize and filter your audio, then export it, locally, no subscription.',
    ),
    short: b(
      'Découpe précise, fondus, normalisation, filtres et export WAV, MP3, FLAC, OGG, M4A.',
      'Precise trim, fades, normalization, filters and export to WAV, MP3, FLAC, OGG, M4A.',
    ),
    intro: [
      b(
        "LightCutSoundz coupe un fichier audio au centième de seconde dans l'interface (à l'échantillon dans le moteur) sans jamais modifier la source. Vous voyez la forme d'onde, vous tracez à la souris les parties à retirer, et vous réglez fondus, vitesse, volume et filtres dans le panneau de droite.",
        'LightCutSoundz cuts an audio file to a hundredth of a second in the interface (to the sample in the engine) and never modifies the source. You see the waveform, drag on it to mark the parts to remove, and set fades, speed, volume and filters in the right-hand panel.',
      ),
      b(
        "Fondus, vitesse, filtres et normalisation s'entendent pendant la lecture. L'export est écrit à côté de sa destination puis déplacé une fois terminé : un export annulé ou en échec ne détruit jamais le fichier qu'il devait remplacer.",
        'Fades, speed, filters and normalization can be heard during playback. The export is written next to its destination and moved into place when complete: a failed or cancelled export never destroys the file it would have replaced.',
      ),
      b(
        "L'encodeur est un petit FFmpeg LGPL, audio seul, livré avec l'application : tous les formats d'export fonctionnent sans rien installer. Titre, artiste, album et pochette sont conservés.",
        'The encoder is a small LGPL, audio-only FFmpeg that ships with the app: every export format works without installing anything. Title, artist, album and cover art are carried over.',
      ),
    ],
    hero: 'main',
    how: [
      {
        shot: 'main',
        title: b('1. Ouvrez un fichier audio', '1. Open an audio file'),
        body: b(
          "Glissez un fichier, utilisez « Ouvrir un fichier audio », ou lancez `lightcutsoundz morceau.mp3` depuis un terminal (ou « Ouvrir avec… » dans votre gestionnaire de fichiers). Le fichier est décodé en mémoire et sa forme d'onde s'affiche avec le nombre de canaux, la fréquence d'échantillonnage et la durée.",
          'Drag a file in, use “Open an audio file”, or run `lightcutsoundz song.mp3` from a terminal (or “Open with…” in your file manager). The file is decoded in memory and its waveform appears with the channel count, sample rate and duration.',
        ),
      },
      {
        title: b('2. Tracez les coupes', '2. Draw the cuts'),
        body: b(
          "Faites glisser sur la forme d'onde pour marquer une partie à retirer, autant de fois que vous voulez. Redimensionnez ou déplacez une zone, ou saisissez ses temps. La barre de lecture, l'aperçu et l'export tiennent compte des coupes : la durée affichée est celle du résultat.",
          'Drag on the waveform to mark a part to remove, as many times as you like. Resize or move a zone, or type its times. The seek bar, the preview and the export all take the cuts into account: the displayed duration is that of the result.',
        ),
      },
      {
        title: b('3. Réglez fondus, volume, vitesse et filtres', '3. Set fades, volume, speed and filters'),
        body: b(
          "Le fondu d'entrée et le fondu de sortie se règlent au dixième de seconde, avec une courbe linéaire ou à puissance égale. « Normaliser » amène le pic à −1 dBFS. La vitesse change la durée par rééchantillonnage. Les filtres passe-bas, passe-haut et passe-bande se règlent en pente (12 à 48 dB/octave) ou avec un Q personnalisé. Tout s'entend en direct pendant la lecture.",
          'Fade in and fade out are set to a tenth of a second, with a linear or equal-power curve. “Normalise” brings the peak to −1 dBFS. Speed changes the duration by resampling. Low-pass, high-pass and band-pass filters are set by slope (12 to 48 dB/octave) or with a custom Q. Everything is heard live during playback.',
        ),
      },
      {
        shot: 'export',
        title: b('4. Exportez', '4. Export'),
        body: b(
          "Choisissez WAV (32 bits flottants, 24 bits ou 16 bits avec dither), MP3 (VBR ≈ 190 kb/s), FLAC, OGG Vorbis ou M4A (AAC). Une barre de progression et un bouton Annuler accompagnent l'encodage. Les étiquettes (titre, artiste, album…) et la pochette passent dans le fichier exporté.",
          'Choose WAV (32-bit float, 24-bit or 16-bit with dither), MP3 (VBR ≈ 190 kb/s), FLAC, OGG Vorbis or M4A (AAC). A progress bar and a Cancel button accompany the encoding. Tags (title, artist, album…) and the cover picture carry over to the exported file.',
        ),
      },
    ],
    groups: [
      {
        title: b('Montage', 'Editing'),
        items: [
          { title: b('Coupes multiples', 'Multiple cuts'), body: b("Glissez sur la forme d'onde pour marquer autant de parties à retirer que nécessaire ; redimensionnez, déplacez ou saisissez leurs temps.", 'Drag on the waveform to mark as many parts to remove as needed; resize, move or type their times.') },
          { title: b('Découpe précise', 'Precise trim'), body: b("Au centième de seconde dans l'interface, à l'échantillon dans le moteur. La source n'est jamais modifiée.", 'To a hundredth of a second in the interface, to the sample in the engine. The source is never modified.') },
          { title: b('Annuler / rétablir', 'Undo / redo'), body: b('Chaque modification est annulable.', 'Every edit is undoable.') },
          { title: b('Vitesse', 'Speed'), body: b("Par rééchantillonnage : 0,5× divise la durée par deux (la hauteur suit).", 'By resampling: 0.5× halves the duration (pitch shifts with it).') },
        ],
      },
      {
        title: b('Traitement du son', 'Sound processing'),
        items: [
          { title: b('Fondus', 'Fades'), body: b("Entrée et sortie au dixième de seconde, courbe linéaire ou à puissance égale (quart de sinus). Deux fondus qui se chevauchent se multiplient.", 'In and out to a tenth of a second, linear or equal-power (quarter-sine) curve. Two overlapping fades multiply.') },
          { title: b('Normalisation', 'Normalization'), body: b("Appliquée en dernier : le pic du fichier exporté est ramené à −1 dBFS, quels que soient la vitesse et les filtres choisis avant.", 'Applied last: the exported file peaks at −1 dBFS whatever speed and filters were applied before.') },
          { title: b('Filtres biquad', 'Biquad filters'), body: b("Passe-bas, passe-haut et passe-bande (RBJ Audio Cookbook). Passe-bas et passe-haut de 12 à 48 dB/octave en cascades de Butterworth, ou Q personnalisé sur un étage de 12 dB/octave.", 'Low-pass, high-pass and band-pass (RBJ Audio Cookbook). Low-pass and high-pass from 12 to 48 dB/octave as Butterworth cascades, or a custom Q on a single 12 dB/octave stage.') },
          { title: b('Aperçu en temps réel', 'Real-time preview'), body: b("Fondus, vitesse, filtres et normalisation s'entendent pendant la lecture.", 'Fades, speed, filters and normalization are heard during playback.') },
        ],
      },
      {
        title: b('Formats', 'Formats'),
        items: [
          { title: b('Import', 'Import'), body: b('MP3, FLAC, WAV, OGG, AAC, M4A, AIFF, CAF, MKA, WebM.', 'MP3, FLAC, WAV, OGG, AAC, M4A, AIFF, CAF, MKA, WebM.') },
          { title: b('Export', 'Export'), body: b("WAV (32 bits flottants, 24 bits, 16 bits avec dither), MP3 (VBR ≈ 190 kb/s), FLAC, OGG Vorbis, M4A (AAC).", 'WAV (32-bit float, 24-bit, 16-bit with dither), MP3 (VBR ≈ 190 kb/s), FLAC, OGG Vorbis, M4A (AAC).') },
          { title: b('Étiquettes et pochette', 'Tags and cover art'), body: b('Titre, artiste, album et pochette conservés vers MP3, FLAC et M4A (étiquettes seules pour OGG).', 'Title, artist, album and cover carried to MP3, FLAC and M4A (tags only for OGG).') },
        ],
      },
      {
        title: b('Fiabilité', 'Reliability'),
        items: [
          { title: b('Export sûr', 'Safe export'), body: b("Le fichier est écrit à côté de sa destination puis déplacé : un export annulé ou en échec ne détruit jamais le fichier remplacé.", 'The file is written next to its destination then moved into place: a failed or cancelled export never destroys the file it would have replaced.') },
          { title: b('Annulation', 'Cancel'), body: b("Une barre de progression et un bouton Annuler pendant l'export.", 'A progress bar and a Cancel button during export.') },
          { title: b('Ouvrir avec…', 'Open with…'), body: b('Ligne de commande et « Ouvrir avec… » dans le gestionnaire de fichiers.', 'Command line and “Open with…” in the file manager.') },
          { title: b('Bilingue, clair et sombre', 'Bilingual, light and dark'), body: b('Interface en français et en anglais, thème clair, sombre ou système.', 'English and French interface, light, dark or system theme.') },
        ],
      },
    ],
    formats: [
      { label: b('Import', 'Import'), value: b('MP3, FLAC, WAV, OGG, AAC, M4A, AIFF, CAF, MKA, WebM', 'MP3, FLAC, WAV, OGG, AAC, M4A, AIFF, CAF, MKA, WebM') },
      { label: b('Export', 'Export'), value: b('WAV (32 bits flottants · 24 bits · 16 bits dither), MP3, FLAC, OGG Vorbis, M4A (AAC)', 'WAV (32-bit float · 24-bit · 16-bit dither), MP3, FLAC, OGG Vorbis, M4A (AAC)') },
    ],
    shortcuts: [{ keys: 'F11', label: b('Plein écran', 'Full screen') }],
    notes: [
      { title: b('Mémoire', 'Memory'), body: b("Le fichier est décodé entièrement en mémoire : comptez environ 1,3 Go par heure de stéréo 44,1 kHz. Pour des enregistrements très longs, prévoyez la RAM correspondante.", 'The whole file is decoded in memory: about 1.3 GB per hour of stereo 44.1 kHz audio. For very long recordings, plan the matching RAM.') },
      { title: b("Pourquoi l'aperçu peut ne pas lire un format", 'Why the preview may not play a format'), body: b("L'aperçu est décodé par le moteur web du système (GStreamer sous Linux). S'il ne sait pas décoder un format, le fichier s'ouvre et s'exporte quand même.", 'The preview is decoded by the system web engine (GStreamer on Linux). If it cannot decode a format, the file still opens and exports.') },
      { title: b('Un autre FFmpeg', 'Another FFmpeg'), body: b("Si le FFmpeg embarqué manquait, l'application se rabat sur un ffmpeg du PATH. Pour en imposer un autre : LIGHTCUTSOUNDZ_FFMPEG=/chemin/vers/ffmpeg.", 'If the bundled FFmpeg were missing, the app falls back to an ffmpeg on your PATH. To use another build: LIGHTCUTSOUNDZ_FFMPEG=/path/to/ffmpeg.') },
    ],
    examples: [
      { title: b('Un extrait avec fondus', 'An excerpt with fades'), steps: [b('Ouvrez le morceau.', 'Open the track.'), b("Tracez les parties à retirer pour ne garder que l'extrait.", 'Draw the parts to remove so only the excerpt is left.'), b("Réglez un fondu d'entrée et de sortie à puissance égale.", 'Set an equal-power fade in and fade out.'), b('Exportez en MP3.', 'Export as MP3.')] },
      { title: b('Nettoyer et normaliser une voix', 'Clean up and normalise a voice'), steps: [b("Ouvrez l'enregistrement.", 'Open the recording.'), b('Activez un filtre passe-haut pour retirer les grondements graves.', 'Enable a high-pass filter to remove low rumble.'), b('Cochez « Normaliser » (pic à −1 dBFS).', 'Tick “Normalise” (peak at −1 dBFS).'), b('Exportez en FLAC.', 'Export as FLAC.')] },
      { title: b('Changer de format', 'Change format'), steps: [b('Ouvrez le fichier.', 'Open the file.'), b('Choisissez M4A (AAC) ou WAV 24 bits.', 'Pick M4A (AAC) or 24-bit WAV.'), b('Exportez : les étiquettes et la pochette sont conservées.', 'Export: tags and cover are kept.')] },
      { title: b('Fabriquer une sonnerie', 'Make a ringtone'), steps: [b('Ouvrez le morceau et trouvez le refrain à l’écoute.', 'Open the track and find the chorus by listening.'), b('Coupez tout le reste.', 'Cut everything else.'), b('Ajoutez un fondu de sortie de deux secondes.', 'Add a two-second fade out.'), b('Exportez en M4A (AAC) ou MP3.', 'Export as M4A (AAC) or MP3.')] },
    ],
    platform: b('macOS : Apple Silicon (M1 et suivants), macOS 11 ou plus. Linux : x86_64 et ARM64.', 'macOS: Apple Silicon (M1 and later), macOS 11 or later. Linux: x86_64 and ARM64.'),
    reqs: [
      b("Rien à installer : tous les formats d'export fonctionnent d'origine, avec un FFmpeg LGPL audio seul inclus.", 'Nothing to install: every export format works out of the box, with a bundled LGPL audio-only FFmpeg.'),
      b("Debian / Ubuntu : gstreamer1.0-plugins-good pour l'aperçu MP3, plus gstreamer1.0-libav pour AAC et M4A (les paquets les installent).", 'Debian / Ubuntu: gstreamer1.0-plugins-good for MP3 preview, plus gstreamer1.0-libav for AAC and M4A (the packages pull them in).'),
      b("Les AppImage demandent FUSE 2 (libfuse2) ; sinon lancez-les avec --appimage-extract-and-run.", 'AppImages need FUSE 2 (libfuse2); otherwise run them with --appimage-extract-and-run.'),
    ],
    pkg: { pkg: 'LightCutSoundz', apt: 'light-cut-soundz', ai: 'lightcutsoundz', icon: 512, rpm: true, purge: true },
  },

  // ───────────────────────────── LightGenSubz
  {
    id: 'gen-subz',
    h: [285, 330],
    name: 'LightGenSubz',
    kind: b('Générateur de sous-titres', 'Subtitle generator'),
    tagline: b(
      "Transformez une vidéo ou un fichier audio en sous-titres précis, hors ligne par défaut, puis traduisez-les.",
      'Turn a video or audio file into accurate subtitles, offline by default, then translate them.',
    ),
    short: b(
      'Transcription hors ligne, traduction optionnelle, édition des répliques et export .srt, .vtt, .ass.',
      'Offline transcription, optional translation, cue editing and .srt, .vtt, .ass export.',
    ),
    intro: [
      b(
        "Choisissez un fichier vidéo ou audio, lancez la génération, récupérez des sous-titres aux horodatages précis. La transcription tourne en local avec whisper.cpp : une détection de voix retrouve d'abord les passages parlés, puis chacun est transcrit à part, et chaque mot garde son horaire. Silences et musique sont ignorés.",
        'Pick a video or audio file, generate, and get subtitles with accurate timestamps. Transcription runs locally with whisper.cpp: voice-activity detection first finds the speech, then each stretch is transcribed on its own, and every word keeps its time. Silence and music are skipped.',
      ),
      b(
        "Aucun compte n'est nécessaire et vos médias ne sont envoyés nulle part. Si vous préférez ne pas tout faire en local, Groq, OpenAI, Deepgram ou AssemblyAI sont disponibles ; dans ce cas seul l'audio est envoyé au fournisseur que vous avez choisi, et les clés sont stockées dans le trousseau du système.",
        'No account is needed and your media is never uploaded. If you would rather not run locally, Groq, OpenAI, Deepgram or AssemblyAI are available; then only the audio is sent to the provider you chose, and keys are stored in the OS keychain.',
      ),
      b(
        'Les répliques sont ensuite découpées en sous-titres lisibles (deux lignes de 42 colonnes au plus, coupés aux fins de phrase et aux vraies pauses). Vous pouvez les corriger dans l’application, les traduire, puis les exporter en .srt, .vtt ou .ass.',
        'Cues are then split into readable subtitles (two lines of at most 42 columns, cut at sentence ends and real pauses). You can fix them in the app, translate them, then export as .srt, .vtt or .ass.',
      ),
    ],
    hero: 'result',
    how: [
      {
        shot: 'home',
        title: b('1. Choisissez un fichier', '1. Pick a file'),
        body: b(
          "Déposez une vidéo ou un son dans la fenêtre, ou « Parcourir les fichiers » (MP4, MKV, MOV, AVI, WebM, MP3, WAV, M4A, FLAC, OGG). Pour un film multilingue, choisissez la piste audio. Dans les Réglages, vous pouvez forcer la langue parlée quand la détection se trompe et choisir le modèle Whisper (base, small ou medium).",
          'Drop a video or sound into the window, or “Browse files” (MP4, MKV, MOV, AVI, WebM, MP3, WAV, M4A, FLAC, OGG). For a multi-language film, pick the audio track. In Settings you can force the spoken language when detection gets it wrong and choose the Whisper model (base, small or medium).',
        ),
      },
      {
        shot: 'result',
        title: b('2. Générez les sous-titres', '2. Generate the subtitles'),
        body: b(
          "Un clic sur « Générer les sous-titres » : l'audio est extrait dans un dossier temporaire (supprimé ensuite), les passages parlés sont détectés puis transcrits. Rien n'est écrit sur votre disque à ce stade : les sous-titres s'affichent dans l'application avec leur langue détectée, leur nombre de lignes et leurs horaires. « Annuler » arrête la génération en cours.",
          'One click on “Generate subtitles”: the audio is extracted to a temporary folder (deleted afterwards), the speech is detected then transcribed. Nothing is written to your disk yet: the subtitles appear in the app with their detected language, line count and timings. “Cancel” stops a run in progress.',
        ),
      },
      {
        title: b('3. Corrigez et traduisez', '3. Fix and translate'),
        body: b(
          "Le crayon passe les répliques en édition pour corriger un mot ou un horaire. Sous la liste, choisissez la langue source et la langue cible puis « Traduire » : hors ligne avec le modèle NLLB-200, ou via DeepL, OpenAI, Google Translate ou Azure Translator. La traduction se fait par lots, en donnant la fin du lot précédent comme contexte.",
          'The pencil switches the cues to editing so you can fix a word or a timing. Below the list, pick the source and target languages then “Translate”: offline with the NLLB-200 model, or via DeepL, OpenAI, Google Translate or Azure Translator. Translation runs in batches, with the end of the previous batch given as context.',
        ),
      },
      {
        shot: 'export',
        title: b('4. Exportez', '4. Export'),
        body: b(
          "« Exporter » propose SubRip (.srt), WebVTT (.vtt, pour le web) ou Advanced SubStation (.ass), pour l'original, la traduction ou les deux. La boîte d'enregistrement propose clip.srt à côté de votre vidéo et ne remplace jamais un fichier existant sans le dire.",
          '“Export” offers SubRip (.srt), WebVTT (.vtt, for the web) or Advanced SubStation (.ass), for the original, the translation or both. The save dialog proposes clip.srt next to your video and never silently replaces an existing file.',
        ),
      },
    ],
    groups: [
      {
        title: b('Transcription', 'Transcription'),
        items: [
          { title: b('Hors ligne par défaut', 'Offline by default'), body: b("whisper.cpp en local, sans compte ; vos médias ne sont envoyés nulle part.", 'Local whisper.cpp, no account; your media is never uploaded.') },
          { title: b('Détection de voix', 'Voice detection'), body: b("Le détecteur Silero retrouve les passages parlés : silences et musique sont ignorés, et chaque mot garde son horaire.", 'The Silero detector finds the speech: silence and music are skipped, and every word keeps its own time.') },
          { title: b('Modèles Whisper', 'Whisper models'), body: b('Base, small ou medium, au choix. Le premier lancement télécharge le modèle, vérifié par SHA-256.', 'Base, small or medium, your choice. The first run downloads the model, checked against a SHA-256.') },
          { title: b('Multilingue', 'Multilingual'), body: b("Langue détectée automatiquement, ou imposée ; piste audio au choix pour les films multilingues.", 'Language auto-detected, or forced; choose the audio track of a multi-language film.') },
          { title: b('Moteurs cloud en option', 'Optional cloud engines'), body: b("Groq, OpenAI, Deepgram, AssemblyAI. Les clés sont dans le trousseau du système ; un fournisseur occupé est réessayé avec un délai croissant.", 'Groq, OpenAI, Deepgram, AssemblyAI. Keys live in the OS keychain; a busy provider is retried with a growing delay.') },
        ],
      },
      {
        title: b('Sous-titres lisibles', 'Readable subtitles'),
        items: [
          { title: b('Découpage intelligent', 'Smart segmentation'), body: b("Répliques de 84 colonnes et 7 secondes au plus, coupées aux fins de phrase et aux vraies pauses, jamais à travers un silence de 1,2 s ou plus.", 'Cues of at most 84 columns and 7 seconds, cut at sentence ends and real pauses, never across a silence of 1.2 s or more.') },
          { title: b('Deux lignes de 42 colonnes', 'Two lines of 42 columns'), body: b("32 colonnes pour les écritures pleine largeur ; le chinois et le japonais sont coupés entre les caractères.", '32 for full-width scripts; Chinese and Japanese are cut between characters.') },
          { title: b("Édition dans l'application", 'Editing in the app'), body: b("Corrigez texte et horaires des répliques avant d'exporter.", 'Fix cue text and timings before exporting.') },
        ],
      },
      {
        title: b('Traduction', 'Translation'),
        items: [
          { title: b('Hors ligne', 'Offline'), body: b("Modèle NLLB-200 local (environ 900 Mo la première fois) ; il faut indiquer la langue source plutôt que « Auto ».", 'Local NLLB-200 model (about 900 MB the first time); the source language must be chosen instead of “Auto”.') },
          { title: b('Services en ligne', 'Online services'), body: b('DeepL, OpenAI, Google Translate, Azure Translator.', 'DeepL, OpenAI, Google Translate, Azure Translator.') },
          { title: b('Contexte entre lots', 'Context between batches'), body: b("Les phrases sont traduites par lots, la fin du lot précédent servant de contexte pour garder un ton cohérent.", 'Sentences are translated in batches, the end of the previous batch serving as context to keep a consistent tone.') },
        ],
      },
      {
        title: b('Export', 'Export'),
        items: [
          { title: b('Trois formats', 'Three formats'), body: b('.srt (SubRip), .vtt (WebVTT, pour le web) et .ass (Advanced SubStation).', '.srt (SubRip), .vtt (WebVTT, for the web) and .ass (Advanced SubStation).') },
          { title: b("Original, traduction, ou les deux", 'Original, translation, or both'), body: b('Choisissez ce qui est écrit dans le fichier.', 'Choose what goes into the file.') },
          { title: b('Sans écraser', 'No silent overwrite'), body: b('Le nom proposé est à côté de la vidéo et un fichier existant n’est jamais remplacé sans demander.', 'The proposed name sits next to the video and an existing file is never replaced without asking.') },
        ],
      },
    ],
    formats: [
      { label: b('Entrée', 'Input'), value: b('MP4, MKV, MOV, AVI, WebM, MP3, WAV, M4A, FLAC, OGG', 'MP4, MKV, MOV, AVI, WebM, MP3, WAV, M4A, FLAC, OGG') },
      { label: b('Sortie', 'Output'), value: b('.srt, .vtt, .ass', '.srt, .vtt, .ass') },
      { label: b('Modèles', 'Models'), value: b('Whisper base · small · medium ; NLLB-200 (traduction locale)', 'Whisper base · small · medium; NLLB-200 (local translation)') },
    ],
    shortcuts: [{ keys: 'Ctrl/Cmd+O', label: b('Choisir un fichier', 'Pick a file') }, { keys: 'Ctrl/Cmd+,', label: b('Réglages', 'Settings') }],
    notes: [
      { title: b('Ce qui est envoyé, et à qui', 'What is sent, and to whom'), body: b("En mode local, rien ne quitte la machine. Avec un moteur cloud, seul un audio mono compressé (MP3 32 kb/s) est envoyé au fournisseur choisi. Pour la traduction en ligne, ce sont les textes des répliques.", 'In local mode nothing leaves the machine. With a cloud engine, only a compressed mono audio (32 kbit/s MP3) is sent to the chosen provider. For online translation, it is the cue texts.') },
      { title: b('Premier lancement', 'First run'), body: b("Le premier lancement télécharge un modèle whisper (environ 190 Mo) ; la traduction locale ajoute NLLB-200 (environ 900 Mo). Les modèles sont stockés dans le dossier de données de l'application et vérifiés par SHA-256 avant usage.", 'The first run downloads a whisper model (about 190 MB); local translation adds NLLB-200 (about 900 MB). Models are stored in the app’s data folder and checked against a SHA-256 before use.') },
      { title: b('Fichiers temporaires', 'Temporary files'), body: b("L'audio extrait vit dans un dossier temporaire, supprimé à la fin. Quitter l'application pendant une génération lui demande de s'arrêter et attend quelques secondes qu'elle supprime ses fichiers et termine ffmpeg.", 'Extracted audio lives in a temporary folder, deleted afterwards. Quitting during a run asks it to stop and waits a few seconds for it to delete its files and end ffmpeg.') },
    ],
    examples: [
      { title: b('Sous-titrer une vidéo', 'Subtitle a video'), steps: [b('Glissez la vidéo dans la fenêtre.', 'Drag the video into the window.'), b('Cliquez sur « Générer les sous-titres ».', 'Click “Generate subtitles”.'), b('Exportez en .srt à côté de la vidéo.', 'Export as .srt next to the video.')] },
      { title: b('Traduire des sous-titres', 'Translate subtitles'), steps: [b('Générez les sous-titres.', 'Generate the subtitles.'), b('Choisissez la langue cible et cliquez sur « Traduire » (hors ligne ou via DeepL).', 'Pick the target language and click “Translate” (offline or via DeepL).'), b("Exportez l'original, la traduction ou les deux.", 'Export the original, the translation or both.')] },
      { title: b('Corriger puis publier sur le web', 'Fix then publish on the web'), steps: [b('Générez les sous-titres.', 'Generate the subtitles.'), b('Corrigez les répliques dans l’application.', 'Fix the cues in the app.'), b('Exportez en .vtt pour une balise vidéo HTML.', 'Export as .vtt for an HTML video tag.')] },
      { title: b('Transcrire un podcast ou une réunion', 'Transcribe a podcast or a meeting'), steps: [b("Ouvrez le fichier audio (MP3, WAV, M4A…).", 'Open the audio file (MP3, WAV, M4A…).'), b('Choisissez le modèle medium pour un maximum de précision.', 'Choose the medium model for maximum accuracy.'), b('Générez, relisez, exportez le texte horodaté.', 'Generate, proofread, export the timestamped text.')] },
      { title: b('Incruster dans une vidéo', 'Burn into a video'), steps: [b('Générez un .srt ici.', 'Generate an .srt here.'), b('Ouvrez la vidéo dans LightCutVidz et importez le .srt dans Sous-titres.', 'Open the video in LightCutVidz and import the .srt in Subtitles.'), b("Exportez : les sous-titres sont incrustés.", 'Export: the subtitles are burned in.')] },
    ],
    platform: b('macOS Apple Silicon (13.4 ou plus), Linux x86_64 (glibc 2.39 ou plus : Ubuntu 24.04+, Debian 13+, Fedora 40+).', 'macOS Apple Silicon (13.4 or later), Linux x86_64 (glibc 2.39 or later: Ubuntu 24.04+, Debian 13+, Fedora 40+).'),
    reqs: [
      b("ffmpeg doit être installé et accessible dans le PATH ; l'installateur le configure sous Linux.", 'ffmpeg must be installed and on your PATH; the installer sets it up on Linux.'),
      b('Le premier lancement télécharge un modèle whisper (~190 Mo) ; la traduction locale ajoute NLLB-200 (~900 Mo).', 'The first run downloads a whisper model (~190 MB); local translation adds NLLB-200 (~900 MB).'),
      b('Les modèles sont vérifiés par SHA-256 avant usage.', 'Models are checked against a pinned SHA-256 before use.'),
    ],
    pkg: { pkg: 'LightGenSubz', apt: 'light-gen-subz', ai: 'light-gen-subz', icon: 512 },
  },

  // ───────────────────────────── LightEditorVidz
  {
    id: 'editor-vidz',
    h: [355, 305],
    name: 'LightEditorVidz',
    kind: b('Création vidéo complète', 'Full video creator'),
    tagline: b(
      'Composez des scènes avec texte, images, vidéo, audio et formes, animez-les et exportez un vrai .mp4, en local, sans filigrane.',
      'Compose scenes with text, images, video, audio and shapes, animate them, and export a real .mp4, locally, no watermark.',
    ),
    short: b(
      'Scènes sur une timeline, animations composables, transitions et export mp4 natif.',
      'Scenes on a timeline, composable animations, transitions and native mp4 export.',
    ),
    intro: [
      b(
        "LightEditorVidz assemble une vidéo à partir de scènes disposées sur une timeline, avec une vraie horloge de lecture. Chaque scène contient des éléments (texte, image, vidéo, audio, formes) que vous placez, redimensionnez et faites pivoter directement sur le canevas, avec un seul et même outil d'interaction. Un panneau de propriétés règle les détails et une liste de calques ordonne la superposition.",
        'LightEditorVidz builds a video from scenes laid out on a timeline, with a real playback clock. Each scene holds elements (text, image, video, audio, shapes) that you place, resize and rotate directly on the canvas, with one shared interaction tool. A properties panel sets the details and a layers list orders the stacking.',
      ),
      b(
        "À l'export, les images sont rastérisées nativement, en parallèle, puis envoyées à ffmpeg qui mixe l'audio dans la même passe : ce n'est pas un rejeu du navigateur, donc le fichier .mp4 correspond à ce que vous voyez. L'export est annulable et signale tout média illisible.",
        'On export, frames are rasterized natively, in parallel, then piped to ffmpeg, which mixes the audio in the same pass: it is not a browser replay, so the .mp4 matches what you see. The export is cancellable and reports any unreadable media.',
      ),
      b(
        "Un projet est un dossier portable (.lvproj) contenant un fichier project.json et vos médias : pas de base de données, vous pouvez le copier, l'archiver ou le versionner. Les modifications sont enregistrées automatiquement.",
        'A project is a portable folder (.lvproj) holding a project.json file and your media: no database, you can copy, archive or version it. Changes are saved automatically.',
      ),
    ],
    hero: 'editor',
    how: [
      {
        shot: 'new',
        title: b('1. Créez ou ouvrez un projet', '1. Create or open a project'),
        body: b(
          "« Nouveau projet » demande un nom, une résolution (16:9 en 1920×1080, 9:16 en 1080×1920, 1:1 en 1080×1080 ou UHD 3840×2160) et une cadence (24, 30 ou 60 images/s), puis le dossier où créer le projet. « Ouvrir un projet » reprend un dossier .lvproj existant, y compris l'ancien format JSON.",
          '“New project” asks for a name, a resolution (16:9 at 1920×1080, 9:16 at 1080×1920, 1:1 at 1080×1080 or UHD 3840×2160) and a frame rate (24, 30 or 60 fps), then the folder to create the project in. “Open project” reopens an existing .lvproj folder, including the legacy JSON format.',
        ),
      },
      {
        shot: 'editor',
        title: b('2. Ajoutez des éléments sur la scène', '2. Add elements to the scene'),
        body: b(
          "La barre de gauche donne accès aux bibliothèques : Texte (titre, sous-titre, styles animés Néon, Ombre, Boîte, Lueur, Contour, Impact…), Vidéos, Images, Audio et Formes (rectangle, ellipse, triangle, ligne, flèche, étoile). Un clic ajoute l'élément à la scène ; vous le déplacez, le redimensionnez et le faites pivoter sur le canevas, tandis que le panneau de droite règle contenu, police, couleur, alignement, dégradé, bordure, ombre, mode de fusion…",
          'The left bar opens the libraries: Text (title, subtitle, animated styles like Neon, Shadow, Box, Glow, Outline, Impact…), Videos, Images, Audio and Shapes (rectangle, ellipse, triangle, line, arrow, star). One click adds the element to the scene; you move, resize and rotate it on the canvas, while the right panel sets content, font, colour, alignment, gradient, border, shadow, blend mode…',
        ),
      },
      {
        title: b('3. Animez et enchaînez les scènes', '3. Animate and chain the scenes'),
        body: b(
          "Ajoutez à chaque élément des animations d'entrée ou de sortie (fondu, glissement, zoom, rotation, flou, rebond, machine à écrire, mot à mot…) : elles se cumulent au lieu de s'écraser. Les images peuvent recevoir un mouvement Ken Burns (zoom, panoramique). Entre deux scènes, appliquez une transition (fondu, glissement, zoom, volet, flou, rotation…) et réglez le chevauchement pour un fondu-enchaîné.",
          'Add entrance or exit animations to each element (fade, slide, zoom, rotate, blur, bounce, typewriter, word-by-word…): they stack instead of overwriting each other. Images can get a Ken Burns move (zoom, pan). Between two scenes, apply a transition (fade, slide, zoom, wipe, blur, rotate…) and set the overlap for a cross-fade.',
        ),
      },
      {
        title: b('4. Montez sur la timeline', '4. Edit on the timeline'),
        body: b(
          "La timeline montre les scènes en haut et une piste par type d'élément dessous. Vous scindez un élément à la tête de lecture, le dupliquez, le supprimez, dupliquez une scène entière ou réorganisez les scènes. Le curseur de zoom règle l'échelle, et vous pouvez grouper plusieurs éléments (Ctrl+G) pour les déplacer ensemble. Les pistes audio ont volume, fondus, décalage, muet et solo.",
          'The timeline shows scenes on top and one track per element type below. You split an element at the playhead, duplicate it, delete it, duplicate a whole scene or reorder scenes. The zoom slider sets the scale, and you can group several elements (Ctrl+G) to move them together. Audio tracks have volume, fades, offset, mute and solo.',
        ),
      },
      {
        shot: 'export',
        title: b('5. Exportez en mp4', '5. Export to mp4'),
        body: b(
          "La fenêtre d'export règle la résolution (originale, 1080p, 720p ou 480p), la cadence (originale, 24, 30 ou 60) et la qualité (haute, moyenne, basse). Les images sont rastérisées en parallèle et ffmpeg encode et mixe l'audio dans la même passe. Une barre de progression et un bouton d'annulation suivent l'opération ; un rapport liste les médias illisibles.",
          'The export window sets the resolution (original, 1080p, 720p or 480p), the frame rate (original, 24, 30 or 60) and the quality (high, medium, low). Frames are rasterized in parallel and ffmpeg encodes and mixes the audio in the same pass. A progress bar and a cancel button follow the operation; a report lists unreadable media.',
        ),
      },
    ],
    groups: [
      {
        title: b('Composition', 'Composition'),
        items: [
          { title: b('Timeline multi-scènes', 'Multi-scene timeline'), body: b("Une vraie horloge de lecture pilote l'aperçu, pas un minuteur à intervalle fixe.", 'A real playback clock drives the preview, not a fixed-interval timer.') },
          { title: b("Cinq types d'éléments", 'Five element types'), body: b("Texte, image, vidéo, audio et formes, tous déplacés, redimensionnés et pivotés par le même composant d'interaction.", 'Text, image, video, audio and shapes, all moved, resized and rotated by the same interaction component.') },
          { title: b('Calques et groupes', 'Layers and groups'), body: b("Liste de calques réordonnables, groupes (Ctrl+G / Ctrl+Maj+G), modes de fusion (multiplier, écran, incrustation, assombrir, éclaircir).", 'Reorderable layer list, groups (Ctrl+G / Ctrl+Shift+G), blend modes (multiply, screen, overlay, darken, lighten).') },
          { title: b('Résolutions', 'Resolutions'), body: b('16:9 (1920×1080), 9:16 (1080×1920), 1:1 (1080×1080) ou UHD (3840×2160), à 24, 30 ou 60 images/s.', '16:9 (1920×1080), 9:16 (1080×1920), 1:1 (1080×1080) or UHD (3840×2160), at 24, 30 or 60 fps.') },
        ],
      },
      {
        title: b('Texte et formes', 'Text and shapes'),
        items: [
          { title: b('Texte riche', 'Rich text'), body: b("Police (Manrope et JetBrains Mono fournies), taille automatique ou fixe, gras, italique, souligné, barré, interlettrage, interligne, ombre, alignements, fond.", 'Font (Manrope and JetBrains Mono bundled), auto or fixed size, bold, italic, underline, strikethrough, letter spacing, line height, shadow, alignment, background.') },
          { title: b('Styles de texte animés', 'Animated text styles'), body: b('Néon, Ombre, Boîte, Espacé, Lueur, Contour, Impact, Minimal… un clic applique un style complet.', 'Neon, Shadow, Box, Spaced, Glow, Outline, Impact, Minimal… one click applies a full style.') },
          { title: b('Formes', 'Shapes'), body: b("Rectangle, ellipse, triangle, ligne, flèche, étoile, avec remplissage uni ou dégradé, contour, tirets et rayon des angles.", 'Rectangle, ellipse, triangle, line, arrow, star, with solid or gradient fill, stroke, dashes and corner radius.') },
          { title: b('Dimensions proportionnelles', 'Proportional sizes'), body: b("Épaisseurs, rayons, bordures et flous sont exprimés en millièmes de la largeur du canevas : ils ont le même aspect à toute résolution, en aperçu comme à l'export.", 'Stroke widths, radii, borders and blur are expressed in thousandths of the canvas width so they look the same at any resolution, in preview and export.') },
        ],
      },
      {
        title: b('Animations et transitions', 'Animations and transitions'),
        items: [
          { title: b('Animations composables', 'Composable animations'), body: b("Fondu, glissements, zoom, rotation, retournement, flou, rebond, chute, tournoiement, machine à écrire, mot à mot, ligne à ligne… qui se cumulent.", 'Fade, slides, zoom, rotate, flip, blur, bounce, drop, spin, typewriter, word reveal, line reveal… that stack.') },
          { title: b('Courbes', 'Easing'), body: b("Linéaire, puissances 1 à 3 (entrée, sortie, entrée-sortie) et rebond, pour régler le caractère du mouvement.", 'Linear, powers 1 to 3 (in, out, in-out) and bounce, to set the character of the motion.') },
          { title: b('Ken Burns', 'Ken Burns'), body: b("Zoom avant/arrière et panoramiques gauche, droite, haut, bas sur les images, avec une intensité réglable.", 'Zoom in/out and pans left, right, up, down on images, with adjustable intensity.') },
          { title: b('Transitions de scène', 'Scene transitions'), body: b("Fondu, glissements, zoom, retournements, rotations, flou et volets, avec durée et courbe ; chevauchement réglable pour un fondu-enchaîné.", 'Fade, slides, zoom, flips, rotations, blur and wipes, with duration and easing; adjustable overlap for a cross-fade.') },
        ],
      },
      {
        title: b('Son', 'Sound'),
        items: [
          { title: b('Pistes audio', 'Audio tracks'), body: b("Volume, fondu d'entrée et de sortie, décalage, muet, solo.", 'Volume, fade in and out, offset, mute, solo.') },
          { title: b("Audio mixé à l'export", 'Audio mixed on export'), body: b("ffmpeg mixe l'audio dans la même passe que l'encodage vidéo.", 'ffmpeg mixes the audio in the same pass as the video encode.') },
        ],
      },
      {
        title: b('Édition et export', 'Editing and export'),
        items: [
          { title: b('Annuler / rétablir', 'Undo / redo'), body: b('Historique complet, Ctrl+Z / Ctrl+Maj+Z.', 'Full history, Ctrl+Z / Ctrl+Shift+Z.') },
          { title: b('Scinder, dupliquer, supprimer', 'Split, duplicate, delete'), body: b('Sur un élément comme sur une scène entière.', 'On an element as on a whole scene.') },
          { title: b('Enregistrement automatique', 'Autosave'), body: b("Les modifications sont enregistrées d'elles-mêmes ; fermer la fenêtre termine d'abord les enregistrements en attente.", 'Changes save themselves; closing the window first finishes pending saves.') },
          { title: b('Export mp4 réel', 'Real mp4 export'), body: b("Rastérisation native en parallèle, ffmpeg en sortie, annulable, avec un rapport des médias illisibles.", 'Native parallel rasterization, ffmpeg output, cancellable, with a report of unreadable media.') },
          { title: b('Mises à jour signées', 'Signed updates'), body: b("Aide › Rechercher les mises à jour télécharge, installe et relance (les modifications en attente sont enregistrées avant).", 'Help › Check for updates downloads, installs and relaunches (pending changes are saved first).') },
          { title: b('Bilingue', 'Bilingual'), body: b('Interface en français et en anglais.', 'English and French interface.') },
        ],
      },
    ],
    formats: [
      { label: b('Projet', 'Project'), value: b('Dossier .lvproj (project.json + médias), import de l’ancien format JSON', '.lvproj folder (project.json + media), legacy JSON import') },
      { label: b('Export', 'Export'), value: b('.mp4, de 480p à la résolution du projet, 24 à 60 images/s', '.mp4, from 480p to the project resolution, 24 to 60 fps') },
    ],
    shortcuts: [
      { keys: 'Ctrl+S', label: b('Enregistrer', 'Save') },
      { keys: 'Ctrl+Z / Ctrl+Shift+Z', label: b('Annuler / rétablir', 'Undo / redo') },
      { keys: 'Ctrl+C / Ctrl+V', label: b('Copier / coller', 'Copy / paste') },
      { keys: 'Ctrl+D', label: b('Dupliquer', 'Duplicate') },
      { keys: 'Ctrl+A', label: b('Tout sélectionner', 'Select all') },
      { keys: 'Ctrl+G / Ctrl+Shift+G', label: b('Grouper / dégrouper', 'Group / ungroup') },
      { keys: 'Shift+← / →', label: b('Avancer / reculer d’une seconde', 'Step one second') },
    ],
    notes: [
      { title: b('Un projet portable', 'A portable project'), body: b("Le dossier .lvproj contient project.json et un sous-dossier assets/ (images, audio, vidéos copiés à l'import). Déplacez ou archivez le dossier entier pour déplacer le projet.", 'The .lvproj folder holds project.json and an assets/ subfolder (images, audio, videos copied on import). Move or archive the whole folder to move the project.') },
      { title: b('Polices', 'Fonts'), body: b("Le texte utilise Manrope et JetBrains Mono, fournies. Toute autre police doit être installée sur le système pour être utilisée à l'export.", 'Text uses the bundled Manrope and JetBrains Mono. Any other font name must be installed on the system for the export to use it.') },
      { title: b('ffmpeg est requis', 'ffmpeg is required'), body: b("ffmpeg n'est pas embarqué : le cask Homebrew l'installe, l'installateur Linux aussi s'il manque. Variable LIGHT_EDITOR_VIDZ_FFMPEG pour indiquer un binaire précis.", 'ffmpeg is not bundled: the Homebrew cask pulls it in, and the Linux installer installs it if missing. Set LIGHT_EDITOR_VIDZ_FFMPEG to point at a specific binary.') },
      { title: b('Vidéos dans une scène', 'Videos in a scene'), body: b("Les vidéos sont décodées par ffmpeg en flux pendant l'export (rien n'est écrit sur disque) et seule la partie utilisée par le clip est décodée.", 'Videos are decoded by ffmpeg as a stream while exporting (nothing is written to disk); only the part of the file used by the clip is decoded.') },
    ],
    examples: [
      { title: b('Un titre animé', 'An animated title'), steps: [b('Dans Texte, cliquez sur « Ajouter un titre ».', 'In Text, click “Add a title”.'), b('Appliquez un fondu puis un glissement : ils se cumulent.', 'Apply a fade then a slide: they stack.'), b('Exportez en mp4.', 'Export as mp4.')] },
      { title: b('Un diaporama', 'A slideshow'), steps: [b('Ajoutez une image par scène.', 'Add one image per scene.'), b('Appliquez un Ken Burns à chaque image et une transition entre scènes.', 'Apply a Ken Burns pan to each image and a transition between scenes.'), b('Ajoutez une piste audio avec fondus.', 'Add an audio track with fades.'), b('Exportez.', 'Export.')] },
      { title: b('Habiller une vidéo', 'Dress up a video'), steps: [b('Ajoutez la vidéo comme élément.', 'Add the video as an element.'), b('Superposez texte, formes et logo.', 'Overlay text, shapes and a logo.'), b("Exportez : l'audio est mixé dans la même passe.", 'Export: audio is mixed in the same pass.')] },
      { title: b('Une vidéo verticale pour les réseaux', 'A vertical video for social media'), steps: [b('Créez un projet 9:16 (1080×1920).', 'Create a 9:16 project (1080×1920).'), b('Posez une vidéo ou une image en plein cadre, puis un titre au style Impact ou Boîte.', 'Place a video or image full frame, then a title in the Impact or Box style.'), b('Exportez en 1080p, 30 images/s.', 'Export at 1080p, 30 fps.')] },
      { title: b('Une intro de chaîne', 'A channel intro'), steps: [b('Enchaînez trois scènes courtes avec une transition en volet.', 'Chain three short scenes with a wipe transition.'), b('Animez un logo (zoom, rebond) et un nom (machine à écrire).', 'Animate a logo (zoom, bounce) and a name (typewriter).'), b('Ajoutez une musique avec fondu de sortie.', 'Add music with a fade out.'), b('Exportez et réutilisez le fichier en début de vos vidéos.', 'Export and reuse the file at the start of your videos.')] },
    ],
    platform: b('macOS en binaire universel (Apple Silicon et Intel), Linux (.deb, AppImage).', 'macOS universal binary (Apple Silicon and Intel), Linux (.deb, AppImage).'),
    reqs: [
      b("ffmpeg est requis à l'exécution et n'est pas inclus : le cask Homebrew l'installe, l'installateur Linux aussi s'il manque.", 'ffmpeg is a required runtime dependency and is not bundled: the Homebrew cask pulls it in, and the Linux installer installs it if missing.'),
      b('Variable LIGHT_EDITOR_VIDZ_FFMPEG pour indiquer un binaire précis.', 'Set LIGHT_EDITOR_VIDZ_FFMPEG to point at a specific binary.'),
      b("Les polices hors Manrope et JetBrains Mono doivent être installées sur le système pour l'export.", 'Fonts other than Manrope and JetBrains Mono must be installed on the system for the export.'),
    ],
    pkg: { pkg: 'LightEditorVidz', apt: 'light-editor-vidz', ai: 'light-editor-vidz', icon: 512 },
  },
];
