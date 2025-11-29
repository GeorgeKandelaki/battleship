# Battleship (Single-Player)

A single-player Battleship implementation built with vanilla JavaScript, HTML, and CSS, where the player attempts to sink randomly generated enemy ships. The project focuses on clean game-engine logic, including ship placement, collision detection, hit tracking, and sunk-ship detection.

# 🚀 Features

-   Random ship generation
    Ships are placed automatically with directional logic and safety zones.

-   Ship placement validation
    Ensures ships do not touch or overlap existing ships.

-   Hit, miss & sunk detection
    Clicking a cell reveals whether it’s a hit, miss, or completes sinking a ship.

-   Pure vanilla JavaScript engine
    All logic (placement, shooting, sinking, victory detection) is built without frameworks.

-   Fully interactive UI
    The grid updates visually based on game events:

    -   Miss → red
    -   Hit → yellow
    -   Sunk ship → green
    -   Used space is respected

-   Simple and readable modular structure
    Logic is separated into:
    -   `engine.js` → actual gameplay logic
    -   DOM rendering
    -   Grid + constants
    -   Utilities

# 🧠 How It Works

1. A 8x8 grid is generated.
2. The engine randomly places ships based on size.
3. Each placement respects:

    - Board boundaries
    - No ship overlap
    - No adjacent ships

4. Player clicks on cells to shoot.
5. The engine updates the grid:

    - 4 → miss
    - 5 → hit
    - 6 → sunk ship tiles

6. After each hit, the engine checks whether the whole ship has sunk.
7. Game ends when all ships are destroyed.

# 📁 Tech Stack

-   JavaScript (ES Modules)
-   HTML / CSS
-   Webpack (bundling)

# ▶️ Running the Project

```bash
npm install
npm run watch
```

Then open the `index.html` file in the browser.
