import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
    cell: Cell;
}

const CellComponent:FC<CellProps> = ( {cell} ) => {
  return (
    <div className={["cell", cell.color].join(' ')}>

{cell.figure?.logo && <div className={['figurine', cell.figure.color, cell.figure.logo ].join(" ")}></div>}
    </div>
  )
}

export default CellComponent