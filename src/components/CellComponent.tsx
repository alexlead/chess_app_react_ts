import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
    cell: Cell;
    selected: boolean;
    clickCell: (cell: Cell) => void;
}

const CellComponent:FC<CellProps> = ( {cell, selected, clickCell} ) => {
  return (
    <div className={["cell", cell.color, selected ? "selected":"", cell.avaliable && cell.figure ? "available":"" ].join(' ')} onClick={()=>clickCell(cell)}>

{cell.figure?.logo && <div className={['figurine', cell.figure.color, cell.figure.logo ].join(" ")}></div>}
 {cell.avaliable && !cell.figure && <div className='available'></div>}
    </div>
  )
}

export default CellComponent