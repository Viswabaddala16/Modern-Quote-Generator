# 💡 Modern AI Quote Generator

A sleek, responsive, and high-performance quote discovery app built with **React 19**, **Vite**, and **Tailwind CSS v4**. This project fetches live data from an external API and delivers it through a premium Glassmorphism UI.

![React](img.shields.io)
![Tailwind](img.shields.io)
![Vite](img.shields.io)

## ✨ Key Features

-   **Live API Integration**: Fetches real-time quotes from the [DummyJSON API](dummyjson.com).
-   **Stable Layout**: Uses fixed aspect-ratio logic to prevent "layout shift" when switching between short and long quotes.
-   **Glassmorphism UI**: High-end design featuring backdrop blurs, subtle borders, and 2025-standard gradients.
-   **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
-   **Lazy Initialization**: Efficiently handles initial state to provide a seamless first-paint experience.

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js v22.12.0 or higher** installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone github.com
    cd my-quote-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🛠️ Tech Stack

-   **Frontend:** React 19 (Functional Components & Hooks)
-   **Styling:** Tailwind CSS v4 (Modern Engine)
-   **Build Tool:** Vite 7
-   **API:** [DummyJSON](dummyjson.com)

## 📂 Project Structure

```text
src/
├── App.jsx        # Main application logic & API integration
├── index.css      # Tailwind v4 entry point
└── main.jsx       # React DOM rendering
