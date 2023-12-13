import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
import { Board } from './Board';

export class Cell {

    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    avaliable: boolean; // check if the cell is available for next moving
    id: number; // react loop element key


    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.avaliable = false;
        this.id = Math.random();

    }

    isEmpty(): boolean {

        return this.figure === null;
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x) {
            return false;
        }
        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let y = min + 1; y < max; y++) {
            if (this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }

        return true;
    }
    isEmptyHoriontal(target: Cell): boolean {
        return true;
    }
    isEmptyDiagonal(target: Cell): boolean {
        return true;
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMoove(target)) {
            this.figure.moveFigure(target);
            target.figure = this.figure;
            this.figure = null;
        }
    }
}