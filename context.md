# Project Context

- **Goal**: Premium cinematic portfolio themed around Tron Legacy with seamless client-side transitions, consistent motion presets (Framer Motion + Tailwind), magnetic interactions, progressive media, and smooth Lenis scrolling.
- **Themes**: Two palettes (Tron Legacy & Tron Ares) defined in `src/context/ThemeProvider.jsx` with gradients, glows, and typography updates via Rajdhani/Audiowide.
- **Selection Styling**: `src/index.css` binds `*::selection` (and `::-moz-selection`) colors to theme CSS variables so highlighted text matches the active palette across the entire site (Legacy cyan, Ares ember).
- **Animations**: Unified motion presets in `src/lib/motionPresets.js`; page transitions, staggered reveals, parallax hero layers, atmospheric background (`AmbientBackground.jsx`), and hover physics are all reusable.
- **UI Toolkit**: Sections (Hero, About, Skills, Projects, Contact) use `SectionShell`, `SectionHeading`, `GlowCard`, `ProgressiveImage`, and magnetic buttons to ensure consistent spacing, typography, and animation language.
- **Theme Switch**: Visible pill control centered at the top of the viewport toggles Legacy/Ares modes with smooth sliding highlight (`ThemeToggle.jsx`), persisting preference via localStorage.
- **Novels Experience**: `src/pages/Novels.jsx` tracks per-novel completion with bold checkmark icons, enforces true 100% scroll-before-complete guards so switching chapters does not auto-check, and supports bookmarking/resuming via `localStorage` (`novel-progress`, `novel-bookmarks`) with a single toggle-style bookmark icon (in-reader button highlights/fills on save, library badge resumes directly) while opening a novel always starts at Chapter 1 unless resumed explicitly.

Run `npm run dev` for development and `npm run build` for production verification.

