# Sereyrathanak — Unity game development portfolio

A responsive React portfolio for a software engineering student focused on Unity, C#, and 2D, 3D, and VR game development. The opening screen behaves like a theatrical build review: visitors can switch among three project records, inspect contribution details, and continue into a full project archive.

The `FirstGame` repository is connected as the first project. Missing media and undocumented claims remain deliberately labeled rather than being invented.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

## Personalize the sample

All copy and links live in `src/data.ts`:

1. Add an email address and verify the biography in `src/data.ts`.
2. Replace every pending project field with a specific role, contribution, and lesson.
3. Keep claims specific and accurate; blank links remain visibly disabled.

Replace media under `public/portfolio-assets/` using these stable filenames:

- `portrait.png`
- `project-2d-game.png`
- `project-3d-game.png`
- `project-vr.png`
- `resume.pdf` (optional)

Missing project images automatically fall back to the labeled 2D, 3D, or VR sample scene. No component edits are required when adding real screenshots.

## Interaction and accessibility

- The project cue selector supports pointer, touch, Arrow keys, Home, and End.
- Project details remain semantic and available below the projection.
- Reduced-motion preferences disable the projection-shutter transition.
- Focus indicators, image fallbacks, and mobile navigation are included.

## Publish

GitHub Pages deployment is configured through the existing Vite and GitHub Actions setup. Choose GitHub Actions as the Pages source, then publish only after replacing every visible sample label.
