export const setupMatrix = (m, n) => {
    const matrix = []
    for (let i = 0; i < m; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push(0)
        }
        matrix.push(row)
    }

    return matrix
}

export const fillMatrix = (matrix, fill) => {
    const diffRows = Math.floor((matrix.length - fill.length) / 2)
    const restRows = (matrix.length - fill.length) % 2
    const diffCols = Math.floor((matrix[0].length - fill[0].length) / 2)
    const restCols = (matrix[0].length - fill[0].length) % 2

    for (let i = diffRows; i < matrix.length - diffRows - restRows; i++) {
        for (let j = diffCols; j < matrix[0].length - diffCols - restCols; j++) {
            matrix[i][j] = fill[i - diffRows][j - diffCols]
        }
    }

    return [...matrix]
}