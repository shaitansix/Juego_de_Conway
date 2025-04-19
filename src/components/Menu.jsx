import { IconRotateClockwise2 } from '@tabler/icons-react'
import { setupMatrix, fillMatrix } from '@/utils/setup.js'
import { patterns } from '@/data/patterns.js'
import './stylesheets/Menu.css'

const Menu = ({ dims, loopState, activeState, speedState, scaleState, matrixState}) => {
    const imgUrls = [
        '/img-pattern-1.jpg', 
        '/img-pattern-2.jpg', 
        '/img-pattern-3.jpg', 
        '/img-pattern-4.jpg'
    ]
    
    const handleStart = (event) => {
        activeState.setActive(true)
    }

    const handleStop = (event) => {
        activeState.setActive(false)
    }


    const handleReset = (event) => {
        matrixState.setMatrix(setupMatrix(dims.m, dims.n))
        activeState.setActive(false)
        loopState.setLoop(0)
    }

    const handleSpeed = (event) => {
        speedState.setSpeed(event.target.value)
    }

    const handleScale = (event) => {
        scaleState.setScale(event.target.value)
    }

    const handleExample = (idx) => {
        matrixState.setMatrix(
            fillMatrix(matrixState.matrix, patterns[idx])
        )
    }

    return (
        <section className = 'menu-wrapper'>
            <div className = 'menu-container'>
                <span className = 'menu-scale_text'>
                    <span>Velocidad: </span>
                    <span>{speedState.speed / 1000}s</span>
                </span>
                <input className = 'menu-scale_slider' 
                       type = 'range' 
                       min = '100' 
                       max = '2000' 
                       step = '100' 
                       value = {speedState.speed}
                       onChange = {handleSpeed} />
                
                <span className = 'menu-scale_text'>
                    <span>Escala: </span>
                    <span>{scaleState.scale}x</span>
                </span>
                <input className = 'menu-scale_slider' 
                       type = 'range' 
                       min = '0.3' 
                       max = '1.0' 
                       step = '0.1' 
                       value = {scaleState.scale}
                       onChange = {handleScale} />

                <span className = 'menu-pattern_text'>Patrones de prueba: </span>
                <div className = 'menu-pattern-buttons'>
                    { imgUrls.map((url, idx) => (
                        <button className = 'menu-pattern_button' onClick = {(event) => handleExample(idx)}>
                            <img className = 'menu-pattern_img' src = {url} alt = {`img-pattern-${idx + 1}`} />
                        </button>
                    )) }
                </div>

                <button className = 'menu-main_button' onClick = {activeState.active ? handleStop : handleStart}>
                    {activeState.active ? 'Detener' : 'Iniciar'}
                </button>

                <span className = 'menu-footer'>
                    <span className = 'menu-footer_text'>
                        <span>Generaciones: </span>
                        <span>{loopState.loop}</span>
                    </span>
                    <button className = 'menu-button_reset' onClick = {handleReset}>
                        <IconRotateClockwise2 size = {24} stroke = {2} />
                    </button>
                </span>
            </div>
        </section>
    )
}

export default Menu