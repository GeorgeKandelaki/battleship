import { shoot, startGame, sinkShip, determineIfGameHasEnded } from "./engine.js";
import { GRID_ROWS, GRID_COLS } from "./constants.js";

const ships = {
    1: { name: "destroyer", type: 1, squares: 2 },
    2: { name: "cruiser", type: 2, squares: 3 },
    3: { name: "battleship", type: 3, squares: 4 },
};

const blockTypes = {
    0: { name: "empty", id: 0, squares: 1 },
    4: { name: "used_space_empty", id: 4, squares: 1 },
    5: { name: "used_space_ship", id: 5, squares: 1 },
    6: { name: "sunk", id: 6, squares: "Same amount of the squares as the sunken ship has" },
};

let grid = [];
let shipPositions = [];
let sunkenShips = [];

const container = document.getElementById("root");

function updateDOM(start, end) {
    const [x, y] = start;
    const [x1, y1] = end;

    const startX = Math.min(x, x1);
    const endX = Math.max(x, x1);
    const startY = Math.min(y, y1);
    const endY = Math.max(y, y1);

    const makeId = (a, b) => `${a}_${b}`;

    if (x != x1) {
        for (let i = startX; i <= endX; i++) {
            const curBlockId = makeId(i, startY);
            const el = document.getElementById(curBlockId);

            // update DOM
            updateHitEl(el, "sunk", true);
        }
    }

    if (y != y1) {
        for (let i = startY; i <= endY; i++) {
            const curBlockId = makeId(startX, i);
            const el = document.getElementById(curBlockId);

            // update DOM
            updateHitEl(el, "sunk", true);
        }
    }

    return null;
}

function checkIfShipSunk(ships, grid) {
    for (let i = 0; i < ships.length; i++) {
        const { pos, type } = ships[i];

        const isSunk = sinkShip(pos[0], pos[1], type, grid);

        if (!isSunk) continue;

        sunkenShips.push(pos);
        updateDOM(pos[0], pos[1]);
    }
}

function renderGrid(grid, clean = false) {
    clean ? (container.innerHTML = " ") : "";

    for (let i = 0; i < grid.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.id = i;

        for (let t = 0; t < grid[i].length; t++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.id = i + "_" + t;

            column.onclick = (e) => {
                const curType = grid[i][t];
                if (determineIfGameHasEnded(Object.values(ships), sunkenShips)) {
                    finishGame();
                    return null;
                }
                if (curType == 5 || curType == 4) return;
                const [isHit, updatedGrid] = shoot(i, t, grid);

                if (curType != 6) updateHitEl(e.target, isHit);
                checkIfShipSunk(shipPositions, grid);
            };

            row.appendChild(column);
        }

        container.appendChild(row);
    }

    return null;
}

function updateHitEl(el, hit, clear = false) {
    el.className = "column";

    if (hit) el.classList.add("hit");
    else el.classList.add("clicked");

    if (hit == "sunk") el.classList.add("sunk");
}

function main(reset = false) {
    const output = startGame(GRID_ROWS, GRID_COLS, ships);
    grid = output[0];
    shipPositions = output[1];

    const initialGrid = [...grid];

    renderGrid(grid, reset);
}

function playAgain() {
    sunkenShips = [];
    main(true);
}

function finishGame() {
    const div = document.createElement("div");
    const playAgainButton = document.createElement("button");
    playAgainButton.innerText = "Play Again";
    playAgainButton.onclick = (e) => {
        playAgain();
    };

    div.innerHTML = "<p>Game has finished.</p>";
    div.appendChild(playAgainButton);

    container.appendChild(div);
}

main();
