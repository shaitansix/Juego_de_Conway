import './stylesheets/About.css'

const About = () => {
    return (
        <section className = 'about-wrapper'>
            <div className = 'about-container'>
                <span>
                    El Juego de la Vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Aunque se llama "juego", en realidad es un sistema de evolución basado en reglas simples que no requiere intervención humana después de su inicio. Es un ejemplo fascinante de cómo patrones complejos pueden emerger a partir de reglas básicas, lo que lo ha convertido en un objeto de estudio en matemáticas, computación y teoría de sistemas complejos.<br /><br />
                    El juego se desarrolla en una cuadrícula infinita de celdas, donde cada celda puede estar viva (1) o muerta (0). La evolución de las celdas depende de sus vecinas, y las reglas determinan qué celdas nacen, mueren o sobreviven en cada generación.<br /><br />
                    El Juego de la Vida es "Turing complete", lo que significa que, en teoría, puede realizar cualquier cálculo que una computadora tradicional, demostrando el poder de sistemas simples para generar comportamientos complejos.
                </span>
            </div>
        </section>
    )
}

export default About