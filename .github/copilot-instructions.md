# Copilot / AI agent quick instructions

Purpose: Give an AI coding agent the minimal, actionable context to be productive in this Expo + React Native repo.

- **Project type:** Expo-managed React Native app using `expo-router` (folder-based routing). Entry: `expo-router/entry` (see `package.json`).
- **Routing:** Screens live in the `app/` folder. `app/_layout.tsx` defines the root layout and uses `Stack` from `expo-router`.
- **Import alias:** `@/*` is mapped to project root via `tsconfig.json`. Example: `import Cover from "@/components/week6/Cover"`.
- **Components:** Reusable UI lives under `components/`; many are grouped by week (e.g., `components/week6/*`). Screens compose these components from `app/*.tsx`.
- **Assets:** Static images are under `assets/` and typically imported with `require("@/assets/...")` (see `components/week6/Cover.tsx`).

Key commands (run from repo root):

```bash
npm run start     # starts expo
npm run android   # open on Android
npm run ios       # open on iOS
npm run web       # run web build/dev
npm run reset-project  # custom reset helper (scripts/reset-project.js)
npm run lint      # runs expo lint
```

Important patterns and conventions (do not change without confirmation):

- Use functional default exports for components/screens. Example: `export default function Home(){...}` in `app/home.tsx`.
- Use `Link` from `expo-router` for navigation inside screens (see `app/index.tsx`). Prefer folder-based routes rather than manual stack setup except in `app/_layout.tsx`.
- Styling: mostly inline styles + `StyleSheet.create` for small screens (follow existing files for examples).
- Typescript: `strict: true` is enabled in `tsconfig.json` — keep type-safety and avoid `any` unless temporary.
- Native modules: the project uses `react-native-reanimated`, `react-native-svg`, and `react-native-chart-kit`. Be careful when adding native deps — follow Expo compatibility.

Files to check when making changes:

- `package.json` — scripts and dependencies
- `tsconfig.json` — path aliases (`@/*`)
- `app/_layout.tsx` and other files in `app/` — routing and top-level screens
- `components/` — reusable UI and week-based groups
- `assets/` — images used with `require()`

Common pitfalls and tips for PRs:

- Do not change `main` in `package.json` (it's set to `expo-router/entry`).
- When adding images, use `require("@/assets/...")` to work across native and web.
- When introducing native modules, confirm Expo SDK compatibility (this app uses Expo SDK ~54).
- Run `npm run lint` before opening PRs.

If anything above is ambiguous or you want more examples (routing, component conventions, or build quirks), ask and I'll provide targeted snippets from the codebase.
