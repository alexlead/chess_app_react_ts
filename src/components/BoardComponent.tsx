import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import CellComponent from './CellComponent';
import { Cell } from '../models/Cell';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

  const [selectedCell, setSelectedCell]=useState<Cell|null>(null);

  function clickCell( cell: Cell){
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMoove(cell)){
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  }


  useEffect(()=> {

    highLightCells();

  }, [selectedCell])


  function highLightCells() {
    board.highLightCells( selectedCell );
    updateBoard();
  }

  function updateBoard () {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className='board'>
        {board.cells.map((row, index) =>( 
            <React.Fragment key={index}>
                {
                    row.map(cell=>
                        <CellComponent cell={cell}  selected={ cell.x === selectedCell?.x && cell.y === selectedCell?.y } key={cell.id} clickCell={()=>clickCell(cell)}/>
                        )
                }
            </React.Fragment>
         ) )}
    </div>
  )
}

export default BoardComponent