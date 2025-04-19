import { useState, useEffect } from 'react'
import './stylesheets/Cell.css'

const Cell = ({ value, clickable, pos, matrixState }) => {
    const [valueCell, setValueCell] = useState(value)
    const [isAlive, setIsAlive] = useState(false)

    useEffect(() => {
        setValueCell(value)
    }, [value])

    useEffect(() => {
        setIsAlive(Boolean(valueCell))
    }, [valueCell])

    const handleValue = (event) => {
        updateMatrix(pos.i, pos.j)
        setValueCell(valueCell === 0 ? 1 : 0)
    }

    const updateMatrix = (i, j) => {
        const aux = [...matrixState.matrix]
        aux[i][j] = aux[i][j] === 0 ? 1 : 0
        matrixState.setMatrix([...aux])
    }

    return (
        <>{ clickable ? 
            <span className = {`cell ${isAlive ? 'cell-alive' : 'cell-dead'}`} 
                  onClick = {handleValue} /> :
            <span className = {`cell ${isAlive ? 'cell-alive' : 'cell-dead'}`} />
        }</>
    )
}

export default Cell