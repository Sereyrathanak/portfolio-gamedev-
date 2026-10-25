---
name: Black Box Playback
description: A portrait-led Unity workshop that stages verified portfolio work as evidence.
colors:
  stage-black: "#0b0c0d"
  stage-raised: "#141617"
  projector-white: "#e9e8e3"
  evidence-paper: "#d5d2c9"
  equipment-ink: "#111314"
  steel: "#6b6e70"
  steel-label: "#a9aba8"
  safety-red: "#ef3b32"
  signal-yellow: "#e7c62c"
  axis-blue: "#4f83ce"
  axis-green: "#76b24a"
  portrait-field: "#243957"
  rule-dark: "rgba(233, 232, 227, 0.2)"
  rule-light: "rgba(17, 19, 20, 0.22)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(42px, 6.2vw, 92px)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(42px, 4vw, 64px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  body:
    fontFamily: "Atkinson Hyperlegible, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  square: "0px"
spacing:
  tight: "8px"
  compact: "12px"
  standard: "24px"
  roomy: "48px"
components:
  button-primary:
    backgroundColor: "{colors.safety-red}"
    textColor: "{colors.equipment-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "0 22px"
    height: "58px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.projector-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "58px"
  project-tab:
    backgroundColor: "transparent"
    textColor: "{colors.equipment-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "20px 26px"
  roadmap-card:
    backgroundColor: "{colors.stage-raised}"
    textColor: "{colors.projector-white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "28px"
---

# Design System: Black Box Playback

## Overview

**Creative North Star: "The Unity Workshop on a Black-Box Stage"**

The portfolio behaves like a working review room for a game developer. Rith Sereyrathanak’s supplied portrait establishes the human maker before the page moves into the current Unity build; the theatrical stage remains the frame, but the person and the evidence now lead. Project media is honest: FirstGame uses the supplied Unity gameplay capture, with the code-native forest scene reserved as a load-failure fallback.

The page alternates deep stage-black fields with warm projector-white evidence surfaces. Barlow Condensed gives headings and controls the compressed authority of show cards; Atkinson Hyperlegible carries factual copy. Scene grids, crop marks, ruled records, transform-axis colors, and hard rectangular controls add Unity-workshop cues without copying Unity Editor chrome.

**Key Characteristics:**

- Portrait-led hero with FirstGame and GitHub actions before secondary metadata.
- Stage black, projector white, safety red, and signal yellow as the primary visual vocabulary.
- Square controls, crop marks, ruled records, and restrained XYZ-axis markers.
- A supplied FirstGame gameplay capture framed as the dominant project evidence.
- Supporting software and future work separated by status and evidence level.

## Colors

The palette is theatrical near-monochrome with operational red and yellow signals. Axis blue and green are reserved for transform cues; the portrait field is an image-grounding color, not a decorative brand accent.

### Primary

- **Safety Red** (#ef3b32): Primary action, live state, and terse annotation.
- **Signal Yellow** (#e7c62c): Keyboard focus, selected state, and energized roadmap cues.

### Secondary

- **Transform Blue** (#4f83ce): The Z-axis marker in the workshop scene.
- **Transform Green** (#76b24a): The Y-axis marker in the workshop scene.

### Neutral

- **Stage Black** (#0b0c0d): Page ground and theatrical fields.
- **Raised Stage** (#141617): Tonal lift for records and dense build panels.
- **Projector White** (#e9e8e3): Light evidence fields and primary light text.
- **Evidence Paper** (#d5d2c9): Secondary light-field material.
- **Equipment Ink** (#111314): Text on light surfaces and dark action text.
- **Steel / Steel Label** (#6b6e70 / #a9aba8): Hardware and metadata.
- **Portrait Field** (#243957): Stable background tint behind the supplied portrait.
- **Dark / Light Rules**: Thin dividers that preserve the equipment-ledger character.

**The Two-Signal Rule.** Safety red means action or annotation; signal yellow means focus, selection, or an energized state. Axis colors never replace either signal.

## Typography

**Display Font:** Barlow Condensed (with sans-serif fallback)  
**Body Font:** Atkinson Hyperlegible (with sans-serif fallback)

**Character:** The condensed face reads like a stage placard and build label. The humanist body face keeps project facts readable at recruiter-scanning speed.

### Hierarchy

- **Display** (800, fluid 42–92px, 0.88 line-height): Hero statement and section declarations.
- **Headline** (800, fluid 42–64px, 0.9 line-height): FirstGame and project record titles.
- **Title** (700, 22px, 1 line-height): Project names, status-adjacent headings, and action labels.
- **Body** (400, 15–18px, 1.48–1.68 line-height): Introduction, summaries, and evidence copy constrained to readable measures.
- **Label** (600, 10–13px, 1 line-height, 0.08–0.12em tracking, uppercase): Navigation, status, indices, controls, and technical metadata.

**The Condensed-Control Rule.** Use Barlow Condensed for interactive labels, indices, and headings; reserve Atkinson Hyperlegible for sentences and factual evidence.

## Layout

The opening composition is a two-column portrait hero: a responsive crop of the supplied portrait sits left, while Rith’s name, Unity positioning, concise introduction, FirstGame summary, and two actions sit right on desktop. A sticky 72px equipment header keeps navigation visible. The current Unity build follows with a large supplied gameplay capture and a factual record.

The shared shell is capped at 1320px with fluid gutters. At 1100px the Unity record stacks; at 980px supporting project media and copy stack, the toolkit and about sections become one column, and contact actions become safe full-width rows; at 860px navigation becomes a touch menu; at 560px the hero portrait compresses to a 180px-high crop and the FirstGame summary plus two touch actions remain above the metadata row in the 390 × 844 viewport. Long pages alternate dark stage sections and light evidence sections.

**The First-Viewport Action Rule.** On a 390 × 844 viewport, the portrait, developer positioning, FirstGame summary, and complete primary action appear before secondary metadata.

**The Media-Truth Rule.** Supplied gameplay imagery is labeled as a capture; any code-native fallback remains clearly described as representative.

## Elevation & Depth

The system is flat and ruled within content fields. Depth is reserved for the portrait, hero media housing, and contact/action emphasis through soft ambient shadows; no component uses a zero-blur offset shadow. Motion is one authored horizontal wipe between selected software records, with short color responses and complete reduced-motion support.

### Shadow Vocabulary

- **Portrait ambient:** A soft 0 22px 54px rgba(0,0,0,.48) lift keeps the portrait authoritative without floating it as a card.
- **Evidence separation:** A 0 14px 28px rgba(0,0,0,.58) chassis shadow is reserved for the current build record.
- **Focus:** A 3px signal-yellow outline with 4px offset is the only focus depth cue.

## Shapes

The governing form is the square rectangle (0px radius). Buttons, tabs, records, roadmap cards, portrait framing, and metadata tags use hard edges, thin rules, and crop-mark corners. No pills, glass, neon glow, or rounded reusable containers. SVG is used for crisp supporting geometry; the supplied portrait and gameplay capture remain photographic.

## Components

### Buttons

Primary actions use safety red with equipment-ink text, 58px minimum height, square corners, and condensed uppercase labels. Hover moves to signal yellow; focus uses the global signal-yellow outline. Secondary GitHub actions stay transparent with a steel rule and invert to projector white on hover.

### Project Tabs

Supporting software is selected with semantic tab buttons. The active tab becomes equipment ink with projector-white text and a yellow index; arrow keys, Home, and End change selection while focus remains visible. The content panel transitions with a short horizontal clip-path wipe and exposes the selected record as ordinary HTML.

### Projection Frame

FirstGame’s projection frame is a dark-edged media housing with crop marks, the supplied Unity gameplay image, and the caption “FirstGame · Unity gameplay capture.” The code-native forest platformer scene remains available only if the image fails to load.

### Project Records

The current Unity record pairs the scene with verified facts, keyboard controls, technologies, and a direct repository action. Supporting records pair a product diagram with verified product scope and stack facts. Team-project labels do not invent personal contribution claims.

### Coming Soon Roadmap

Roadmap cards are deliberately separated from current records and carry “Coming soon” or “Not started” language, no repository action, and a short scope statement. The three current directions are Game Development, Mobile Development, and VR Game Capstone.

### Navigation and Contact

Desktop navigation uses uppercase links with a red rule that draws on hover. Below 860px it becomes a full-width touch menu. The contact ledger presents the supplied email, LinkedIn profile, and GitHub profile as three keyboard-accessible rows; empty résumé prompts are absent.

## Do's and Don'ts

### Do:

- **Do** lead with the supplied portrait, Unity positioning, FirstGame summary, and primary action.
- **Do** keep the gameplay-capture caption visible anywhere the FirstGame image appears.
- **Do** use verified repository facts and clearly label supporting team projects.
- **Do** keep future Game Development, Mobile Development, and VR capstone work explicitly planned.
- **Do** preserve keyboard selection, roving tab focus, visible focus, touch targets, and reduced motion.
- **Do** use scene grids and XYZ markers only as measurement/workshop cues.

### Don't:

- **Don't** present the code-native fallback when the supplied gameplay capture is available.
- **Don't** copy Unity Editor chrome or use Unity trademarks as decoration.
- **Don't** invent individual contribution, achievements, progress, or outcomes for team projects or planned work.
- **Don't** add a résumé action until that asset is supplied.
- **Don't** introduce pills, rounded cards, neon gaming clichés, synthetic gameplay screenshots, or excessive HUD ornament.
