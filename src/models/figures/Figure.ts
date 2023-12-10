import { Colors } from './../Colors';
import { Cell } from "../Cell";

export type logo = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'

export enum FigureName {
    "FIGURE" = "Figure",
    "KING" = "king",
    "QUEEN" = "queen",
    "ROOK" = "rook",
    "BISHOP" = "bishop",
    "KNIGHT" = "knight",
    "PAWN" = "pawn",

}

export class Figure {

    color: Colors;
    logo: logo | null;
    cell: Cell;
    name: FigureName;
    id: number;


    constructor (color: Colors, cell: Cell) {
        
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureName.FIGURE;
        this.id = Math.random();
    }

    canMoove (target: Cell): boolean {
        return true;
    }

    moveFigure (target: Cell) {
        
    }
    
}