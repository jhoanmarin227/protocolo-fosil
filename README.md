# Protocolo Fósil

2D top-down sci-fi horror game made with Phaser. You are the pilot of a cargo ship who lands on a secret lunar base where the army was breeding dinosaurs as weapons. Something went wrong. There are no weapons: hide, stay quiet and find your way back to the ship.

**Status:** in development, working on v0.1 (first playable prototype).

## Story

The full story draft (in Spanish) is in [docs/historia.md](docs/historia.md).

## Tech stack

- [Phaser 4](https://phaser.io/): game engine
- [Vite 8](https://vite.dev/): dev server and build tool
- [ESLint](https://eslint.org/): finds problems in the code
- [Prettier](https://prettier.io/): keeps the code format consistent

## Requirements

- Node.js 20.19+, 22.13+ or 24+
- npm

## Getting started

```bash
git clone https://github.com/jhoanmarin227/protocolo-fosil.git
cd protocolo-fosil
npm install
npm run dev
```

Then open http://localhost:5173 in the browser.

## Scripts

| Command                | What it does                                        |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Starts the game locally and reloads on every change |
| `npm run build`        | Builds the game for production into `dist/`         |
| `npm run preview`      | Serves the production build to test it              |
| `npm run lint`         | Checks the code with ESLint                         |
| `npm run format`       | Formats every file with Prettier                    |
| `npm run format:check` | Checks the format without changing files            |

## Project structure

```
protocolo-fosil/
├── docs/                 Design documents (story, visual style)
├── public/
│   └── assets/
│       ├── images/       Sprites and backgrounds
│       ├── audio/        Music, sound effects and voices
│       └── fonts/        Fonts
├── src/
│   ├── main.js           Entry point
│   ├── config/           Game settings and color palette
│   ├── scenes/           One file per screen (title, levels, game over)
│   ├── entities/         Things that move: player, dinosaurs
│   ├── systems/          Game rules: flashlight, noise
│   └── ui/               On-screen text and indicators
├── index.html            Page that hosts the game
└── vite.config.js        Vite settings
```

## Workflow

- `main`: only finished, released versions. Protected: changes arrive only through pull requests.
- `develop`: where finished tasks are merged and tested together.
- `feature/<issue>-<name>`, `fix/<issue>-<name>`, `docs/<name>`: one branch per task, opened from `develop`.

Every task has an [issue](https://github.com/jhoanmarin227/protocolo-fosil/issues), its own branch and a pull request into `develop`. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`, `style:`).

## Roadmap

- **v0.1, first playable prototype:** one dark room, a flashlight, a raptor that hears you, and an exit. See the [v0.1 milestone](https://github.com/jhoanmarin227/protocolo-fosil/milestone/1).
