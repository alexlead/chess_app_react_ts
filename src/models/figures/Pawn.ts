import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";

export class Pawn extends Figure {
 
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = "pawn";
        this.name = FigureName.PAWN;
      }

      canMoove(target: Cell): boolean {
        if( !super.canMoove(target)) {
          return false;
        }
        

        return true;
    }

    
}