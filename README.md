# PMP Study App

A complete, offline-capable study app for the PMI **PMP** exam. Built to help you pass.

## Features
- **Dashboard** — overall accuracy + **per-domain mastery tracker** that tells you what to focus on next.
- **Study Plan** — a 6-day Mon→Sat countdown plan.
- **Learn** — full study guide grouped by exam domain (People, Process, Agile/Hybrid, Business Environment).
- **Flashcards** — flip, shuffle, mark known; filtered by topic; keyboard navigation.
- **Practice Quiz** — scenario questions with explanations, timed mode, by domain; results feed your mastery tracker.
- **Formulas** — full EVM cheat sheet + a live earned-value calculator.
- **Mindset** — the PMI "right answer" thinking that wins situational questions.

Progress is saved locally in your browser (localStorage).

## Run locally
```bash
npm start
```
Then open http://localhost:3000

No dependencies, no build step — just Node 18+.

## Deploy (Railway)
This is a standard Node app. Railway auto-detects it and runs `npm start`, binding to `process.env.PORT`.
