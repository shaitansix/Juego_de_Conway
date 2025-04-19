import './stylesheets/Footer.css'

const Footer = () => {
    return (
        <section className = 'footer-wrapper'>
            <div className = 'footer-container'>
                <span className = 'subtitle'>Reglas del juego</span>
                <span className = 'footer-rules'>
                    <span className = 'footer-rule-item'>
                        <strong>Nacimiento: </strong>
                        <span>Una celda muerta revive en la siguiente generación si tiene exactamente 3 vecinos vivos.</span>
                    </span>
                    
                    <span className = 'footer-rule-item'>
                        <strong>Supervivencia: </strong>
                        <span>Una celda viva sigue viva si tiene 2 o 3 vecinos vivos.</span>
                    </span>

                    <span className = 'footer-rule-item'>
                        <strong>Muerte por soledad: </strong>
                        <span>Una celda viva muere si tiene menos de 2 vecinos vivos (subpoblación).</span>
                    </span>

                    <span className = 'footer-rule-item'>
                        <strong>Muerte por superpoblación: </strong>
                        <span>Una celda viva muere si tiene más de 3 vecinos vivos.</span>
                    </span>
                </span>

                <span className = 'subtitle'>Detalles adicionales</span>
                <span className = 'footer-details'>
                    <span className = 'footer-detail-item'>
                        <strong>Vecinos: </strong>
                        <span>Se consideran las 8 celdas adyacentes (horizontal, vertical y diagonal).</span>
                    </span>
                    
                    <span className = 'footer-detail-item'>
                        <strong>Generaciones: </strong>
                        <span>El juego avanza en turnos discretos, aplicando las reglas a todas las celdas simultáneamente.</span>
                    </span>
                </span>
            </div>
        </section>
    )
}

export default Footer