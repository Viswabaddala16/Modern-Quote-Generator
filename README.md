## 💡 Modern AI Quote Generator (Hybrid Edition)

A sleek, high-performance quote discovery app built with React 19, Vite 7, and Tailwind CSS v4. This version features a Hybrid Data Engine that intelligently switches between live API data and a custom local database for offline resilience.

# ✨ Key Features

**Hybrid Quote Engine:** Prioritizes live data from the DummyJSON API but automatically switches to a local custom database if the network is unavailable.
Intelligent Non-Repeat Logic: Implements a custom filtering algorithm to ensure the same quote/code snippet never appears twice in a row.

**Resilient UI State:** Features a loading "Chasing Wisdom" state and smooth opacity transitions to handle API latency.

**Glassmorphism Design:** High-end 2026 aesthetics featuring backdrop blurs, subtle borders, and bg-linear-to-br gradients.

**Layout Stability:** min-h-[420px] container logic prevents "jumpy" UI shifts when switching between short and long text snippets.

## 🚀 Getting Started

**Prerequisites**

Ensure you have **Node.js v22.12.0** or higher installed.
Installation

**Clone the repository:**
```bash
git clone (https://github.com/Viswabaddala16/Modern-Quote-Generator)
cd my-quote-generator
```

**Install dependencies:**
```bash
npm install
Use code with caution.

**Run the development server:**
```bash
npm run dev
```

# 🛠️ Tech Stack
Frontend: React 19 (Hooks & Async Fetch Pattern)
Styling: Tailwind CSS v4 (Modern JIT Engine)
Build Tool: Vite 7
API: DummyJSON
Local Storage: Custom quotesData.js architecture

# 📂 Project Structure

```text
src/
├── data/
│   └── quotesData.js   # Custom "Plan B" local database & Reference array
├── App.jsx             # Hybrid logic (API Fetch + Local Filter fallback)
├── index.css           # Tailwind v4 directives
└── main.jsx            # React root entry point
