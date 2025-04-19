const getMatrix = (matrix, i, j) => {
    let x0 = j > 0 ? j - 1 : j
    let x1 = j < matrix[i].length - 1 ? j + 1 : j

    let y0 = i > 0 ? i - 1 : i
    let y1 = i < matrix.length - 1 ? i + 1 : i

    let aux = matrix.slice(y0, y1 + 1)
    aux = aux.map(row => row.slice(x0, x1 + 1))
    return aux
}

const getStateCell = (matrix, state) => {
    matrix[1][1] = 0
    let sum = matrix.map(row => row.reduce((a, b) => a + b))
    sum = sum.reduce((a, b) => a + b)

    if (state === 1) {
        if (sum > 1 && sum < 4) return 1
        else return 0
    } else {
        if (sum === 3) return 1
        else return 0
    }
}

const solveGame = (matrix) => {
    const result = []
    for (let i = 0; i < matrix.length; i++) {
        const newRow = []
        for (let j = 0; j < matrix[i].length; j++) {
            const aux = getMatrix(matrix, i, j)
            newRow.push(getStateCell(aux, matrix[i][j]))
        }
        result.push(newRow)
    }

    return result
}

export const startGame = (matrix) => {
    return solveGame(matrix)
}