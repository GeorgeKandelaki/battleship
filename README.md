# Battleship (Single-Player Engine-Driven Version)

A single-player Battleship game built with **vanilla JavaScript**, featuring a cleanly separated **game engine** and **DOM UI layer**.  
The engine handles shooting, ship placement, hit detection, and sinking logic, while the UI simply reflects the engine's state.

This project focuses on **algorithmic logic, clean architecture, and custom state management** — no frameworks, no libraries.

---

## 🎮 Features

-   Fully generated game board
-   Random ship placement (Destroyer, Cruiser, Battleship)
-   Custom engine with:
    -   Shooting logic (`shoot`)
    -   Ship sinking detection (`shipHasSunken`, `sinkShip`)
    -   Grid mutation + state tracking
-   Visual feedback for:
    -   Misses
    -   Hits
    -   Sunk ships (full ship highlighted)
-   Strict separation of:
    -   **Engine logic**
    -   **DOM rendering**
-   Highly readable and maintainable code structure

---

## 📁 Project Structure

```bash
/battleship
│
├── engine.js # Core game logic (shooting, sinking, placing)
├── index.js # DOM rendering + user interactions
├── constants.js # Board settings
├── styles.css # Game styling
└── index.html # Root HTML file
```

---

## 🚀 How to Play

1. Open the project in your browser or live server.
2. Click any tile on the grid.
3. The engine checks:
    - Hit or miss
    - Whether that hit caused a ship to sink
4. UI updates automatically to reflect the state.

---

## 🧠 What This Project Demonstrates

-   Event-driven programming in JavaScript
-   Clean separation of concerns
-   Custom game engine design
-   Coordinate geometry (start/end ship positions)
-   DOM updates using computed positions
-   Thoughtful mutation-based state design
-   Readable, DRY, and beginner-friendly logic

---

## 📌 To-Do (Next Improvements)

These will elevate the game from **slightly advanced → intermediate**:

-   [X] **Ship overlap prevention** during random generation
-   [ ] **Turn-based UX flow** (disable clicks after win or add next-turn UI)
-   [ ] **Add simple BOT mode**
-   [ ] **Refactor rendering using a single render function**

---

## 📜 License

MIT License — feel free to fork, modify, and build on top.

---

## 👤 Author

**George Kandelaki**  
Built with ❤️ using raw JavaScript fundamentals.
