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

export function createGrid(rows = 8, columns = 8) {
    const grid = [];
    for (let i = 0; i < rows; i++) {
        const buffer = [];
        for (let t = 0; t < columns; t++) buffer.push(0);

        grid.push(buffer);
    }

    return grid;
}

// TODO: Implement checking overlapping, if generated ship coordinates intersect;
export function checkOverlap(shipPositions, curShipPos) {}

export function checkBoundariesAndComputeEnd(pos, axis, squares, colsRows, direction) {
    // For checking the boundaries of a ship, and judging from that incrementing or decrementing the num of squares from the given direction
    const end = [...pos];

    // 4. Check if the direction we want to extend our ships length, is out of bounds
    if (pos[axis] - squares < 0) end[axis] = end[axis] + squares - 1;
    else if (pos[axis] + squares > colsRows) end[axis] = end[axis] - (squares - 1);
    else end[axis] = end[axis] + (direction == 0 ? -(squares - 1) : squares - 1);

    return end;
}
export function genPos(rows, columns, squares) {
    const finalPos = [];

    // 1. Gen the random starting placement/position of the ship
    const start = [Math.floor(Math.random() * rows), Math.floor(Math.random() * columns)];

    // 2. Randomly Choose col or row
    // Both col and row have only two different possible directions/path/ways. col: left | right || row: up | down
    const axis = Math.floor(Math.random() * 2);
    const direction = Math.floor(Math.random() * 2);

    // 4. Check if the direction we want to extend our ships length, is out of bounds and return an processed arr
    const end = checkBoundariesAndComputeEnd(start, axis, squares, axis === 0 ? rows : columns, direction);

    // 5. Get the final coords
    finalPos.push(start, end);

    return finalPos;
}

export function placeShip(start, end, type, grid) {
    const [x, y] = start;
    const [x1, y1] = end;

    const [mainX, mainY] = [x > x1 ? x1 : x, y > y1 ? y1 : y];
    const [mainX1, mainY1] = [mainX == x1 ? x : x1, mainY == y1 ? y : y1];

    if (x != x1) {
        for (let i = mainX; i <= mainX1; i++) {
            grid[i][mainY] = type;
        }
    }

    if (y != y1) {
        for (let i = mainY; i <= mainY1; i++) {
            grid[mainX][i] = type;
        }
    }

    return type;
}

export function shipHasSunken(start, end, type, grid) {
    const [x, y] = start;
    const [x1, y1] = end;

    const [mainX, mainY] = [x > x1 ? x1 : x, y > y1 ? y1 : y];
    const [mainX1, mainY1] = [mainX == x1 ? x : x1, mainY == y1 ? y : y1];

    const blocksHit = [];

    if (x != x1) {
        for (let i = mainX; i <= mainX1; i++) {
            if (grid[i][mainY] == 5) blocksHit.push(5);
        }
    }

    if (y != y1) {
        for (let i = mainY; i <= mainY1; i++) {
            if (grid[mainX][i] == 5) blocksHit.push(5);
        }
    }

    return blocksHit.length == ships[type].squares;
}

export function sinkShip(start, end, type, grid) {
    if (!shipHasSunken(start, end, type, grid)) return false;
    placeShip(start, end, 6, grid);

    return true;
}

export function shoot(x, y, grid) {
    const isHit = Boolean(grid[x][y] && grid[x][y] != 4 && grid[x][y] != 5);

    grid[x][y] = isHit ? 5 : 4;

    return [isHit, grid];
}

export function startGame(rows, cols, ships) {
    const grid = createGrid(rows, cols);
    const shipPositions = [];

    for (const [key, value] of Object.entries(ships)) {
        const pos = genPos(rows, cols, value.squares);
        shipPositions.push({ pos: pos, ...value });
        placeShip(pos[0], pos[1], value.type, grid);
    }

    return [grid, shipPositions];
}

export function determineIfGameHasEnded(allShips, sunkenShips) {
    return allShips.length == sunkenShips.length;
}
