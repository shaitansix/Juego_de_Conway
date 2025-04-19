import { useState, useEffect, useRef } from 'react'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Table from '@/components/Table'
import Cell from '@/components/Cell'
import Footer from '@/components/Footer'
import { startGame } from '@/utils/game.js'
import { setupMatrix } from '@/utils/setup.js'
import './stylesheets/TableGame.css'

const TableGame = () => {
    const [speed, setSpeed] = useState(1000)
    const [scale, setScale] = useState(0.5)
    const [dims, setDims] = useState({m: parseInt(52 * scale), n: parseInt(100 * scale) })
    const [active, setActive] = useState(false)
    const [loop, setLoop] = useState(0)

    const [matrix, setMatrix] = useState(setupMatrix(dims.m, dims.n))
    const [cells, setCells] = useState([])

    const intervalRef = useRef(null)

    useEffect(() => {
        setDims({
            m: parseInt(52 * scale), 
            n: parseInt(100 * scale)
        })

        setMatrix(setupMatrix(
            parseInt(52 * scale), 
            parseInt(100 * scale)
        ))
    }, [scale])

    useEffect(() => {
        getCells()
    }, [matrix, active])

    useEffect(() => {
        if (active) {
            intervalRef.current = setInterval(() => {
                setMatrix(prev => startGame(prev))
                setLoop(prev => prev + 1)
            }, speed)
        } else {
            clearInterval(intervalRef.current)
        }
    
        return () => clearInterval(intervalRef.current)
    }, [active])

    const getCells = () => {
        setCells(matrix?.map((row, i) => (
            row.map((col, j) => (
                <Cell key = {`cell-${i}${j}`} 
                      value = {col} 
                      clickable = {!active} 
                      matrixState = {{matrix, setMatrix}} 
                      pos = {{i, j}} />
            ))
        )))
    }

    return (
        <section className = 'tablegame-wrapper'>
            <div className = 'tablegame-container'>
                <span className = 'title'>Conway's Game of Life</span>
                <About />

                <article className = 'tablegame-body'>
                    <Menu dims = {dims} 
                          loopState = {{ loop, setLoop }}
                          activeState = {{ active, setActive }} 
                          speedState = {{ speed, setSpeed }}
                          scaleState = {{ scale, setScale }}  
                          matrixState = {{ matrix, setMatrix }}  />
                    <Table cells = {cells} 
                           dims = {dims} />
                </article>

                <Footer />
            </div>
        </section>
    )
}

export default TableGame