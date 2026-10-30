// Contenu source : design_handoff_light_app_suite (README de chaque dépôt light-{id})
export     const A = {
      'cut-vidz': {
        h: [30, 75], name: 'LightCutVidz', kind: ['Éditeur vidéo', 'Video editor'],
        tagline: ['Découpez, recadrez, filtrez et sous-titrez vos vidéos, puis exportez-les. FFmpeg est inclus.', 'Trim, crop, filter and subtitle your videos, then export them. FFmpeg is included.'],
        short: ['Découpe, recadrage, filtres, sous-titres et export multi-formats.', 'Trim, crop, filters, subtitles and multi-format export.'],
        paras: [[
          "LightCutVidz ouvre une vidéo, vous dessinez les parties à retirer sur la timeline, et l'export se fait en un seul passage d'encodage. Rien n'est enregistré dans un projet : vous ouvrez, vous éditez, vous exportez.",
          "Les fichiers H.264/AAC (MP4 et MOV des téléphones et caméras) s'ouvrent instantanément. Les autres formats (HEVC, AVI, FLV, 10 bits) sont d'abord convertis en aperçu WebM temporaire ; l'export part toujours du fichier d'origine.",
          'Chaque modification est annulable (Ctrl/Cmd+Z), l\'interface est en anglais et en français, avec thèmes clair et sombre.'], [
          'LightCutVidz opens a video, you draw the parts to remove on the timeline, and the export runs in a single encoding pass. Nothing is saved to a project: open, edit, export.',
          'H.264/AAC files (MP4 and MOV from phones and cameras) open instantly. Other formats (HEVC, AVI, FLV, 10-bit) are first converted to a temporary WebM preview; the export always starts from your original file.',
          'Every edit can be undone (Ctrl/Cmd+Z), and the interface is in English and French, with light and dark themes.']],
        feats: [
          ['Découpe multi-segments', 'Multi-segment trim', 'Zones de coupe sur la timeline, réglage au temps précis, pellicule de miniatures.', 'Cut zones on the timeline, precise time inputs, thumbnail filmstrip.'],
          ['Vitesse', 'Speed', 'De 0,25× à 4×, appliquée à la lecture et à l\'export.', 'From 0.25× to 4×, applied to playback and export.'],
          ['Recadrage et géométrie', 'Crop and geometry', 'Ratios 9:16, 4:5, 1:1, 16:9, rotation 90°, redressement ±45° et correction de perspective.', '9:16, 4:5, 1:1, 16:9 ratios, 90° rotation, ±45° straightening and perspective correction.'],
          ['20 filtres', '20 filters', 'Niveaux de gris, sépia, vintage, noir, froid/chaud, miroir, contours…', 'Grayscale, sepia, vintage, noir, cold/warm, mirror, edges…'],
          ['Sous-titres', 'Subtitles', 'Import .srt et incrustation, 7 styles d\'animation, police, couleurs, contour et position.', 'Import an .srt and burn it in, 7 animation styles, font, colours, outline and position.'],
          ['Formats sociaux', 'Social formats', 'TikTok, Reels, Shorts, Instagram, carré, YouTube, avec fond flou ou recadrage.', 'TikTok, Reels, Shorts, Instagram, square, YouTube, with a blurred background or cropped to fit.'],
          ['Stabilisation', 'Stabilization', 'Légère, normale ou forte, en deux passes à l\'export.', 'Light, normal or strong, in two passes at export.'],
          ['Export', 'Export', 'MP4, MOV, WebM, AVI, GIF ; qualité, résolution, accélération matérielle, file d\'attente.', 'MP4, MOV, WebM, AVI, GIF; quality, resolution, hardware acceleration, export queue.'],
        ],
        ex: [
          ['Un clip vertical pour les réseaux', 'A vertical clip for social media', ['Ouvrez la vidéo par glisser-déposer.', 'Dessinez les zones à retirer sur la timeline.', 'Choisissez le préset TikTok · Reels · Shorts (9:16) avec fond flou.', 'Exportez en MP4.'], ['Open the video by drag and drop.', 'Draw the zones to remove on the timeline.', 'Pick the TikTok · Reels · Shorts (9:16) preset with a blurred background.', 'Export as MP4.']],
          ['Sous-titres incrustés', 'Burned-in subtitles', ['Générez un .srt avec LightGenSubz.', 'Dans Subtitles, importez le .srt.', 'Choisissez un style d\'animation, la police et la position.', 'Exportez : les sous-titres sont incrustés.'], ['Generate an .srt with LightGenSubz.', 'In Subtitles, import the .srt.', 'Pick an animation style, font and position.', 'Export: the subtitles are burned in.']],
          ['Un GIF léger', 'A light GIF', ['Découpez le passage voulu.', 'Choisissez GIF dans Export.', 'Réglez la largeur et la fréquence d\'images.', 'Exportez.'], ['Trim the passage you want.', 'Pick GIF in Export.', 'Set the width and frame rate.', 'Export.']],
        ],
        platform: ['Apple Silicon (M1 et suivants) sur macOS, x86_64 sur Linux.', 'Apple Silicon (M1 and later) on macOS, x86_64 on Linux.'],
        reqs: [['FFmpeg est inclus dans l\'application, rien d\'autre à installer.', 'FFmpeg ships inside the app, nothing else to install.'], ['Les téléchargements sont vérifiés avec le fichier SHA256SUMS de la release.', 'Downloads are checked against the release\'s SHA256SUMS.']],
        o: { pkg: 'LightCutVidz', apt: 'lightcutvidz', ai: 'lightcutvidz', icon: 512, debCode: 'sudo apt install ./LightCutVidz-linux.deb', aiCode: 'chmod +x LightCutVidz-linux.AppImage\n./LightCutVidz-linux.AppImage' },
      },
      'cut-imgz': {
        h: [165, 215], name: 'LightCutImgz', kind: ['Éditeur image', 'Image editor'],
        tagline: ['Recadrez, faites pivoter et exportez vos images, en local, sans cloud ni compte.', 'Crop, rotate and export your images, locally, no cloud, no account.'],
        short: ['Recadrage, rotation et export PNG, JPEG, WebP, BMP, TIFF.', 'Crop, rotate and export to PNG, JPEG, WebP, BMP, TIFF.'],
        paras: [[
          "LightCutImgz sert à recadrer, redresser et convertir des images. Les réglages sont non destructifs : l'aperçu est calculé par le même code que celui qui produit le résultat, et un nouveau réglage remplace l'étape précédente au lieu de s'empiler.",
          "Chaque image reste sur votre machine, rien n'est envoyé."], [
          'LightCutImgz crops, straightens and converts images. Adjustments are non-destructive: the preview is rendered by the same code that produces the result, and re-adjusting replaces the step instead of stacking on it.',
          'Every image stays on your machine, nothing is uploaded.']],
        feats: [
          ['Recadrage', 'Crop', 'Sélection à 8 poignées, grille des tiers, ratios fixes, saisie numérique et déplacement aux flèches.', '8-point selection, rule-of-thirds grid, fixed ratios, numeric entry and arrow-key nudging.'],
          ['Rotation', 'Rotate', 'Boutons 90° et angle libre ; le canevas s\'agrandit, aperçu en direct.', '90° buttons and a free angle; the canvas grows, live preview.'],
          ['Export', 'Export', 'PNG, JPEG, WebP (sans perte), BMP et TIFF ; qualité JPEG réglable, profil ICC d\'origine conservé.', 'PNG, JPEG, WebP (lossless), BMP and TIFF; adjustable JPEG quality, original ICC profile kept.'],
          ['Réglages non destructifs', 'Non-destructive adjustments', 'Curseurs prévisualisés en direct, sans cumul.', 'Sliders previewed live, without stacking.'],
          ['100 % local', '100% local', 'Aucune image n\'est envoyée.', 'No image is ever uploaded.'],
        ],
        ex: [
          ['Recadrer à un format précis', 'Crop to an exact ratio', ['Ouvrez l\'image.', 'Choisissez un ratio fixe.', 'Placez la sélection avec la grille des tiers, affinez aux flèches.', 'Exportez.'], ['Open the image.', 'Pick a fixed ratio.', 'Place the selection using the thirds grid, nudge with the arrow keys.', 'Export.']],
          ['Redresser une photo', 'Straighten a photo', ['Ouvrez la photo.', 'Entrez un angle de rotation, l\'aperçu suit en direct.', 'Recadrez les bords.', 'Exportez en JPEG.'], ['Open the photo.', 'Enter a rotation angle, the preview follows live.', 'Crop the edges.', 'Export as JPEG.']],
          ['Convertir en WebP', 'Convert to WebP', ['Ouvrez l\'image.', 'Choisissez WebP dans Export.', 'Exportez, le profil ICC est conservé.'], ['Open the image.', 'Pick WebP in Export.', 'Export, the ICC profile is kept.']],
        ],
        platform: ['macOS (archive arm64 et x86_64) et Linux (.deb, .rpm, AppImage).', 'macOS (arm64 and x86_64 archive) and Linux (.deb, .rpm, AppImage).'],
        reqs: [['Rien à installer en plus.', 'Nothing else to install.'], ['Les téléchargements sont vérifiés avec le fichier SHA256SUMS de la release.', 'Downloads are checked against the release\'s SHA256SUMS.']],
        o: { pkg: 'LightCutImgz', apt: 'light-cut-imgz', ai: 'light-cut-imgz', icon: 256, rpm: true },
      },
      'cut-soundz': {
        h: [225, 275], name: 'LightCutSoundz', kind: ['Éditeur audio', 'Audio editor'],
        tagline: ['Coupez, fondez, normalisez et filtrez votre audio, puis exportez-le, en local, sans abonnement.', 'Trim, fade, normalize and filter your audio, then export it, locally, no subscription.'],
        short: ['Découpe, fondus, normalisation, filtres et export multi-formats.', 'Trim, fades, normalization, filters and multi-format export.'],
        paras: [[
          "LightCutSoundz coupe un fichier audio à la centième de seconde dans l'interface (à l'échantillon dans le moteur) sans jamais modifier la source. Le fichier est décodé en mémoire : comptez environ 1,3 Go par heure de stéréo 44,1 kHz.",
          "Fondus, vitesse, filtres et normalisation s'entendent pendant la lecture. L'export est écrit à côté de sa destination puis déplacé une fois terminé : un export annulé ou en échec ne détruit jamais le fichier qu'il devait remplacer."], [
          'LightCutSoundz cuts an audio file to a hundredth of a second in the interface (to the sample in the engine) and never modifies the source. The file is decoded in memory: about 1.3 GB per hour of stereo 44.1 kHz.',
          'Fades, speed, filters and normalization can be heard during playback. The export is written next to its destination and moved into place when complete: a failed or cancelled export never destroys the file it would have replaced.']],
        feats: [
          ['Découpe précise', 'Precise trim', 'Par horodatage, non destructive.', 'By timestamp, non-destructive.'],
          ['Fondus', 'Fades', 'Entrée et sortie, au dixième de seconde, courbe linéaire ou à puissance égale.', 'In and out, to a tenth of a second, linear or equal-power curve.'],
          ['Normalisation', 'Normalization', 'Pic à −1 dBFS, appliquée en dernier.', 'Peak at −1 dBFS, applied last.'],
          ['Vitesse', 'Speed', 'Par rééchantillonnage ; 0,5× divise la durée par deux (la hauteur suit).', 'By resampling; 0.5× halves the duration (pitch shifts with it).'],
          ['Filtres', 'Filters', 'Passe-bas, passe-haut et passe-bande biquad ; 12 à 48 dB/octave ou Q personnalisé.', 'Biquad low-pass, high-pass and band-pass; 12 to 48 dB/octave or a custom Q.'],
          ['Aperçu en temps réel', 'Real-time preview', 'Filtres, fondus, vitesse et normalisation s\'entendent pendant la lecture.', 'Hear filters, fades, speed and normalization while the track plays.'],
          ['Export multi-format', 'Multi-format export', 'WAV (32 bits flottants, 24 bits, 16 bits avec dither), MP3 (VBR ≈ 190 kb/s), FLAC, OGG Vorbis, M4A (AAC) ; tags et pochette conservés.', 'WAV (32-bit float, 24-bit, 16-bit with dither), MP3 (VBR ≈ 190 kb/s), FLAC, OGG Vorbis, M4A (AAC); tags and cover kept.'],
          ['Import', 'Import', 'MP3, FLAC, WAV, OGG, AAC, M4A, AIFF, CAF, MKA, WebM ; ligne de commande et « Ouvrir avec… ».', 'MP3, FLAC, WAV, OGG, AAC, M4A, AIFF, CAF, MKA, WebM; command line and "Open with…".'],
        ],
        ex: [
          ['Un extrait avec fondus', 'An excerpt with fades', ['Ouvrez le morceau.', 'Découpez l\'extrait par horodatage.', 'Réglez un fondu d\'entrée et de sortie à puissance égale.', 'Exportez en MP3.'], ['Open the track.', 'Trim the excerpt by timestamp.', 'Set an equal-power fade in and fade out.', 'Export as MP3.']],
          ['Normaliser une voix', 'Normalize a voice', ['Ouvrez l\'enregistrement.', 'Activez un filtre passe-haut pour retirer les graves.', 'Activez la normalisation à −1 dBFS.', 'Exportez en FLAC.'], ['Open the recording.', 'Enable a high-pass filter to remove low rumble.', 'Enable normalization to −1 dBFS.', 'Export as FLAC.']],
          ['Changer de format', 'Change format', ['Ouvrez le fichier.', 'Choisissez M4A (AAC) ou WAV 24 bits.', 'Exportez, tags et pochette sont conservés.'], ['Open the file.', 'Pick M4A (AAC) or 24-bit WAV.', 'Export, tags and cover are kept.']],
        ],
        platform: ['macOS : Apple Silicon (M1 et suivants), macOS 11 ou plus. Linux : x86_64 et ARM64.', 'macOS: Apple Silicon (M1 and later), macOS 11 or later. Linux: x86_64 and ARM64.'],
        reqs: [['Rien à installer : tous les formats d\'export fonctionnent d\'origine, avec un FFmpeg LGPL audio seul inclus.', 'Nothing to install: every export format works out of the box, with a bundled LGPL audio-only FFmpeg.'], ['Debian / Ubuntu : gstreamer1.0-plugins-good pour le MP3 en aperçu, plus gstreamer1.0-libav pour AAC et M4A.', 'Debian / Ubuntu: gstreamer1.0-plugins-good for MP3 preview, plus gstreamer1.0-libav for AAC and M4A.'], ['Les AppImage demandent FUSE 2 (libfuse2) ; sinon lancez-les avec --appimage-extract-and-run.', 'AppImages need FUSE 2 (libfuse2); otherwise run them with --appimage-extract-and-run.']],
        o: { pkg: 'LightCutSoundz', apt: 'light-cut-soundz', ai: 'lightcutsoundz', icon: 512, rpm: true, unScript: true },
      },
      'gen-subz': {
        h: [285, 330], name: 'LightGenSubz', kind: ['Générateur de sous-titres', 'Subtitle generator'],
        tagline: ['Transformez une vidéo ou un fichier audio en piste de sous-titres, hors ligne par défaut.', 'Turn any video or audio file into a subtitle track, offline by default.'],
        short: ['Transcription hors ligne, traduction optionnelle, export .srt .vtt .ass.', 'Offline transcription, optional translation, .srt .vtt .ass export.'],
        paras: [[
          "Choisissez un fichier, lancez la génération, récupérez un .srt aux horodatages précis. La transcription tourne en local avec whisper.cpp ; la détection de voix retrouve les passages parlés, et chaque mot garde son horaire.",
          "Si vous préférez ne pas tout faire en local, Groq, OpenAI, Deepgram ou AssemblyAI sont disponibles. Dans ce cas, l'audio est envoyé au fournisseur choisi."], [
          'Pick a file, generate, get an .srt with accurate timestamps. Transcription runs locally with whisper.cpp; voice-activity detection finds the speech, and every word keeps its own time.',
          'If you would rather not run locally, Groq, OpenAI, Deepgram or AssemblyAI are available. In that case the audio is uploaded to the provider you choose.']],
        feats: [
          ['Transcription hors ligne', 'Offline speech-to-text', 'Sans compte ; vos médias ne sont envoyés nulle part.', 'No account; your media is never uploaded.'],
          ['Moteurs cloud en option', 'Optional cloud engines', 'Groq, OpenAI, Deepgram, AssemblyAI. Clés stockées dans le trousseau du système.', 'Groq, OpenAI, Deepgram, AssemblyAI. Keys stored in the OS keychain.'],
          ['Multilingue', 'Multilingual', 'Langue détectée automatiquement, ou imposée ; piste audio au choix pour les films multilingues.', 'Language auto-detected, or forced; choose the audio track of a multi-language film.'],
          ['Traduction', 'Translation', 'Hors ligne (modèle NLLB-200) ou via DeepL, OpenAI, Google Translate, Azure Translator.', 'Offline (local NLLB-200 model) or via DeepL, OpenAI, Google Translate, Azure Translator.'],
          ['Modèles Whisper', 'Whisper models', 'Base, small ou medium.', 'Base, small or medium.'],
          ['Édition et export', 'Editing and export', 'Corrigez les sous-titres dans l\'app, exportez en .srt, .vtt ou .ass.', 'Edit the cues in the app, export as .srt, .vtt or .ass.'],
        ],
        ex: [
          ['Sous-titrer une vidéo', 'Subtitle a video', ['Glissez la vidéo dans la fenêtre.', 'Cliquez sur Generate subtitles.', 'Exportez en .srt à côté de la vidéo.'], ['Drag the video into the window.', 'Click Generate subtitles.', 'Export as .srt next to the video.']],
          ['Traduire', 'Translate', ['Générez les sous-titres.', 'Activez la traduction, hors ligne ou via DeepL.', 'Exportez l\'original, la traduction ou les deux.'], ['Generate the subtitles.', 'Enable translation, offline or via DeepL.', 'Export the original, the translation or both.']],
          ['Corriger puis publier', 'Fix then publish', ['Générez les sous-titres.', 'Corrigez les répliques dans l\'app.', 'Exportez en .vtt pour le web.'], ['Generate the subtitles.', 'Fix the cues in the app.', 'Export as .vtt for the web.']],
        ],
        platform: ['macOS Apple Silicon (13.4 ou plus), Linux x86_64 (glibc 2.39 ou plus : Ubuntu 24.04+, Debian 13+, Fedora 40+).', 'macOS Apple Silicon (13.4 or later), Linux x86_64 (glibc 2.39 or later: Ubuntu 24.04+, Debian 13+, Fedora 40+).'],
        reqs: [['ffmpeg doit être installé et accessible dans le PATH ; l\'installateur le configure sous Linux.', 'ffmpeg must be installed and on your PATH; the installer sets it up on Linux.'], ['Le premier lancement télécharge un modèle whisper (~190 Mo) ; la traduction locale ajoute NLLB-200 (~900 Mo).', 'The first run downloads a whisper model (~190 MB); local translation adds NLLB-200 (~900 MB).'], ['Les modèles sont vérifiés par SHA-256 avant usage.', 'Models are checked against a pinned SHA-256 before use.']],
        o: { pkg: 'LightGenSubz', apt: 'light-gen-subz', ai: 'light-gen-subz', icon: 512, extraUn: true },
      },
      'editor-vidz': {
        h: [355, 305], name: 'LightEditorVidz', kind: ['Création vidéo complète', 'Full video creator'],
        tagline: ['Composez des scènes avec texte, images, vidéo, audio et formes, animez-les et exportez un vrai .mp4, en local, sans filigrane.', 'Compose scenes with text, images, video, audio and shapes, animate them, and export a real .mp4, locally, no watermark.'],
        short: ['Scènes, animations composables et export mp4 natif.', 'Scenes, composable animations and native mp4 export.'],
        paras: [[
          "LightEditorVidz assemble une vidéo à partir de scènes sur une timeline avec une vraie horloge de lecture. Cinq types d'éléments (texte, image, vidéo, audio, formes) se déplacent, se redimensionnent et pivotent avec le même composant d'interaction.",
          "À l'export, les images sont rastérisées nativement en parallèle puis envoyées à ffmpeg, qui mixe l'audio dans la même passe. Ce n'est pas un rejeu du DOM ou du CSS. Un projet est un dossier .lvproj, portable, sans base de données."], [
          'LightEditorVidz builds a video from scenes on a timeline with a real playback clock. Five element types (text, image, video, audio, shapes) are dragged, resized and rotated through one shared interaction component.',
          'On export, frames are rasterized natively in parallel and piped to ffmpeg, which mixes the audio in the same pass. It is not a DOM or CSS replay. A project is a .lvproj folder, portable, with no database.']],
        feats: [
          ['Timeline multi-scènes', 'Multi-scene timeline', 'Avec une vraie horloge de lecture.', 'With a real playback clock.'],
          ['Cinq types d\'éléments', 'Five element types', 'Texte, image, vidéo, audio et formes.', 'Text, image, video, audio and shapes.'],
          ['Animations composables', 'Composable animations', 'Fondu, glissement, zoom, rotation, flou, rebond… qui se cumulent, plus transitions et Ken Burns.', 'Fade, slide, zoom, rotate, blur, bounce… that stack, plus transitions and Ken Burns pans.'],
          ['Édition', 'Editing', 'Annuler/rétablir, dupliquer, scinder, supprimer ; import de l\'ancien format JSON.', 'Undo/redo, duplicate, split, delete; import of the legacy JSON format.'],
          ['Export mp4 réel', 'Real mp4 export', 'Annulable, avec rapport des médias illisibles.', 'Cancellable, with a report of any unreadable media.'],
          ['Mise à jour signée', 'Signed update', 'Aide › Rechercher les mises à jour.', 'Help › Check for updates.'],
          ['Bilingue', 'Bilingual', 'Interface en anglais et en français.', 'English and French interface.'],
        ],
        ex: [
          ['Un titre animé', 'An animated title', ['Ajoutez un élément texte sur la scène.', 'Appliquez un fondu puis un glissement : ils se cumulent.', 'Exportez en mp4.'], ['Add a text element to the scene.', 'Apply a fade then a slide: they stack.', 'Export as mp4.']],
          ['Un diaporama', 'A slideshow', ['Ajoutez une image par scène.', 'Appliquez un Ken Burns et une transition entre scènes.', 'Ajoutez une piste audio.', 'Exportez.'], ['Add one image per scene.', 'Apply a Ken Burns pan and a transition between scenes.', 'Add an audio track.', 'Export.']],
          ['Habiller une vidéo', 'Dress up a video', ['Ajoutez la vidéo comme élément.', 'Superposez texte et formes.', 'Exportez : l\'audio est mixé dans la même passe.'], ['Add the video as an element.', 'Overlay text and shapes.', 'Export: audio is mixed in the same pass.']],
        ],
        platform: ['macOS en binaire universel (Apple Silicon et Intel), Linux (.deb, AppImage).', 'macOS universal binary (Apple Silicon and Intel), Linux (.deb, AppImage).'],
        reqs: [['ffmpeg est requis à l\'exécution et n\'est pas inclus : le cask Homebrew l\'installe, l\'installateur Linux aussi s\'il manque.', 'ffmpeg is a required runtime dependency and is not bundled: the Homebrew cask pulls it in, and the Linux installer installs it if missing.'], ['Variable LIGHT_EDITOR_VIDZ_FFMPEG pour indiquer un binaire précis.', 'Set LIGHT_EDITOR_VIDZ_FFMPEG to point at a specific binary.'], ['Les polices hors Manrope et JetBrains Mono doivent être installées sur le système pour l\'export.', 'Fonts other than Manrope and JetBrains Mono must be installed on the system for the export.']],
        o: { pkg: 'LightEditorVidz', apt: 'light-editor-vidz', ai: 'light-editor-vidz', icon: 512 },
      },
    };
