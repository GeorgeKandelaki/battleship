export function getMinMax(...arrays) {
    const correctedPositions = [];

    for (let i = 0; i < arrays.length; i++) {
        const curArray = arrays[i];

        const start = Math.min(...curArray);
        const end = Math.max(...curArray);

        correctedPositions.push([start, end]);
    }

    return correctedPositions;
}
