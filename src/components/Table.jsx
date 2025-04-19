import Loader from '@/components/UI/Loader'
import './stylesheets/Table.css'

const Table = ({ cells, dims }) => {
    const styleGrid = {
        gridTemplateRows: `repeat(${dims.m}, ${520 / dims.m}px)`,
        gridTemplateColumns: `repeat(${dims.n}, ${1000 / dims.n}px)`
    }

    return (
        <div className = 'table-wrapper'>
            <article className = 'table-container'>
                { (cells?.length === dims.m && cells[0]?.length === dims.n) ? 
                    <div className = 'table-grid' style = {styleGrid}>
                        {cells}
                    </div> : 
                    <Loader />
                }
            </article>
        </div>
    )
}

export default Table