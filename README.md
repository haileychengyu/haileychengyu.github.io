# Personalweb ChatGPT — Autobiographical Archive

A vanilla HTML/CSS/JavaScript single-page environment for Hailey Chengyu Huang. The site is an autobiographical archive disguised as a navigable landscape: visitors enter through a fogged threshold, consult a folded archival map, and move through rooms of evidence rather than conventional portfolio sections.

## World Rules Implemented

- No primary scrolling navigation or portfolio grid.
- Room traversal is controlled by an internal JavaScript state machine.
- The archive map tracks discovered rooms with persistent `localStorage` memory.
- Cursor movement leaves fading graphite traces on the paper space.
- Hover states sharpen archival objects and reveal attentional captions without modal lightboxes.
- Placeholder asset names are intentionally detailed so uploaded files can replace them directly.

## Structure

```text
index.html
css/
  style.css
  typography.css
  world.css
  rooms.css
  animation.css
js/
  app.js
  sceneManager.js
  archiveMap.js
  transition.js
  cursor.js
  roomLights.js
  roomVision.js
  roomManuscript.js
  roomEnlarger.js
  roomMisc.js
assets/
  paper/
  grain/
  tape/
  photos/
  icons/
```

## Asset Placeholders Awaiting Upload

Examples include:

- `assets/photos/threshold-horse-in-fog.jpg`
- `assets/photos/roomlights-bg.jpg`
- `assets/photos/roomenlarger-project1-pic1.jpeg`
- `assets/paper/folded-map-paper.jpg`
- `assets/grain/dust-grain-overlay.png`
- `assets/grain/transition-fog-grain.png`

Missing image files are expected during the placeholder phase; browsers will show alt text/background colors until assets are uploaded.

## Local Preview

Because the JavaScript uses ES modules, serve the repository from a local static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
