---
name: OctoView Developer Console
colors:
  surface: '#0b141c'
  surface-dim: '#0b141c'
  surface-bright: '#313a43'
  surface-container-lowest: '#060f16'
  surface-container-low: '#141c24'
  surface-container: '#182028'
  surface-container-high: '#222b33'
  surface-container-highest: '#2d363e'
  on-surface: '#dae3ee'
  on-surface-variant: '#c1c6d6'
  inverse-surface: '#dae3ee'
  inverse-on-surface: '#29313a'
  outline: '#8b909f'
  outline-variant: '#414754'
  surface-tint: '#acc7ff'
  primary: '#acc7ff'
  on-primary: '#002f68'
  primary-container: '#498fff'
  on-primary-container: '#00285b'
  inverse-primary: '#005bbf'
  secondary: '#7bdb80'
  on-secondary: '#00390e'
  secondary-container: '#007124'
  on-secondary-container: '#91f294'
  tertiary: '#d5bbff'
  on-tertiary: '#41008b'
  tertiary-container: '#a875fc'
  on-tertiary-container: '#39007a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004492'
  secondary-fixed: '#97f999'
  secondary-fixed-dim: '#7bdb80'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#005319'
  tertiary-fixed: '#ecdcff'
  tertiary-fixed-dim: '#d5bbff'
  on-tertiary-fixed: '#270058'
  on-tertiary-fixed-variant: '#5a21ab'
  background: '#0b141c'
  on-background: '#dae3ee'
  surface-variant: '#2d363e'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-metric:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-precision, developer-native aesthetic tuned for rapid talent evaluation and profile reconnaissance. It draws inspiration from GitHub’s Primer system while advancing towards an ultra-refined, futuristic command-center experience. 

The aesthetic is grounded in **Technical Minimalism** paired with **Precision Glass and Low-Contrast Luminous Accents**. The interface evokes clarity, speed, and technical authority, ensuring code metrics, commit telemetry, and repository trees feel dense yet uncluttered. Surfaces prioritize high-contrast readability against obsidian depths, utilizing razor-thin edge illumination rather than heavy dropshadows to establish structure.

## Colors

The palette relies on structural darks paired with functional terminal accents:

- **Base Surfaces**: The primary canvas sits at `#0d1117` (Deep Obsidian Canvas), stepped up to `#161b22` (Elevated Panel Base) and `#21262d` (Interactive/Header Fill).
- **Primary (`#2f81f7`)**: GitHub Electric Blue. Deployed strictly for hyper-focused interactive states, primary actions, and anchor links.
- **Secondary (`#238636`)**: GitHub Terminal Emerald. Dedicated to active states, commit calendar heatmaps, open pull requests, and positive status telemetry.
- **Tertiary (`#a371f7`)**: Deep Indigo/Violet. Used sparingly for sponsor tiers, merged state indicators, and subtle radial gradient backdrops behind the profile hero card.
- **Neutral (`#8b949e`)**: Muted slate tone for metadata, non-active icons, and secondary labels.
- **Borders & Seams**: Outlines utilize `#30363d` in resting state, transitioning to `#388bfd` at 40% alpha with a subtle 4px radial glow on focus.

## Typography

The typographic hierarchy implements a triple-role strategy:

1. **Display & Structural Headings (Geist)**: Engineered for geometric clarity, dense character fit, and seamless alignment with engineering dashboards.
2. **Body & Prose (Inter)**: Provides pristine readability across bios, commit messages, and readmes under strict dark-mode conditions without light-bleed fatigue.
3. **Metrics & Monospace (JetBrains Mono)**: Handles all developer tags, user handles (`@username`), commit hashes, language percentages, and counter statistics to anchor technical precision.

## Layout & Spacing

The layout is built upon an asymmetric 12-column fixed-max-width grid (capped at `1280px` centered):

- **Desktop (>= 1024px)**: Uses a persistent 4-column profile anchor rail on the left and an 8-column data viewport on the right (repositories, organizations, activity heatmaps, pinned gists).
- **Tablet (768px – 1023px)**: Reflows to an 8-column stacked grid with 1rem gutters and full-width card modules.
- **Mobile (< 768px)**: Converts to a single-column linear feed with `margin-mobile` padding (`1rem`) and unified edge-to-edge modular cards.

Vertical rhythms stick to an absolute 4px/8px micro-grid. Card interiors maintain a strict `1.25rem` (`20px`) inset padding to prevent layout crowding.

## Elevation & Depth

Visual hierarchy is maintained through **Tonal Stacking and Specular Outlines**, rejecting heavy, muddy drop-shadows:

- **Surface 0 (Backdrop)**: `#0d1117` base.
- **Surface 1 (Cards, Modules)**: `#161b22` bounded by a 1px border of `#30363d`.
- **Surface 2 (Interactive Elements, Tooltips, Menus)**: `#21262d` bounded by a 1px border of `#484f58`.
- **Active Luminous Edge**: Key interactive elements and hovered repo cards gain a 1px border of `#388bfd` supplemented by an ambient outer glow: `box-shadow: 0 0 12px -2px rgba(56, 139, 253, 0.25)`.
- **Background Ambiance**: A fixed radial glow (`radial-gradient(circle at 50% 0%, rgba(47, 129, 247, 0.08) 0%, transparent 60%)`) sits behind the main search input to grant subtle visual depth.

## Shapes

The interface implements a restrained `Soft` (Option 1) geometric boundary:

- **Avatars**: Circular (`9999px` border radius) with a 2px offset border (`#30363d`) to prevent dark-mode blending.
- **Cards & Data Containers**: `rounded-md` (`6px` / `0.375rem`) providing a utilitarian, terminal-adjacent feel.
- **Inputs & Action Buttons**: `rounded-md` (`6px`), aligning with Primer conventions.
- **Badges, Language Tags & Chips**: `rounded-full` (`9999px`) to create clear geometric contrast against angular data containers.

## Components

### Buttons
- **Primary Search / Action**: `#238636` background, `#ffffff` text, 1px border of `rgba(240, 246, 252, 0.1)`. Hover state triggers `#2ea043`.
- **Secondary (Follow / Open Repo)**: `#21262d` background, `#c9d1d9` text, 1px border of `#30363d`. Hover elevates to `#30363d` with `#f0f6fc` text.
- **Ghost / Icon Actions**: Transparent background, `#8b949e` fill, transitions to `#21262d` on hover with `#58a6ff` icon accent.

### Input Fields
- **Username Command Bar**: `#0d1117` inset, `1px solid #30363d`, `font-family: JetBrains Mono`. Leading icon (`octicon-search`) at `#8b949e`. 
- **Focus State**: Border transitions to `#2f81f7` alongside a low-spread outer halo (`0 0 0 3px rgba(47, 129, 247, 0.3)`).

### Repository Cards
- Surface: `#161b22` with a 1px border of `#30363d`. 
- Internal Layout: Flex-column featuring an upper anchor link in Geist Medium (`#58a6ff`), description in Inter Regular (`#8b949e`), and bottom metadata row (language indicator dot with language hex, star counter with JetBrains Mono, fork counter).
- Hover: 1px border shifts to `#8b949e` with a micro-translation of `-1px` on the Y-axis.

### Badges & Language Chips
- Minimalist indicators: Height of 20px, font scale `code-sm`, padding `0 8px`.
- Outlined variants: `rgba(110, 118, 129, 0.2)` background with matching 1px border and glowing dot indicator matching language standard colors (e.g., Python `#3572A5`, TypeScript `#3178C6`, Rust `#dea584`).

### Skeleton Loaders
- Rendered using `#161b22` base surfaces overlaid with an animated linear-gradient shimmer:
  `linear-gradient(90deg, rgba(22, 27, 34, 0) 0%, rgba(48, 54, 61, 0.4) 50%, rgba(22, 27, 34, 0) 100%)`.
- Shimmer animates at 1.4s ease-in-out infinitely.

### Heatmap Matrix (Contribution Graph)
- Sub-grid of 7 rows with 10px rounded squares (`2px` border radius).
- Levels: Level 0 (`#161b22`), Level 1 (`#0e4429`), Level 2 (`#006d32`), Level 3 (`#26a641`), Level 4 (`#39d353`).
- Tooltip: `#21262d` popover with 1px border of `#484f58` and text in `code-sm`.