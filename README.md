# TypeFlow App Prototype

TypeFlow is a typing-speed training app prototype focused on helping people type faster with practical, real-world exercises.

This version is an early **Next.js + TypeScript prototype** with:
- a landing hero section
- a typing test area
- live WPM, accuracy, and progress stats
- a progress snapshot panel
- an adaptive drill preview

---

## Project status

Current stage: **prototype / MVP scaffold**

Implemented right now:
- Next.js app setup
- TypeScript project structure
- dark UI prototype
- basic typing interaction
- simple WPM / accuracy / progress calculation

Not implemented yet:
- authentication
- backend/database
- persistent progress storage
- real adaptive drill engine
- user accounts
- production-ready testing

---

## Tech stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **UI:** React 18
- **Styling:** global CSS

---

## Project structure

```text
typing-app-prototype/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ plans/
│  └─ typing-app-plan.json
├─ src/
│  ├─ css/
│  ├─ js/
│  ├─ index.html
│  └─ styles.css
├─ .eslintrc.json
├─ .gitignore
├─ next-env.d.ts
├─ next.config.js
├─ package.json
├─ README.md
└─ tsconfig.json
```

Notes:
- The **main active app** is the **Next.js app** under `app/`
- The `src/` folder contains earlier prototype files from the initial visual mockup stage

---

## Requirements

Before running the project, make sure you have:

- **Node.js** installed, preferably **v18 or later**
- **npm** installed
- optional: **git** for version control

Check versions:

```bash
node -v
npm -v
git --version
```

---

## Setup instructions

### 1. Open terminal in the project folder

Project path:

```text
C:\Users\WDAGUtilityAccount\.openclaw\workspace\typing-app-prototype
```

Example:

```bash
cd C:\Users\WDAGUtilityAccount\.openclaw\workspace\typing-app-prototype
```

---

### 2. Install dependencies

Run:

```bash
npm install
```

This installs all required packages from `package.json`.

---

### 3. Start the development server

Run:

```bash
npm run dev
```

Once the server starts, open:

```text
http://localhost:3000
```

If port 3000 is already in use, Next.js may automatically use another port such as 3001.

---

## Available scripts

### Start development server

```bash
npm run dev
```

Runs the app in development mode.

### Build for production

```bash
npm run build
```

Creates an optimized production build.

### Start production server

```bash
npm run start
```

Runs the app from the production build.

### Run linting

```bash
npm run lint
```

Checks the project for linting issues.

---

## How to use the prototype

1. Open the app in browser
2. Click **Start Typing Test**
3. Begin typing the displayed sample text
4. Watch the live stats update:
   - **WPM**
   - **Accuracy**
   - **Progress**
5. Review the mock stats and adaptive drill suggestions

---

## Troubleshooting

### `npm install` fails
Try:

```bash
npm cache clean --force
npm install
```

If it still fails, check your Node.js version.

### `npm run dev` fails
Possible causes:
- dependencies not installed
- wrong Node.js version
- corrupted `node_modules`

Try:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

On Windows PowerShell, remove files with:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

### Port already in use
If port 3000 is busy, Next.js may switch ports automatically.
Check the terminal output and open the port shown there.

---

## Git workflow

This project has been initialized as its **own separate git repository**.

Remote origin:

```text
https://github.com/ymdarum/typing-app-prototype.git
```

Useful commands:

```bash
git status
git add .
git commit -m "your message"
git push
```

---

## Development roadmap

Current tracked milestones are in:

```text
plans/typing-app-plan.json
```

Current focus:
- improve landing page and layout
- upgrade typing logic MVP
- improve stats and adaptive drill experience

Suggested next steps:
- add real typing session timing
- improve per-character accuracy feedback
- split UI into reusable React components
- add local persistence for practice history
- add backend and authentication later

---

## Important note

There are currently **two prototype layers** in this repository:

1. **Current proper app setup:** `app/` (this is the one to use)
2. **Older static prototype files:** `src/`

If you are continuing development, focus on the **Next.js app** in `app/`.

---

## Quick start summary

```bash
cd C:\Users\WDAGUtilityAccount\.openclaw\workspace\typing-app-prototype
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## License

Currently private / internal prototype unless you decide otherwise.
