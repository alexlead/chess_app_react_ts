import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = "rook";
        this.name = FigureName.ROOK;
      }


      canMoove(target: Cell): boolean {
        if( !super.canMoove(target)) {
          return false;
        }
        

        return true;
    }
    
}