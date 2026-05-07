# Spotify Clone

A **static front‑end clone** of a Spotify‑like music web app built with plain HTML, CSS and vanilla JavaScript.  The project showcases a responsive UI, playlist handling, search, and a simple login/signup flow – all without any backend.

---

## 📑 Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Demo](#demo)
4. [Setup & Run Locally](#setup--run-locally)
5. [Project Structure](#project-structure)
6. [Git Tips – Large Media Files](#git-tips--large-media-files)
7. [Contributing](#contributing)
8. [License](#license)

---

## ✨ Features
- **Home page** with a hero banner and navigation.
- **Search bar** that filters songs, artists and playlists in real‑time.
- **Playlist pages** (`playlist.html`) with individual track listings.
- **Artist pages** (e.g., `artist01.html`, `artist2.html`, …) displaying discography.
- **Login / Signup** mock screens that demonstrate UI flow.
- **Responsive layout** using CSS Grid/Flexbox and glass‑morphism styling.
- **Media preview** – all audio files are stored locally (`*.mp3`).

---

## 🛠️ Tech Stack
- **HTML5** – semantic markup for pages.
- **Vanilla CSS** – custom design, gradients, glass‑morphism, dark‑mode ready.
- **JavaScript (ES6+)** – DOM manipulation, event handling, simple state management.
- **Static assets** – images (`.jpeg/.png`) and audio (`.mp3`).

---

## 🎬 Demo
Open `index.html` in any modern browser (Chrome, Edge, Firefox). No server is required; the app runs completely client‑side.

---

## ⚙️ Setup & Run Locally
1. **Clone the repository** (or copy the folder) to your machine.
2. Open the project folder in Explorer.
3. Double‑click `index.html` (or run `npm -g serve` and point it at the folder if you prefer a local server).
4. Browse the various pages – `artistlist.html`, `playlist.html`, `search.html`, etc.

> **Tip:** Because the project uses relative URLs for assets, keep the folder structure intact.

---

## 📁 Project Structure
```
PROJECT SPOTIFY/
├─ index.html                # Landing page
├─ home.html                # Main dashboard after login
├─ login.html / signup.html # Mock auth pages
├─ artistlist.html          # List of all artists
├─ artist01.html … artist5.html
├─ playlist.html            # Playlist view
├─ album.html / albumcommon.html
├─ chartcommon.html, chartcommon.css
├─ css files/               # All stylesheet files
│   ├─ albumcommon.css
│   ├─ artist01.css …
│   └─ playlistcommon.css
├─ images/                  # UI icons, album covers, etc.
├─ songfolder/              # Optional grouped audio files
├─ *.mp3                    # Music tracks (large files)
└─ java.js                  # Core JavaScript for navigation & UI logic
```

---

## 📦 Git Tips – Large Media Files
The repository contains many MP3 files (~100 MB+) and high‑resolution images. To keep the repo lightweight:
1. Create a `.gitignore` at the repository root with:
```gitignore
# Media assets
*.mp3
*.wav
*.flac
# Large images (optional)
*.png
*.jpeg
```
2. Commit the `.gitignore` **before** adding the first commit that includes media.
3. If you still want the media in the repo, consider using **Git LFS** for those files.

---

## 🤝 Contributing
Feel free to fork the project and submit pull requests:
- Fix UI bugs or improve the styling.
- Add new pages (e.g., “Albums” or “Favorites”).
- Refactor the JavaScript into modules.
- Replace static audio with streaming APIs.

Please keep the original folder layout and update the README if you add major features.

---

## 📄 License
This project is released under the **MIT License** – you may use, modify, and distribute it freely.
