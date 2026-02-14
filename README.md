# mdaffxn.github.io

Welcome to **mdaffxn.github.io** — a simple mini game arcade website.

## What this project is
This is a static website built with:
- HTML (`index.html`)
- CSS (`styles.css`)
- JavaScript (`script.js`)

The site includes 20 mini game cards, a score counter, and games played tracking.

## Project files
- `index.html` — page structure, title, sections, and download buttons
- `styles.css` — layout, colors, responsive design, and component styling
- `script.js` — mini game generation and play logic
- `README.md` — this documentation

## Features
- 20 mini games shown as clickable cards
- Random win/loss outcomes on each play
- Live scoreboard updates:
  - Total score
  - Games played
- Download buttons on the page for:
  - `index.html`
  - `styles.css`
  - `script.js`

## How to run locally
1. Open a terminal in the project folder.
2. Run:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and go to:
   `http://localhost:8000`

## How to save website files to your computer
When the site is open in your browser, use the **Download** buttons at the top of the page to save:
- `index.html`
- `styles.css`
- `script.js`

## How to publish on GitHub Pages
1. Create a GitHub repository (example: `mdaffxn.github.io`).
2. Upload these files to the repo root:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open GitHub repo settings:
   - **Settings → Pages**
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Save and wait 1–2 minutes for deployment.

## Notes
- This is a frontend-only static site; no backend/server code is required for hosting.
- Any static hosting provider can run this site (GitHub Pages, Netlify, Vercel, etc.).

## License
You can use and modify this project freely for personal learning and portfolio use.
